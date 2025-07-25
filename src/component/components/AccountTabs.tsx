'use client'
import React, { useState } from 'react'
import UserPosts from './UserPosts';

type AccountPageProps={
  userPosts:React.ReactNode,
  userGallery:React.ReactNode,
  userVideos:React.ReactNode
}

function AccountTabs({userPosts,userGallery,userVideos}:AccountPageProps) {
    
  const [activeTab, setActiveTab] = useState("Posts");

  const tabs = ["Posts", "About", "Photos", "Videos", "More"];

  const PostCard = ({ title, description, image }: { title: string; description: string; image: string }) => (
    <div className="bg-white shadow rounded-lg p-4 mb-4">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      {image && <img src={image} alt="Post" className="rounded-md w-full object-cover h-60 mb-2" />}
      <div className="flex text-sm text-gray-500 justify-between">
        <button className="hover:text-blue-600">Like</button>
        <button className="hover:text-blue-600">Comment</button>
        <button className="hover:text-blue-600">Share</button>
      </div>
    </div>
  );

  const Gallery = ({ images }: { images: string[] }) => (
    <div className="grid grid-cols-3 gap-2">
      {images.map((src, idx) => (
        <img key={idx} src={src} alt={`Gallery ${idx}`} className="rounded-md object-cover w-full h-40" />
      ))}
    </div>
  );

  const Videos = ({ videos }: { videos: string[] }) => (
    <div className="">
      {userVideos}
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "Posts":
        return (
          <div className="space-y-0">
            {userPosts}
          </div>
             
        );
      case "About":
        return (
          <div className="p-4 space-y-2 text-gray-700">
            <p><strong>Bio:</strong> Passionate Web & App Developer</p>
            <p><strong>Location:</strong> Mumbai, India</p>
            <p><strong>Joined:</strong> January 2023</p>
          </div>
        );
      case "Photos":
        return (
          <div className="space-y-0">
             {userGallery}
          </div>
        );
      case "Videos":
        return (
          <div className="p-4">
            <Videos videos={[
              '/sample-video1.mp4',
              '/sample-video2.mp4',
            ]} />
          </div>
        );
      case "More":
        return (
          <div className="p-4 space-y-2 text-gray-700">
            <p><strong>Website:</strong> <a href="https://yourportfolio.com" className="text-blue-600 hover:underline">yourportfolio.com</a></p>
            <p><strong>GitHub:</strong> <a href="https://github.com/yourusername" className="text-blue-600 hover:underline">github.com/yourusername</a></p>
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <div className="max-w-3xl mx-auto mt-6">
      {/* Tabs */}
      <div className="flex" >
        <div className="w-1/4">
            <div className="flex flex-col  border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 font-medium transition-all duration-200 border-b-2 ${
              activeTab === tab
                ? "text-blue-600 border-blue-600 text-left "
                : "text-gray-600 border-transparent hover:text-blue-500 text-left hover:border-blue-400"
            }`}
          >
            {tab}
          </button>
        ))}
         </div>
        </div>
            <div className="w-3/4 bg-gray-100 px-2" style={{maxHeight:'96vh',overflowY:'scroll'}}>
                {renderContent()}
            </div>
        </div>

      

      

 
      
    </div>
  )
}

export default AccountTabs;
