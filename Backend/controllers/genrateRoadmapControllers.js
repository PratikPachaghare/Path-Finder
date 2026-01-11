// import axios from "axios";
// import dotenv from "dotenv";
// import CareerPath from "../models/CareerPath.js";
// import Assessment from "../models/Assessment.js";
// dotenv.config();

// const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
// const MODEL_NAME = "gemini-1.5-flash";

// const generate_Roadmap = async (req, res) => {
//   const userResponses = req.body.responses;
//   const userId = req.body.userId;

//   if (!userResponses || typeof userResponses !== "object") {
//     return res.status(400).json({ error: "Invalid user responses format" });
//   }

//   try {
//     const formattedResponses = Object.keys(userResponses).map((question) => ({
//       question: String(question).trim(),
//       answer:
//         typeof userResponses[question] === "string"
//           ? userResponses[question].trim()
//           : JSON.stringify(userResponses[question]), // Convert objects to JSON
//     }));

//     // Save assessment
//     const newAssessment = await Assessment.create({
//       user: userId,
//       responses: formattedResponses,
//     });

//     console.log("Backend received userId:", userId);

//     const requestBody = {
//       contents: [
//         {
//           parts: [
//             {
//               text: `Given the following career assessment responses: ${JSON.stringify(
//                 userResponses
//               )},
//               predict the best career path in this structured JSON format:

//               {
//                 "title": "Career Name",
//                 "description": "A brief overview of the career, what it involves, and why it suits the user's skills and interests.",
//                 "foundation": {
//                     "core_subjects": ["Core Subject 1", "Core Subject 2", "Core Subject 3"],
//                     "essential_knowledge": ["Key Concept 1", "Key Concept 2"]
//                 },
//                 "skills": {
//                     "technical": ["Tech Skill 1", "Tech Skill 2"],
//                     "soft": ["Soft Skill 1", "Soft Skill 2"]
//                 },
//                 "tools_technologies": ["Tool 1", "Tool 2"],
//                 "job_roles": [
//                     {
//                         "title": "Job Role 1",
//                         "description": "Short summary of what this role does.",
//                         "requirements": ["Requirement 1", "Requirement 2"]
//                     }
//                 ],
//                 "career_growth": {
//                     "year1": {
//                         "title": "Entry-Level Position",
//                         "responsibilities": ["Task 1", "Task 2"],
//                         "salary_range": "X - Y LPA"
//                     },
//                     "year2": {
//                         "title": "Entry-Level Position",
//                         "responsibilities": ["Task 1", "Task 2"],
//                         "salary_range": "X - Y LPA"
//                     },
//                     "year3": {
//                         "title": "Entry-Level Position",
//                         "responsibilities": ["Task 1", "Task 2"],
//                         "salary_range": "X - Y LPA"
//                     },
//                     "year5": {
//                         "title": "Entry-Level Position",
//                         "responsibilities": ["Task 1", "Task 2"],
//                         "salary_range": "X - Y LPA"
//                     },
//                 },
//                 "industries": ["Industry 1", "Industry 2"],
//                 "top_companies": ["Company 1", "Company 2"],
//                 "job_market_trends": {
//                     "growth_rate": "XX%",
//                     "demand": "High",
//                     "future_scope": "Short insight on future demand"
//                 },
//                 "recommended_courses": [
//                     {
//                         "name": "Course Name",
//                         "platform": "Platform Name",
//                         "url": "Course URL",
//                         "youtube": "YouTube URL",
//                         "duration": "X months",
//                         "difficulty": "Beginner"
//                     }
//                 ],
//                 "certifications": ["Certification 1", "Certification 2"],
//                 "freelancing_opportunities": [
//                     {
//                         "platform": "Freelance Platform",
//                         "top_skills": ["Skill 1", "Skill 2"],
//                         "earning_potential": "X - Y per project"
//                     }
//                 ],
//                 "additional_resources": {
//                     "books": ["Book 1", "Book 2"],
//                     "communities": ["Community 1", "Community 2"],
//                     "events": ["Event 1", "Event 2"]
//                 }
//                 "CurrentWorld_and_Future_World_Requrment": {
//     "current_trends": {
//         "essential_skills": ["Machine Learning", "Deep Learning", "Python", "TensorFlow", "Data Engineering"],
//         "industry_demand": "High demand for AI professionals in automation, healthcare, and finance.",
//         "top_companies_hiring": ["Google", "Microsoft", "OpenAI"],
//         "required_certifications": ["TensorFlow Developer Certificate", "AWS Machine Learning Specialty"]
//     },
//     "future_requirements": {
//         "emerging_skills": ["Explainable AI (XAI)", "Quantum Computing", "AI Ethics & Bias Management"],
//         "predicted_growth": "AI market expected to grow at 30% CAGR by 2030",
//         "future_industries": ["AI in Robotics", "Personalized AI Assistants", "Autonomous Vehicles"],
//         "recommended_future_courses": ["Advanced AI Ethics - Coursera", "Quantum Machine Learning - edX"]
//     }
// }
//               }

//               in this link sectin give the actual like to redirect the other platform course and also active the you tub links like*
//               and give the salary in laks like 3 to 4 like that give the accurate salery in rupees
//               Ensure the response follows this exact structure with relevant data. Do not wrap it in markdown (\`\`\`json ... \`\`\`).
//               `,
//             },
//           ],
//         },
//       ],
//     };

//     // Call Gemini API
//     const response = await axios.post(
//       `https://generativelanguage.googleapis.com/v1/models/${MODEL_NAME}:generateContent?key=${GEMINI_API_KEY}`,
//       requestBody,
//       { headers: { "Content-Type": "application/json" } }
//     );

//     if (!response.data?.candidates?.[0]?.content?.parts?.[0]?.text) {
//       return res.status(500).json({ error: "No response from AI" });
//     }

//     let aiResponse = response.data.candidates[0].content.parts[0].text;
//     aiResponse = aiResponse.replace(/```json|```/g, "").trim();

//     try {
//       const structuredResponse = JSON.parse(aiResponse);
//       res.json(structuredResponse);

//       await CareerPath.create({
//         user: userId,
//         ...structuredResponse,
//       });
//     } catch (error) {
//       console.error("AI response parsing error:", error);
//       return res.status(500).json({ error: "Invalid AI response format" });
//     }
//   } catch (error) {
//     console.error("Error:", error.response?.data || error.message);
//     res.status(500).json({ error: "Failed to fetch prediction" });
//   }
// };

// export default generate_Roadmap;

import axios from "axios";
import dotenv from "dotenv";
import CareerPath from "../models/CareerPath.js";
import Assessment from "../models/Assessment.js";
dotenv.config();

const GROQ_API_KEY = process.env.GROQ_API_KEY;
// Using Llama 3.3 70B for high quality JSON generation
const MODEL_NAME = "llama-3.3-70b-versatile"; 

const generate_Roadmap = async (req, res) => {
  const userResponses = req.body.responses;
  const userId = req.body.userId;

  if (!userResponses || typeof userResponses !== "object") {
    return res.status(400).json({ error: "Invalid user responses format" });
  }

  try {
    const formattedResponses = Object.keys(userResponses).map((question) => ({
      question: String(question).trim(),
      answer:
        typeof userResponses[question] === "string"
          ? userResponses[question].trim()
          : JSON.stringify(userResponses[question]), // Convert objects to JSON
    }));

    // Save assessment
    const newAssessment = await Assessment.create({
      user: userId,
      responses: formattedResponses,
    });

    console.log("Backend received userId:", userId);

    const systemPrompt = `You are an expert AI Career Counselor. You must output ONLY valid JSON. Do not include any explanation, markdown formatting, or introductory text.`;
    
    const userPrompt = `
      Given the following career assessment responses: ${JSON.stringify(userResponses)},
      predict the best career path.

      Output strictly in this JSON format:
      {
        "title": "Career Name",
        "description": "Brief overview...",
        "foundation": {
            "core_subjects": ["Subject 1", "Subject 2"],
            "essential_knowledge": ["Concept 1", "Concept 2"]
        },
        "skills": {
            "technical": ["Skill 1", "Skill 2"],
            "soft": ["Skill 1", "Skill 2"]
        },
        "tools_technologies": ["Tool 1", "Tool 2"],
        "job_roles": [
            {
                "title": "Role Name",
                "description": "Summary",
                "requirements": ["Req 1", "Req 2"]
            }
        ],
        "career_growth": {
            "year1": { "title": "Pos", "responsibilities": ["Task"], "salary_range": "X - Y LPA" },
            "year2": { "title": "Pos", "responsibilities": ["Task"], "salary_range": "X - Y LPA" },
            "year3": { "title": "Pos", "responsibilities": ["Task"], "salary_range": "X - Y LPA" },
            "year5": { "title": "Pos", "responsibilities": ["Task"], "salary_range": "X - Y LPA" }
        },
        "industries": ["Ind 1", "Ind 2"],
        "top_companies": ["Comp 1", "Comp 2"],
        "job_market_trends": {
            "growth_rate": "XX%",
            "demand": "High",
            "future_scope": "Insight"
        },
        "recommended_courses": [
            {
                "name": "Course Name",
                "platform": "Platform Name",
                "url": "Actual URL to course",
                "youtube": "Actual YouTube Playlist URL",
                "duration": "X months",
                "difficulty": "Beginner"
            }
        ],
        "certifications": ["Cert 1", "Cert 2"],
        "freelancing_opportunities": [
            {
                "platform": "Upwork/Fiverr",
                "top_skills": ["Skill"],
                "earning_potential": "₹X - ₹Y per project"
            }
        ],
        "additional_resources": {
            "books": ["Book 1"],
            "communities": ["Comm 1"],
            "events": ["Event 1"]
        },
        "CurrentWorld_and_Future_World_Requrment": {
            "current_trends": {
                "essential_skills": ["Skill 1"],
                "industry_demand": "Description",
                "top_companies_hiring": ["Comp 1"],
                "required_certifications": ["Cert 1"]
            },
            "future_requirements": {
                "emerging_skills": ["Skill 1"],
                "predicted_growth": "Description",
                "future_industries": ["Ind 1"],
                "recommended_future_courses": ["Course 1"]
            }
        }
      }

      IMPORTANT REQUIREMENTS:
      1. Provide ACTUAL valid URLs for courses and YouTube links (do not use placeholders).
      2. Provide salary in Indian Rupees (LPA) (e.g., "3.5 - 5.0 LPA").
      3. Ensure the JSON is valid and parsable.
    `;

    // Call Groq API
    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: MODEL_NAME,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        // This forces the model to return valid JSON
        response_format: { type: "json_object" }, 
        temperature: 0.5, // Slight creativity for descriptions, but low enough for structure
      },
      {
        headers: {
          "Authorization": `Bearer ${GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const choice = response.data?.choices?.[0];
    
    if (!choice || !choice.message?.content) {
      return res.status(500).json({ error: "No response from AI" });
    }

    let aiResponse = choice.message.content;

    // Cleanup: Just in case the model wraps it in markdown despite instructions
    aiResponse = aiResponse.replace(/```json|```/g, "").trim();

    try {
      const structuredResponse = JSON.parse(aiResponse);
      
      // Send response to frontend
      res.json(structuredResponse);

      // Save to database
      await CareerPath.create({
        user: userId,
        ...structuredResponse,
      });

    } catch (error) {
      console.error("AI response parsing error:", error);
      console.log("Raw AI Response:", aiResponse); // Log raw response for debugging
      return res.status(500).json({ error: "Invalid AI response format" });
    }
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch prediction" });
  }
};

export default generate_Roadmap;