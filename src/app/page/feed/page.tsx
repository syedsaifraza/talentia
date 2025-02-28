'use client'

import Post from "@/app/home/components/post";
import { useState } from "react";
 
 
 
export default function FeedPage() {
  const [filter, setFilter] = useState("all"); // Default filter

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="flex">
      {/* Main Content */}
      <div className="w-3/4">
         
        {/* Render posts conditionally based on filter */}
        {filter === "all" && (
          <>
            <Post />
            <Post />
            <Post />
          </>
        )}
        {filter === "videos" && <ReelsScroller />}
      </div>

      {/* Right Sidebar with Filters */}
      <div className="w-1/4 bg-white p-4 border-l">
        <h2 className="text-lg font-bold mb-3">Filters</h2>
        
        <button
          className={`block w-full text-left p-2 rounded ${filter === "all" ? "bg-indigo-500 text-white" : "hover:bg-gray-100"}`}
          onClick={() => handleFilterChange("all")}
        >
          All Posts
        </button>
        
        <button
          className={`block w-full text-left p-2 rounded ${filter === "videos" ? "bg-indigo-500 text-white" : "hover:bg-gray-100"}`}
          onClick={() => handleFilterChange("videos")}
        >
          Videos
        </button>

        <button
          className={`block w-full text-left p-2 rounded ${filter === "images" ? "bg-indigo-500 text-white" : "hover:bg-gray-100"}`}
          onClick={() => handleFilterChange("images")}
        >
          Images
        </button>
      </div>
    </div>
  );
}
