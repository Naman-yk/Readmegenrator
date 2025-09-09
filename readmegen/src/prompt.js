export function buildReadmePrompt(data) {
    return `
    You are an expert technical writer.  
    Generate a **professional, well-formatted README.md** for this GitHub repository.  
    The README must be **clean, readable, and spacious** with proper Markdown styling.  
  
    📝 Repository Metadata:
    - Project Name: ${data.name}
    - Description: ${data.description || "No description available"}
    - Primary Language: ${data.language || "Unknown"}
    - License: ${data.license || "Not specified"}
    - Stars: ${data.stars || 0}
    - Forks: ${data.forks || 0}
    - Watchers: ${data.watchers || 0}
    - Open Issues: ${data.openIssues || 0}
    - Default Branch: ${data.defaultBranch || "main"}
  
    ---
  
    📌 **README Structure (follow exactly with proper spacing & short text):**
  
    # {Project Title}
  
    ## 📖 Description  
    - Write **2–3 short sentences** introducing the project.  
    - Explain what problem it solves or why it is useful.  
  
    ---
  
    ## ✨ Features  
    - List **clear and concise features** (3–6 points).  
    - Keep descriptions short (max 1 line per feature).  
  
    ---
  
    ## 🚀 Installation Guide  
    1. Clone the repository  
    2. Navigate into the project directory  
    3. Install dependencies (npm / yarn / pnpm)  
    4. Run the development server  
  
    *(Adjust instructions if backend, docker, or prisma is relevant)*  
  
    ---
  
    ## 🛠 Tech Stack  
    - **Frontend:** (e.g., Next.js, React, TypeScript)  
    - **Backend:** (e.g., Node.js, Express, serverless)  
    - **Database:** (e.g., PostgreSQL, MongoDB, Prisma)  
    - **State Management:** (e.g., Redux Toolkit, Zustand, Context API)  
    - **Testing:** (e.g., Jest, React Testing Library)  
  
    ---
  
    ## 📂 Project Structure  
    \`\`\`plaintext
    Show a realistic project structure with folders and key files.
    \`\`\`
  
    ---
  
    ## 📊 Repository Info  
    - ⭐ Stars: ${data.stars || 0}  
    - 🍴 Forks: ${data.forks || 0}  
    - 👀 Watchers: ${data.watchers || 0}  
    - ❗ Open Issues: ${data.openIssues || 0}  
    - 🌿 Default Branch: ${data.defaultBranch || "main"}  
  
    ---
  
    ## 📜 License  
    - ${data.license || "Not specified"}  
    - If missing, suggest adding a license (e.g., MIT, Apache-2.0, GPL). 
    
    🔍 Suggested Improvements:
   - 📄 Add a more detailed README with usage instructions.
    - ⚖️ Add a LICENSE file to clarify usage rights.
    - 🧪 Add unit tests for critical modules.
    - 🚀 Setup CI/CD for automated testing.

  
    ---
  
    ⚡ **Important Formatting Rules:**  
    - Always use **short paragraphs and bullet points** (avoid walls of text).  
    - Keep sections **spaced out** with horizontal rules (---).  
    - Avoid placeholders like "Feature 1". Instead, generate realistic text.  
    - If information is missing, **intelligently suggest plausible defaults**.  
    `;
  }
  