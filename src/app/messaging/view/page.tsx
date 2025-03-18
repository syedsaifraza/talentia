"use client";

import { useState, useEffect, useRef } from "react";

export default function MessageView() {
  const [messages, setMessages] = useState([
    { text: "Hey! How are you?", sender: "other" },
    { text: "I'm good! What about you?", sender: "me" },
    { text: "Doing well, thanks!", sender: "other" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  // Possible last messages
  const messagesReply = [
    "Hey, how are you?",
    "Let's catch up soon!",
    "Did you check the update?",
    "I'll call you later!",
    "Can we reschedule?",
    "Great job on the project!",
    "See you at the meeting.",
    "Where are you now?",
    "I have a surprise for you!",
    "Don't forget our plan!",
    "Send me the details.",
    "Talk to you soon!",
  ];

  const messagesEndRef = useRef(null);

  // Scroll to the latest message
  useEffect(() => {
    if(messagesEndRef.current==null){

    }else{
    //  messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
 
    }
     }, [messages]);

  // Handle sending a new message
  const sendMessage = () => {
    if (newMessage.trim() === "") return;

    setMessages((prev) => [...prev, { text: newMessage, sender: "me" }]);
    setNewMessage("");

    // Simulate a response after a delay
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: messagesReply[Math.floor(Math.random()*(messagesReply.length-1))], sender: "other" }]);
    }, 1000);
  };

  // Send message on Enter key press
  const handleKeyDown = (e:any) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="flex flex-col w-full bg-white border border-gray-300 rounded-lg shadow-lg h-[85vh]">
      {/* Chat Header */}
      <div className="p-3 bg-white text-gray-800 font-medium text-lg rounded-t-lg border-b border-gray-300">
        Chat with Aarav Sharma  
      </div>

      {/* Chat Messages */}
      <div className="flex flex-col p-3 flex-grow overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"} mb-2`}>
            <div
              className={`max-w-xs p-2 rounded-lg text-white text-sm ${
                !(msg.sender == "me") ? "bg-indigo-500" : "bg-gray-100 text-black"
              }`}
            >
              {msg.text}  
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="p-3 border-t border-gray-300 flex items-center">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
        />
        <button
          onClick={sendMessage}
          className="ml-2 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}
