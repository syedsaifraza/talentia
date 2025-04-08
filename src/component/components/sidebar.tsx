"use client";

import { 
  FaUserFriends,
  FaWatchmanMonitoring,
} from "react-icons/fa";
import {
  FaBookmark,
  FaHistory,
  FaUsers, 
  FaHome,
  FaBirthdayCake,
  FaEnvelope, 
  FaBriefcase, 
} from "react-icons/fa";
 
import { FaCirclePlus } from "react-icons/fa6";
import { MdAutoAwesomeMotion } from "react-icons/md"; 
import { usePathname } from "next/navigation"; 
import { FaBookBookmark } from "react-icons/fa6";
import { MdEmojiEvents } from "react-icons/md";
import { useSelector } from "react-redux";
import SelfProfileSkelatal from "@/component/skelatal/SelfProfileCard";
import ListTileSkelatal from "@/component/skelatal/ListTileSkelatal";
import React, { lazy, Suspense } from "react";
import SelfProfile from "./self-profile";


const LazySelfProfile = lazy(() => import("./self-profile"));

const Sidebar = () => {
  const currentPath = usePathname();
  const isActive = (path: string) => {
    return currentPath == path;
  };
  //const { user } = useSelector((state: any) => state.auth);
  const sideOptions = [
    { name: "Feed", icon: <FaHome size={20} />, link: "/page/feed/" },
    {
      name: "Connections",
      icon: <FaUserFriends size={20} />,
      link: "/page/connections",
    },
    { name: "Blog", icon: <FaBookBookmark size={20} />, link: "/Blogs/BlogView" },
    {
      name: "TalentVerse",
      icon: <FaWatchmanMonitoring size={20} />,
      link: "/page/reels",
    },
    { name: "Saved", icon: <FaBookmark size={20} />, link: "/page/saved" },
    {
      name: "Watch History",
      icon: <FaHistory size={18} />,
      link: "/page/watches",
    },
    {
      name: "Communities",
      icon: <FaUsers size={20} />,
      link: "/page/communities",
    },
    {
      name: "Birthday",
      icon: <FaBirthdayCake size={20} />,
      link: "/page/birthdays",
    },
    {
      name: "Messages",
      icon: <FaEnvelope size={20} />,
      link: "/messaging/view",
    },
    { name: "Memories", icon: <MdAutoAwesomeMotion size={20} />, link: "/page/memories" },
    { name: "Events", icon: <MdEmojiEvents size={22} />, link: "/page/events" },
    { name: "Jobs", icon: <FaBriefcase size={20} />, link: "//job" },
    { name: "Blogs", icon: <FaBookBookmark size={18} />, link: "/page/blogs" },
  ];
  const appState = useSelector((state:any)=>state.auth)
  return (
    <aside
      id="default-sidebar"
      className="w-[18vw] h-[90vh] "
      aria-label="Sidebar"
    >
      <div className="h-full pt-2 pl-4 pr-6 pb-2  overflow-y-auto   dark:bg-gray-800 no-scrollbar fixed z-40 ">
        <ul className="space-y-2 w-[25vw] font-medium  ">
          <li key={321} className="">
            
          <Suspense fallback={<SelfProfileSkelatal />}>
  <SelfProfile/>
</Suspense>
            
          </li>
          {appState.user!=null ?
          <li key={211231}>
            <a
              href="/page/create"
              className="bg-indigo-500 text-white flex items-center gap-2 rounded-lg shadow-sm p-3 py-3 w-full text-white"
            >
              <FaCirclePlus style={{ color: "white" }} /> Create Institutional
              Page
            </a>
          </li>
          :""}
          <li>
            {appState.user!=null ?
            <ul className="space-y-2 font-medium">
              {sideOptions &&
                sideOptions.map((side, index) => (
                  <li key={index} className="font-a">
                    <a
                      href={side.link}
                      className={`${
                        isActive && isActive(side.link)
                          ? "bg-gray-100 text-black"
                          : "text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700"
                      } flex items-center px-3 py-3  rounded-[5px] group`}
                    >
                      {side.icon}
                      <span
                        className="flex-1 ml-3 whitespace-nowrap font-[600]"
                        style={{ fontSize: "16px" }}
                      >
                        {side.name}
                      </span>
                    </a>
                  </li>
                ))}
            </ul>
            : 
            <ul className="space-y-2 font-medium">
            {sideOptions &&
                sideOptions.map((side, index) => (
               <ListTileSkelatal key={index} />
                ))}
            </ul>}
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
