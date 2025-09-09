import React from "react";

export function RepoInfo({ repo }) {
  return (
    <div className="repo-info">
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <p>⭐ Stars: {repo.stargazers_count}</p>
      <p>🍴 Forks: {repo.forks_count}</p>
      <a href={repo.html_url} target="_blank" rel="noreferrer">
        View on GitHub
      </a>
    </div>
  );
}


