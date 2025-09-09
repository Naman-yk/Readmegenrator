/**
 * Generates a structured README.md content.
 * @param {Object} data - Repo metadata
 * @param {string} aiText - AI-generated description
 */
export function generateReadme(data, aiText) {
    return `
  # ${data.name}
  
  ## 📌 Description
  ${aiText || data.description || "No description provided."}
  
  ## ✨ Features
  - Feature 1 (to be updated)
  - Feature 2 (to be updated)
  
  ## 🚀 Installation
  \`\`\`bash
  git clone ${data.cloneUrl}
  cd ${data.name}
  npm install
  npm run dev
  \`\`\`
  
  ## 🛠 Tech Stack
  - ${data.language || "Unknown"}
  
  ## 📂 Project Structure
  (To be documented based on source code)
  
  ## 📊 Repository Stats
  - ⭐ Stars: ${data.stars}
  - 🍴 Forks: ${data.forks}
  - 👀 Watchers: ${data.watchers}
  - ❗ Open Issues: ${data.openIssues}
  - 🌿 Default Branch: ${data.defaultBranch}
  
  ## 📜 License
  ${data.license}
  `;
  }
  