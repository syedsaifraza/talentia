"use client";

import Link from "next/link";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { BiImages, BiSolidVideos } from "react-icons/bi";
import { FaLayerGroup } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { RiFilmAiFill} from "react-icons/ri";

const menuItems = [
  {
    id: "all",
    label: "All Posts",
    icon: <FaLayerGroup />
  },
  {
    id: "videos",
    label: "Videos",
    icon: <BiSolidVideos />
  },
  {
    id: "images",
    label: "Images",
    icon: <BiImages />
  },
  {
    id: "reels",
    label: "Reels",
    icon: <RiFilmAiFill />
  },
];

export default function SavedFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activeTab = searchParams.get("tab") || "all";

  const handleTabChange = (tab: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", tab);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="w-[300px] h-full">
      <div className="fixed bg-white right-0 w-[300px] flex flex-col h-screen overflow-y-auto">
        <div className="flex items-center p-4 border-b border-gray-200 sticky top-0 bg-white z-10">
          <Link
            href="/home"
            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 mr-2"
          >
            <IoClose size={24} className="text-gray-600" />
          </Link>
          <h2 className="text-xl font-semibold text-gray-800">Saved</h2>
        </div>

        <div className="space-y-2 w-[300px] p-[1rem]">
          {menuItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleTabChange(item.id)}
              className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors duration-200 ${
                activeTab === item.id
                  ? "bg-blue-50 border border-blue-100"
                  : "hover:bg-gray-50"
              }`}
            >
              <div
                className={`p-2 rounded-full mr-3 ${
                  activeTab === item.id ? "bg-blue-500" : "bg-gray-200"
                }`}
              >
                <div className={activeTab === item.id ? "text-white" : "text-black"}>
                  {item.icon}
                </div>
              </div>
              <span
                className={`font-medium ${
                  activeTab === item.id ? "text-blue-600" : "text-gray-700"
                }`}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}