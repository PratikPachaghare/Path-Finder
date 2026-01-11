// import axios from "axios";
// import dotenv from "dotenv";
// import Assessment from "../models/Assessment.js";

// dotenv.config();

// const GEMINI_API_CHATBOT_KEY = process.env.GEMINI_API_KEY;
// const MODEL_NAME = "gemini-1.5-flash";

// export const chatbotResponse = async (req, res) => {
//   try {
//     const { messages, username,userId } = req.body;
//     console.log("assiment data :",username,userId);
//     const assessment = await Assessment.findOne({ user: userId })
//   .sort({ createdAt: -1 }) // Sort by newest first
//   .limit(1); // Get only the latest one


//     // console.log("assiment data :",assessment);
    
//     const formattedMessages = messages.map(msg => `${msg.sender}: ${msg.text}`).join("\n");
//     const prompt = `You are Sarthi AI, a helpful assistant. Respond to the user in a friendly and informative manner.
//     this is a user name 
//     User: ${username}

//     if your ask about carrear related qution then send answer are you show the know about level and eduction of user.
//     give the user answer but don't show that the you have a any assismet of user, provided by the below assiment qution and asnwering data
//     Assisment:
//     ${assessment?assessment:"assement is snot availble for this user "}
//     Conversation:
//     ${formattedMessages}
    
//     AI:`;
    
//     const requestBody = {
//       contents: [{ parts: [{ text: prompt }] }],
//     };

//     const response = await axios.post(
//       `https://generativelanguage.googleapis.com/v1/models/${MODEL_NAME}:generateContent?key=${GEMINI_API_CHATBOT_KEY}`,
//       requestBody,
//       { headers: { "Content-Type": "application/json" } }
//     );

//     if (!response.data || !response.data.candidates?.[0]?.content?.parts?.[0]?.text) {
//       return res.status(500).json({ error: "No response from AI" });
//     }

//     const aiReply = response.data.candidates[0].content.parts[0].text.trim();
//     res.json({ reply: aiReply });
//   } catch (error) {
//     console.error("Chatbot Error:", error.response?.data || error.message);
//     res.status(500).json({ error: "Failed to fetch AI response" });
//   }
// };


import axios from "axios";
import dotenv from "dotenv";
import Assessment from "../models/Assessment.js";

dotenv.config();

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const MODEL_NAME = "llama-3.3-70b-versatile";

export const chatbotResponse = async (req, res) => {
  try {
    const { messages, username, userId } = req.body;
    console.log("Assessment data request for:", username, userId);

    const assessment = await Assessment.findOne({ user: userId })
      .sort({ createdAt: -1 }) // Sort by newest first
      .limit(1); // Get only the latest one

    // Format conversation history for the AI context
    const formattedHistory = messages
      .map((msg) => `${msg.sender}: ${msg.text}`)
      .join("\n");

    const assessmentData = assessment
      ? JSON.stringify(assessment)
      : "Assessment is not available for this user.";

    // Construct the System Prompt (Context & Instructions)
    const systemPrompt = `
    You are Sarthi AI, a helpful assistant. Respond to the user in a friendly and informative manner.
    
    User Context:
    - Name: ${username}
    - Assessment Data: ${assessmentData}

    Instructions:
    1. If the user asks career-related questions, use the assessment data to tailor your answer (e.g., matching their education level/interests).
    2. Do NOT explicitly say "I see in your assessment file...". Instead, just naturally give advice based on that knowledge.
    3. If no assessment is available, answer generally.
    `;

    // Call Groq API
    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: MODEL_NAME,
        messages: [
          { role: "system", content: systemPrompt },
          {
            role: "user",
            content: `Here is the current conversation:\n${formattedHistory}\n\nAI reply:`,
          },
        ],
        temperature: 0.7, // Balance between creativity and focus
      },
      {
        headers: {
          Authorization: `Bearer ${GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Check for valid response
    const aiReply = response.data?.choices?.[0]?.message?.content;

    if (!aiReply) {
      return res.status(500).json({ error: "No response from AI" });
    }

    res.json({ reply: aiReply.trim() });
  } catch (error) {
    console.error(
      "Chatbot Error:",
      error.response?.data || error.message
    );
    res.status(500).json({ error: "Failed to fetch AI response" });
  }
};