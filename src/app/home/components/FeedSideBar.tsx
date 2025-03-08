'use client'

import { FaBuilding, FaUserFriends, FaWatchmanMonitoring } from "react-icons/fa";
import { FaBookmark, FaHistory, FaUsers, FaVideo, FaHome, FaBirthdayCake, FaEnvelope, FaClock, FaBriefcase, FaNewspaper } from "react-icons/fa";

import { SelfProfile } from "./self-profile";
import { FaCirclePlus } from "react-icons/fa6";
import Link from "next/link";
import { link } from "fs";
import { usePathname } from "next/navigation";



const Sidebar = () => {
  const currentPath = usePathname()
  const isActive = (path: string) => {
    return currentPath == path;
  }
  //const { user } = useSelector((state: any) => state.auth);
  const sideOptions = [

    { name: "Feed", icon: <FaHome size={25} />, link: "/feed/view" },
    { name: "Connections", icon: <FaUserFriends size={25} />, link: "/page/connections" },
    { name: "Blog", icon: <FaBookmark size={25} />, link: "/page/blogs" },
    { name: "TalentVerse", icon: <FaWatchmanMonitoring size={25} />, link: "/page/reels" },
    { name: "Saved", icon: <FaBookmark size={25} />, link: "/page/saved" },
    { name: "Watch History", icon: <FaHistory size={25} />, link: "/page/watches" },
    { name: "Communities", icon: <FaUsers size={25} />, link: "/page/communities" },
   
  ];
  return (
    <aside id="default-sidebar" className="w-1/5 h-[100vh] " aria-label="Sidebar">
      <div className="h-full pt-4 pr-6 pb-2  overflow-y-auto   dark:bg-gray-800 no-scrollbar fixed   z-40  ">
        <ul className="space-y-2 w-72 font-medium">
    
          {sideOptions && sideOptions.map((side, index) => (
            <li key={index} className="px-2 font-a">
              <a
                href={side.link}
                className={`${isActive && isActive(side.link)
                  ? 'bg-indigo-500 text-white'
                  : 'text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700'
                  } flex items-center p-2 py-2 rounded-lg group`}
              >
                {side.icon}
                <span className="flex-1 ml-3 whitespace-nowrap" style={{ fontSize: '16px' }}>
                  {side.name}
                </span>
              </a>
            </li>
          ))}



        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
