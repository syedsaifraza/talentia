"use client";

import { FaVideo, FaPhone, FaFile } from "react-icons/fa";

export default function CurrentMessagingUser() {
  const user = {
    name: "Aarav Sharma",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    followers: 1200,
    posts: 320,
    filesShared: [
      { name: "Report.pdf", type: "PDF", icon: <FaFile /> },
      { name: "Project.zip", type: "ZIP", icon: <FaFile /> },
      { name: "Photo.jpg", type: "Image", icon: <FaFile /> },
    ],
  };

  return (
    <div className="w-full mx-1 bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center border py-20">
      {/* Profile Image & Name */}
      <img src={user.img} alt={user.name} className="w-20 h-20 rounded-full border mb-3" />
      <h2 className="text-lg font-semibold">{user.name}</h2>

      {/* Followers & Posts */}
      <div className="flex justify-between w-full text-sm my-2 px-4">
        <div className="flex flex-col">
          <span className="font-bold">{user.followers}</span>
          <span className="text-gray-500">Followers</span>
        </div>
        <div className="flex flex-col">
          <span className="font-bold">{user.posts}</span>
          <span className="text-gray-500">Posts</span>
        </div>
      </div>

      {/* Video & Audio Call Buttons */}
      <div className="flex gap-3 my-3">
        <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600">
          <FaVideo size={20} />
        </button>
        <button className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600">
          <FaPhone size={20} />
        </button>
      </div>

      {/* Files Shared Section */}
      <div className="w-full mt-4">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Files Shared</h3>
        <div className="grid grid-cols-2 gap-2">
          {user.filesShared.map((file, index) => (
            <div key={index} className="flex items-center gap-2 p-2 bg-gray-100 rounded-md text-xs">
              {file.icon}
              <span>{file.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
