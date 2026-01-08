import axios from "axios";
import dotenv from "dotenv";
import Assessment from "../models/Assessment.js";

dotenv.config();

const GEMINI_API_CHATBOT_KEY = process.env.GEMINI_API_KEY;
const MODEL_NAME = "gemini-1.5-flash";

export const chatbotResponse = async (req, res) => {
  try {
    const { messages, username,userId } = req.body;
    console.log("assiment data :",username,userId);
    const assessment = await Assessment.findOne({ user: userId })
  .sort({ createdAt: -1 }) // Sort by newest first
  .limit(1); // Get only the latest one


    // console.log("assiment data :",assessment);
    
    const formattedMessages = messages.map(msg => `${msg.sender}: ${msg.text}`).join("\n");
    const prompt = `You are Sarthi AI, a helpful assistant. Respond to the user in a friendly and informative manner.
    this is a user name 
    User: ${username}

    if your ask about carrear related qution then send answer are you show the know about level and eduction of user.
    give the user answer but don't show that the you have a any assismet of user, provided by the below assiment qution and asnwering data
    Assisment:
    ${assessment?assessment:"assement is snot availble for this user "}
    Conversation:
    ${formattedMessages}
    
    AI:`;
    
    const requestBody = {
      contents: [{ parts: [{ text: prompt }] }],
    };

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1/models/${MODEL_NAME}:generateContent?key=${GEMINI_API_CHATBOT_KEY}`,
      requestBody,
      { headers: { "Content-Type": "application/json" } }
    );

    if (!response.data || !response.data.candidates?.[0]?.content?.parts?.[0]?.text) {
      return res.status(500).json({ error: "No response from AI" });
    }

    const aiReply = response.data.candidates[0].content.parts[0].text.trim();
    res.json({ reply: aiReply });
  } catch (error) {
    console.error("Chatbot Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch AI response" });
  }
};
