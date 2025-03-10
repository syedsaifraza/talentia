"use client";
import ReelsScroller from "@/app/home/components/ReelsScroller";

export default function ReelsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white p-6 rounded shadow-lg">
        <h1 className="text-[20px] text-indigo-800 font-sm font-bold mb-4">
          Reels & Talents
        </h1>

        <ReelsScroller  limit={5} />
      </div>
      <div className="bg-white p-6 rounded shadow-lg">
        <h1 className="text-[20px]  text-indigo-800 font-sm font-bold mb-4">
          Reels & Talents
        </h1>

        <ReelsScroller  limit={5} />
      </div>


    </div>
  );
}
