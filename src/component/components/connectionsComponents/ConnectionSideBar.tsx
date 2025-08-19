"use client";

import Link from "next/link";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FaLayerGroup} from "react-icons/fa6";
import { GrLink } from "react-icons/gr";
import { HiUserGroup } from "react-icons/hi";
import { IoClose} from "react-icons/io5";
import { RiUserFollowFill } from "react-icons/ri";
import { SiWikibooks } from "react-icons/si";
import { useSelector } from "react-redux";


export default function FilterForm() {



  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [activeTab, setActiveTab] = useState<string>("connections");

  useEffect(() => {
    // Set active tab based on URL params when component mounts
    const tabFromUrl = searchParams.get("tab") || "connections";
    setActiveTab(tabFromUrl);
  }, [searchParams]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", tab);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };




  const menuItems = [
    
    {
      id: "connections",
      label: "Connections",
      icon: <GrLink />,
    },
    {
      id: "following",
      label: "Following",
      icon: <RiUserFollowFill />,
    },
    {
      id: "followers",
      label: "Followers",
      icon: <HiUserGroup />,
    },

    {
      id: "request",
      label: "Follow Request",
      icon: <SiWikibooks />,
    },
  ];

  return (
    <div className="w-[300px] h-full">
      <div className="fixed bg-white left-0 w-[300px] flex flex-col h-screen overflow-y-auto">


        <div className="flex items-center py-4 px-6 border-b border-gray-200 sticky top-0 bg-white z-10">
          <Link
            href="/home"
            className="p-2 rounded-full hover:bg-gray-100 bg-gray-200 transition-colors duration-200 mr-2"
          >
            <IoClose size={24} className="text-gray-600" />
          </Link>
          {/* <h2 className="text-xl font-semibold text-gray-800">Feed</h2> */}
        </div>



        <div className="space-y-2 w-[300px] p-[1rem]">
          {menuItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleTabChange(item.id)}
              className={`flex items-center  p-3 rounded-lg cursor-pointer transition-colors duration-200 ${
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
                <div
                  className={`text-[18px] ${
                    activeTab === item.id ? "text-white" : "text-black"
                  }`}
                >
                  {item.icon}
                </div>
              </div>
              <span
                className={`font-medium text-[18px] ${
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
