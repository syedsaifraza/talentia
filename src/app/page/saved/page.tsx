'use client'

import ReelsScroller from "@/app/home/components/ReelsScroller";

 
 

export default function SavedPage() {
     
    return (
        <div className="bg-white p-6 mt-4 mx-auto rounded shadow-lg">
            <h1 className="text-[20px] text-indigo-800 font-sm font-bold mb-4">Reels & Talents</h1>

            <ReelsScroller  size={"large"} limit={5} />
            
             
        </div>
    );
}

 

 
