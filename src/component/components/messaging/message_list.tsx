"use client";

import Image from "next/image";
import { useState } from "react";


export default function MessageList() {
  const [search, setSearch] = useState("");

  // Users data
  const users = [
    { name: "Aarav Sharma", status: "Online", img: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: "Sanya Iyer", status: "Offline", img: "https://randomuser.me/api/portraits/women/2.jpg" },
    { name: "Vikram Mehta", status: "Online", img: "https://randomuser.me/api/portraits/men/3.jpg" },
    { name: "Neha Patel", status: "Offline", img: "https://randomuser.me/api/portraits/women/4.jpg" },
    { name: "Rajesh Verma", status: "Online", img: "https://randomuser.me/api/portraits/men/5.jpg" },
    { name: "Ananya Rao", status: "Online", img: "https://randomuser.me/api/portraits/women/6.jpg" },
    { name: "Rohit Khanna", status: "Offline", img: "https://randomuser.me/api/portraits/men/7.jpg" },
    { name: "Pooja Sharma", status: "Online", img: "https://randomuser.me/api/portraits/women/8.jpg" },
    { name: "Manish Kapoor", status: "Offline", img: "https://randomuser.me/api/portraits/men/9.jpg" },
    { name: "Priya Malhotra", status: "Online", img: "https://randomuser.me/api/portraits/women/10.jpg" },
    { name: "Amit Gupta", status: "Offline", img: "https://randomuser.me/api/portraits/men/11.jpg" },
    { name: "Sneha Joshi", status: "Online", img: "https://randomuser.me/api/portraits/women/12.jpg" },
    { name: "Sneha Joshi", status: "Online", img: "https://randomuser.me/api/portraits/women/12.jpg" },
  ];

  // Possible last messages
  const messages = [
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

  return (
    <div className="flex flex-col bg-white w-80 text-gray-900 h-[87vh]">
      {/* Search Bar */}
      {/* <div className="px-3">
        <input
          type="text"
          placeholder="Search messages..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div> */}
        <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Chats</h2>
          <button className="p-1 hover:bg-gray-100 rounded">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01" />
            </svg>
          </button>
        </div>

        {/* Filter and Search */}
        <div className="flex items-center gap-2 mb-3">
          <button className="px-3 py-1 text-xs border border-gray-300 rounded hover:bg-gray-50">All Chats</button>
        </div>

        <div className="relative">
          
          <input
            type="text"
            placeholder="Search users"
            className="w-full pl-10 px-8 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <svg
            className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Message List */}
      <div className="flex-1 overflow-y-auto">
         <div className="px-6 py-4">
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
            <span>💬</span>
            <span>ALL MESSAGES</span>
          </div>
          <div className="space-y-1">
               {users.map((user, index) => (
          <div key={index} className="flex items-center gap-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer">
            <div className="relative">
              <Image
                                  alt="user"
                                  height={10}
                                  width={10} className="w-10 h-10 rounded-full" src={user.img}  />
              <div
                className={`absolute bottom-0 right-0 w-3 h-3 border-2 border-white rounded-full ${
                  user.status === "Online" ? "bg-green-400" : "bg-gray-400"
                }`}
              ></div>
            </div>


             <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
                    {/* <span className="text-xs text-gray-500">{chat.time}</span> */}
                  </div>
                  {/* <p className="text-xs text-gray-500 truncate">{chat.message}</p> */}
                  <p className="text-xs text-gray-500 truncate">{messages[index % messages.length]}</p>
                </div>

            {/* <div className="ml-3 flex-1">
              <div className="font-semibold">{user.name}</div>
              <div className="text-sm text-gray-500 truncate w-48">
                {messages[index % messages.length]}
              </div>
            </div> */}
          </div>
        ))}
          </div>

        
         </div>
       
      </div>
    </div>
  );
}
