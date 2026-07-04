const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function generateCoverLetter(company, role, notes, tone) {
  const prompt = `
Write a professional cover letter.

Company: ${company}
Role: ${role}
Notes: ${notes}
Tone: ${tone}

Keep it clear, relevant, and well-structured.
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text;
}

module.exports = { generateCoverLetter };