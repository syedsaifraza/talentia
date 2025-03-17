"use client";
import ReelsScroller from "@/app/home/components/ReelsScroller";

export default function ReelsPage() {
  return (
    <div className="flex flex-col gap-4 w-[75vw]">
      <div className="bg-white p-6 rounded shadow-lg">
        <h1 className="text-[20px]  text-indigo-800 font-sm font-bold mb-4">
        Talent Verse
        </h1>

        <ReelsScroller limit={10} />
      </div>
    </div>
  );
}
