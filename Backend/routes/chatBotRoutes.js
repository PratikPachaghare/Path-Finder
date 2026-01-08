const express = require("express");
const { chatbotResponse } = require("../controllers/chatbotController");


const router = express.Router();

// Store previous messages
let chatHistory = [];

router.post("/chatBot",chatbotResponse );

module.exports = router;
