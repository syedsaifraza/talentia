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
    <div className="flex flex-col w-full bg-white h-[87vh]">
      {/* Chat Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
        <div className="flex items-center gap-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCIyTZVXyb90oYHRiiX6YkNUc0CnzGwWjI3Q&s"
            alt="Design Team"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-900">Design Team</h3>
            <p className="text-sm text-gray-500">10 members</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01" />
            </svg>
          </button>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto  p-4 space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex gap-2 items-center ${msg.sender === "me" ? "justify-end" : "justify-start  "} mb-2`}>
              <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCIyTZVXyb90oYHRiiX6YkNUc0CnzGwWjI3Q&s"
            alt="Design Team"
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-medium text-gray-900">Putri Tanjak</span>
              <span className="text-xs text-gray-500">4:30 AM</span>
            </div>
            <div
              className={`max-w-xs p-2  text-white text-sm ${
                !(msg.sender == "me") ? "bg-green-600 text-white p-3 rounded-2xl rounded-tl-md max-w-md" : "bg-green-600 p-3 rounded-2xl rounded-tl-md max-w-md text-black"
              }`}
            >
               
              {msg.text}  
            </div>
            
          </div>
            
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="p-3 border-t border-gray-300 ">

        <div className="flex items-center gap-3">
          <div className="flex-1 relative">
            <input
              type="text"
               onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleKeyDown}
              placeholder="Type your message here..."
              className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <button  onClick={sendMessage} className="p-2 bg-green-600 hover:bg-green-700 text-white rounded-full">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
        
      </div>
    </div>
  );
}
