import express from 'express';
import dotenv from "dotenv";
import { parseRepoUrl, fetchRepoInfo } from "./github.js";
import { generateWithGemini } from "./gemini.js";
import { buildReadmePrompt } from "./prompt.js";
import cors from "cors";

dotenv.config();



const app = express();//instance of express created here.
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/generate", async (req, res) => {
  console.log("Incoming request body:", req.body);

  try {
    const { repoUrl } = req.body;
    if (!repoUrl) {
      return res.status(400).json({ error: "repoUrl is required" });
    }

    const { owner, repo } = parseRepoUrl(repoUrl);

    const data = await fetchRepoInfo(owner, repo);

    const prompt = buildReadmePrompt(data);

    let readme = "";
    try {
      readme = await generateWithGemini(prompt);
    } catch (err) {
      console.error("⚠️ Gemini failed:", err.message);
      return res.status(500).json({ error: "Gemini failed to generate README" });
    }

    res.json({ status: "ok", metadata: data, readme });
  } catch (error) {
    console.error(" Server error:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(3006, () => console.log(" Server running on port 3006"));


//npm install express @octokit/rest node-fetch
//npm install --save-dev typescript ts-node nodemon

//