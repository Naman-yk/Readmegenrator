import {Octokit} from "@octokit/rest";

const octokit = new Octokit({auth: process.env.GITHUB_TOKEN});

export function parseRepoUrl(repoUrl){
    const match = repoUrl.match(/github\.com[:\/]([^\/]+)\/([^\/]+)(?:\.git)?/i);
    if (!match) throw new Error("Invalid GitHub repo URL");
    return{owner: match[1], repo: match[2]};



}
export async function fetchRepoInfo(owner,repo) {
    const {data: repoData} = await octokit.repos.get({owner,repo});

    let readme  = null;
    try{
        const {data} = await octokit.repos.getReadme({owner,repo});
        readme = Buffer.from(data.content,"base64").toString("utf8");

    }catch{}
    let topics=[];
    
    const {data: ref} = await octokit.git.getRef({
        owner,
        repo,
        ref:`heads/${repoData.default_branch}`,
    });
    const {data: tree}= await octokit.git.getTree({
        owner,
        repo,
        tree_sha: ref.object.sha,
        recursive: "1",

    });
    return{
        name: repoData.name,
        description: repoData.description || "No description available",
        language: repoData.language || "Unknown",
        license: repoData.license?.name || "Unknown",
        cloneUrl: repoData.clone_url,
        stars: repoData.stargazers_count,
        forks: repoData.forks_count,
        watchers: repoData.watchers_count,
        openIssues: repoData.open_issues_count,
        defaultBranch: repoData.default_branch,
        
    };

}