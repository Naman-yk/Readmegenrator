import React, { useState } from "react";
import {RepoInfo} from "./RepoInfo";
import ReactMarkdown from "react-markdown";
import "./index.css";

function App() {
  const [repoUrl, setRepoUrl] = useState("");
  const [readme, setReadme] = useState("");
  const [repoData, setRepoData] = useState(null);
  const [loading, setLoading] = useState(false);
  //if there is null repo or no repo set all the value to null and keep the loading data to true .

  const handleGenerate = async () => {
    if (!repoUrl) return;
    setLoading(true);
    setReadme("");
    setRepoData(null);

    try {
      const response = await fetch("http://localhost:3006/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ repoUrl }),
      });

      const data = await response.json();
      setReadme(data.readme || "No README generated.");
      setRepoData(data.repoData || null);
    } catch (error) {
      console.error("Error:", error);
      setReadme("❌ Failed to fetch README.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1>⚡ AI README Generator</h1>
      <input
        type="text"
        placeholder="Enter GitHub Repo URL"
        value={repoUrl}
        onChange={(e) => setRepoUrl(e.target.value)}
      />
      <button onClick={handleGenerate} disabled={loading}>
        {loading ? "Generating..." : "Generate README"}
      </button>

      {repoData && <RepoInfo repo={repoData} />}

      <div className="readme-container">
        <ReactMarkdown>{readme}</ReactMarkdown>
      </div>
    </div>
  );
}

export default App;
