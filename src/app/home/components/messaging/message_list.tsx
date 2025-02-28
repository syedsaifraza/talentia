"use client";

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
    <div className="flex flex-col w-80 text-gray-900 border-r border-gray-300 h-screen py-20 pb-2">
      {/* Search Bar */}
      <div className="p-3">
        <input
          type="text"
          placeholder="Search messages..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Message List */}
      <div className="h-full overflow-y-auto">
        {users.map((user, index) => (
          <div key={index} className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer">
            <div className="relative">
              <img className="w-10 h-10 rounded-full" src={user.img} alt={user.name} />
              <div
                className={`absolute bottom-0 right-0 w-3 h-3 border-2 border-white rounded-full ${
                  user.status === "Online" ? "bg-green-400" : "bg-gray-400"
                }`}
              ></div>
            </div>
            <div className="ml-3 flex-1">
              <div className="font-semibold">{user.name}</div>
              <div className="text-sm text-gray-500 truncate w-48">
                {messages[index % messages.length]}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
