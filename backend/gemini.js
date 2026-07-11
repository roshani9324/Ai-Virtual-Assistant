import axios from "axios";

const gemini = async (prompt) => {
  try {
    
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

    const result = await axios.post(apiUrl, {
      contents: [
        {
          parts: [{ text: prompt }],
        },
      ],
    });

    return result.data // seedha reply text return kar
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default gemini;
