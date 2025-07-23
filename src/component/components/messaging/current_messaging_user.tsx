"use client";

import Image from "next/image";
import { FaVideo, FaPhone, FaFile, FaHeart, FaComment, FaUser } from "react-icons/fa";

export default function ProfileDetails() {
  const user = {
    name: "Aarav Sharma",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    followers: 1200,
    posts: 320,
    location: "Designer, CA",
    phone: "+01-222-364522",
    email: "aarav.sharma@gmail.com",
    address: "1134 Ridder Park Road, San Francisco, CA 94851",
    filesShared: [
      { name: "Report.pdf", type: "PDF", icon: <FaFile /> },
      { name: "Project.zip", type: "ZIP", icon: <FaFile /> },
      { name: "Photo.jpg", type: "Image", icon: <FaFile /> },
    ],
  };

  return (
    <div className="flex flex-col  bg-white ">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h3 className="font-semibold text-gray-900">Profile Details</h3>
        <button className="p-1 hover:bg-gray-100 rounded">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="h-[60vh] overflow-y-scroll ">
            {/* Profile Section */}
      <div className="p-6 text-center border-b border-gray-200">
        <div className="relative mx-auto mb-4">
          <Image
            src={user.img}
            alt={user.name}
            width={80}
            height={80}
            className="w-20 h-20 rounded-full object-cover mx-auto border"
          />
        </div>

        <h4 className="text-lg font-semibold text-gray-900 mb-1">{user.name}</h4>
        <p className="text-sm text-gray-500 mb-4">{user.location}</p>

        {/* Followers & Posts */}
        <div className="flex justify-center gap-6 text-sm mb-4">
          <div className="flex flex-col">
            <span className="font-bold">{user.followers}</span>
            <span className="text-gray-500">Followers</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">{user.posts}</span>
            <span className="text-gray-500">Posts</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-3">
          <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-50">
            <FaUser className="w-4 h-4" />
          </button>
          <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-50">
            <FaHeart className="w-4 h-4" />
          </button>
          <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-50">
            <FaComment className="w-4 h-4" />
          </button>
          <button className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
            <FaVideo className="w-4 h-4" />
          </button>
          <button className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600">
            <FaPhone className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* User Information */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h5 className="font-medium text-gray-900">User Information</h5>
          <button className="p-1 hover:bg-gray-100 rounded">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01" />
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-sm text-gray-500">Phone</span>
            </div>
            <p className="text-sm text-gray-900 ml-6">{user.phone}</p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm text-gray-500">Email</span>
            </div>
            <p className="text-sm text-gray-900 ml-6">{user.email}</p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-sm text-gray-500">Address</span>
            </div>
            <p className="text-sm text-gray-900 ml-6">{user.address}</p>
          </div>
        </div>
      </div>

      {/* Files Shared Section */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h5 className="font-medium text-gray-900">Files Shared</h5>
          <button className="p-1 hover:bg-gray-100 rounded">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01" />
            </svg>
          </button>
        </div>

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

 
    </div>
  );
}