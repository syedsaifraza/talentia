"use client"
import Post from "@/app/home/components/post"; 
import { useState } from "react";
import { AccountPhotos } from "../components/photos-account";
 
import { FriendsGrid } from "../components/friends-grid";
import Image from "next/image";
 

export default function Profile() {
    const accountSubOptions =["Posts","About","Friends","Photos","More"];
    const [currentPage,setCurrentPage]=useState<string>(accountSubOptions[0]);
    return (
      <div className="bg-gray-100 min-h-[90vh] align-center">
        {/* Cover Photo */}
        <div className="relative">
          <Image
           fill
            src="https://randomuser.me/api/portraits/men/69.jpg"
            className="w-full h-60 object-cover"
            alt="Cover"
          />
          <div className="absolute bottom-4 left-6 flex items-center space-x-4">
            {/* Profile Picture */}
            <Image
             fill
              src="https://picsum.photos/100/100"
              className="w-28 h-28 rounded-full border-4 border-white"
              alt="Profile"
            />
            <div>
              <h1 className="text-2xl font-bold text-white">Rohit Saxena</h1>
              <p className="text-gray-200">Rohit Saxena  | Marketing Executive</p>
            </div>
          </div>
        </div>
  
        {/* Profile Actions */}
        <div className="flex justify-between p-4 bg-white shadow">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Add to Story</button>
          <button className="px-4 py-2 border rounded">Edit Profile</button>
        </div>
  
        {/* Tabs */}
        <div className="border-b bg-white shadow-md">
          <nav className="flex space-x-6 p-4">
            {accountSubOptions.map((ac,index)=>{
                return <a key={index} href="#" onClick={()=>setCurrentPage(ac)} className={currentPage==ac?`text-blue-500 font-semibold`:`text-gray-600`}>{ac}</a> 
            })}
           
             
          </nav>
        </div>
  
        {/* Content Section */}
        <div className="flex">
        <div className="w-full md:w-1/3 mx-auto p-6 bg-white mt-6 shadow rounded">
          <h2 className="text-xl font-semibold">Intro</h2>
          <p className="text-gray-700">Love to work in marketing.</p>
          <p className="text-gray-700">Leading marketing Executive.</p>
        </div>
        <div className="w-full md:w-2/3 mx-auto p-6 bg-white mt-6 shadow rounded">
        {currentPage==accountSubOptions[0] &&   <Post/> }
        {currentPage == accountSubOptions[3] && <AccountPhotos/> }
        {currentPage == accountSubOptions[2] && <FriendsGrid /> }
        </div>
        </div>
        
      </div>
    );
  }
  