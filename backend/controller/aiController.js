const { generateCoverLetter } = require("../services/geminiService");

const generateLetter = async (req, res) => {
  try {
    const { company, role, notes, tone } = req.body;

    if (!company || !role || !tone) {
      return res.status(400).json({
        success: false,
        message: "Company, role and tone are required",
      });
    }

    const coverLetter = await generateCoverLetter(
      company,
      role,
      notes || "",
      tone
    );

    res.status(200).json({
      success: true,
      coverLetter,
    });
  } catch (error) {
    console.error("Gemini Error:",error);
const { generateCoverLetter } = require("../services/geminiService");
    res.status(500).json({
      success: false,
      message: "error.message",
    });
  }
};

module.exports = {
  generateLetter,
};