"use client";

import {
  FaBuilding,
  FaUserFriends,
  FaWatchmanMonitoring,
} from "react-icons/fa";
import {
  FaBookmark,
  FaHistory,
  FaUsers,
  FaVideo,
  FaHome,
  FaBirthdayCake,
  FaEnvelope,
  FaClock,
  FaBriefcase,
  FaNewspaper,
} from "react-icons/fa";

import { SelfProfile } from "./self-profile";
import { FaCirclePlus } from "react-icons/fa6";
import { MdAutoAwesomeMotion } from "react-icons/md";
import Link from "next/link";
import { link } from "fs";
import { usePathname } from "next/navigation";
import svg from "./helloicon.svg";
import { FaBookBookmark } from "react-icons/fa6";
import { MdEmojiEvents } from "react-icons/md";


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
    { name: "Jobs", icon: <FaBriefcase size={20} />, link: "/home/job" },
    { name: "Blogs", icon: <FaBookBookmark size={18} />, link: "/page/blogs" },
  ];
  return (
    <aside
      id="default-sidebar"
      className="w-[23vw] h-[90vh] "
      aria-label="Sidebar"
    >
      <div className="h-full pt-2 pl-4 pr-6 pb-2  overflow-y-auto   dark:bg-gray-800 no-scrollbar fixed bg-white z-40 ">
        <ul className="space-y-2 w-[22vw] font-medium  ">
          <li key={321} className="">
            <SelfProfile />
          </li>
          <li key={211231}>
            <a
              href="/page/create"
              className="bg-indigo-500 text-white flex items-center gap-2 rounded-lg shadow-sm p-3 py-3 w-full text-white"
            >
              <FaCirclePlus style={{ color: "white" }} /> Create Institutional
              Page
            </a>
          </li>
          <li>
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
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
