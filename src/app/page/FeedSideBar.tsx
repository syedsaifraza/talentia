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

import { SelfProfile } from "../home/components/self-profile";
import { FaCirclePlus } from "react-icons/fa6";
import Link from "next/link";
import { link } from "fs";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const currentPath = usePathname();
  const isActive = (path: string) => {
    return currentPath == path;
  };

  //const { user } = useSelector((state: any) => state.auth);

  const sideOptions = [
    { name: "Feed", icon:  <img src="https://cdn3d.iconscout.com/3d/premium/thumb/social-media-feed-3d-icon-download-in-png-blend-fbx-gltf-file-formats--like-logo-pack-user-interface-icons-9091452.png?f=webp" alt="" className="w-[25px]"/>, link: "/page/feed/" },
    {
      name: "Connections",
      icon:<FaBookmark size={25} />,
      link: "/page/connections",
    },
    { name: "Blog", icon: <FaBookmark size={25} />, link: "/page/blogs" },
    {
      name: "TalentVerse",
      icon: <FaWatchmanMonitoring size={25} />,
      link: "/page/reels",
    },
    { name: "Saved", icon: <FaBookmark size={25} />, link: "/page/saved" },
    {
      name: "Watch History",
      icon: <FaHistory size={25} />,
      link: "/page/watches",
    },
    {
      name: "Communities",
      icon: <FaUsers size={25} />,
      link: "/page/communities",
    },
    {
      name: "Birthday",
      icon: <FaBirthdayCake size={25} />,
      link: "/page/birthdays",
    },
    {
      name: "Messages",
      icon: <FaEnvelope size={25} />,
      link: "/messaging/view",
    },
    { name: "Memories", icon: <FaClock size={25} />, link: "/page/memories" },
    { name: "Events", icon: <FaClock size={25} />, link: "/page/events" },
    // { name: "Jobs",
    //   icon: <FaBriefcase size={25} />,
    //   link: "/home/job" },
    { name: "Blogs", icon: <FaNewspaper size={25} />, link: "/page/blogs" },
  ];
  return (
    <aside
      id="default-sidebar"
      className="w-[23vw] h-[90vh] "
      aria-label="Sidebar"
    >
      <div className="h-full pt-4 pl-4 pr-4 pb-2  overflow-y-auto   dark:bg-gray-800 no-scrollbar fixed bg-white   z-40 ">
        <ul className="space-y-2 w-[22vw] font-medium">
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
      </div>
    </aside>
  );
};

export default Sidebar;
