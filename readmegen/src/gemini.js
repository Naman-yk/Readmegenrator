// gemini.js
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function generateWithGemini(prompt) {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY is not set in environment variables");
  }

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text() || "";
  } catch (error) {
    console.error("Error generating content with Gemini:", error);
    throw new Error("Failed to generate content with Gemini");
  }
}
