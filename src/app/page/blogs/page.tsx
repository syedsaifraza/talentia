"use client";
import Blog from "@/app/home/components/Blogs";
import { useState } from "react";

export default function JobsPage() {
  return (
    <div className="flex gap-4">
      <div className="w-3/4">
        <h1 className="text-[20px] text-indigo-800 font-bold mb-4">Blogs</h1>
        <div className="flex flex-col gap-4">
        {/* Main Content */}
      
      <Blog/>
      <Blog/>
      <Blog/>
      <Blog/>
      <Blog/>
      <Blog/>
        </div>
      </div>

      {/* Right Sidebar with Filters */}
      <div className="w-1/4 bg-white p-4 border-l">
        <div className="fixed w-48">
          <h2 className="text-lg font-bold mb-3">Filters</h2>

          <button className="block w-full text-left p-2 rounded">
            Saved Videos
          </button>
        </div>
      </div>
    </div>
  );
}
