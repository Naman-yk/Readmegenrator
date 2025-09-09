📘 README Generator

An intelligent system that automatically generates a complete and professional README.md file for any public GitHub repository using the GitHub API and Google Gemini API.

This tool helps developers quickly bootstrap high-quality READMEs with sections like Description, Features, Tech Stack, Installation, Usage, and more.

✨ Features

🔍 Fetch repo details (name, description, stars, topics, language, files) directly from GitHub API

🤖 Auto-generate missing sections (features, usage, detailed description) using Google Gemini

🧩 Template-based structure → ensures every README has consistent, professional formatting

📦 Tech stack detection via package.json, requirements.txt, or repo language

🛠 License suggestions if none exists

🏷 Topics & keywords extraction from GitHub metadata for SEO-friendly READMEs

🛠 Tech Stack

Frontend: React (Vite/CRA)

Backend: Node.js, Express

APIs:

GitHub REST API (@octokit/rest)

Google Gemini API (@google/generative-ai)


bytetask/
├── readmegen/
│   ├── frontend/          # React frontend
│   │   └── src/           # Components & UI
│   ├── src/               # Backend source
│   │   ├── gemini.js      # Gemini API integration
│   │   ├── github.js      # GitHub API fetch logic
│   │   ├── prompt.js      # Prompt templates for Gemini
│   │   └── template.js    # README template structure
│   ├── package.json
│   └── ...
└── .gitignore
