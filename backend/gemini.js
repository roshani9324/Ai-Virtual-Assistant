import axios from "axios";

const gemini = async (prompt) => {
  try {
    
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

    const result = await axios.post(apiUrl, {
      contents: [
        {
          parts: [{ text: prompt }],
        },
      ],
    });

    return result.data.candidates[0].content.parts[0].text; // seedha reply text return kar
  } catch (err) {
    console.log(err?.response?.data || err.message);
    throw err;
  }
};

export default gemini;
