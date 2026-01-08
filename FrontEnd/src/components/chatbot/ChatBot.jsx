import React, { useState, useEffect, useRef } from "react";
import { Bot, Send } from "lucide-react";

const ChatDashboard = ({ user }) => {
  const [messages, setMessages] = useState([
    { sender: "ai", text: `Hello! ${user.name} How can I assist you today?` }
  ]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages([...newMessages]); // Remove duplicate thinking dots
    setIsThinking(true);
    setInput("");
    
    try {
      const response = await fetch("http://localhost:3000/api/chatBot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: newMessages.slice(-12), username: user.name, userId:user._id }), // Send last 12 messages
      });
    
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    
      const data = await response.json();
      const aiResponse = data.reply; // Adjust according to your backend response structure
    
      setMessages([...newMessages, { sender: "ai", text: aiResponse }]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto bg-white p-6 shadow-xl rounded-lg text-black">
      <div className="flex items-center justify-center gap-2 text-3xl font-bold p-5 border-b border-gray-300">
        <Bot className="w-10 h-10 text-blue-600" />
        <span className="text-blue-600">Sarthi AI - Ask Anything</span>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-100 rounded-lg">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-4 my-2 rounded-lg w-fit max-w-lg shadow-md ${msg.sender === "user" ? "bg-blue-600 text-white self-end ml-auto" : "bg-gray-300 text-black"}`}
          >
            {msg.text}
          </div>
        ))}
        {isThinking && <div className="p-4 my-2 rounded-lg w-fit max-w-lg shadow-md bg-gray-300 text-black text-lg animate-pulse">...</div>}
        <div ref={chatEndRef} />
      </div>
      <div className="flex p-3 border-t border-gray-300 bg-gray-50 rounded-lg">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          className="flex-1 p-3 border rounded-lg text-black bg-white shadow-sm"
          placeholder="Type a message..."
        />
        <button onClick={sendMessage} className="ml-3 p-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
          <Send className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default ChatDashboard;