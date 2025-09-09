"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSelector } from "react-redux";
import { FaCirclePlus } from "react-icons/fa6";
import { lazy, Suspense } from "react";
import SelfProfileSkelatal from "@/component/skelatal/SelfProfileCard";
import ListTileSkelatal from "@/component/skelatal/ListTileSkelatal";

import Feed from "../../assets/Sidebar-Home.png"
import Connection from "../../assets/Sidebar-Connection.png"
import Blog from "../../assets/Sidebar-Blog.png"
import TalentVerse from "../../assets/Sidebar-TalentVerse.png"
import Saved from "../../assets/Sidebar-Saved.png"
import WatchHistory from "../../assets/Sidebar-Watch-History.png"
import Communities from "../../assets/Sidebar-Communities.png"
import Birthday from "../../assets/Sidebar-Birthday.png"
import Message from "../../assets/Sidebar-Message.png"
import Memories from "../../assets/Sidebar-Memories.png"
import Events from "../../assets/Sidebar-Event.png"
import Jobs from "../../assets/Sidebar-Jobs.png"
import Image from "next/image";

const Sidebar = () => {
  const currentPath = usePathname();
  const appState = useSelector((state: any) => state.auth);
  const sideOptions = [
    { name: "Feed", icon: Feed, link: "/env-pages/feed" },
    { name: "Connections", icon: Connection, link: "/connection" },
    { name: "Blog", icon: Blog, link: "/env-pages/blog" },
    { name: "TalentVerse", icon: TalentVerse, link: "/reels" },
    { name: "Saved", icon: Saved, link: "/env-pages/saved" },
    { name: "Watch History", icon: WatchHistory, link: "/env-pages/watch-history" },
    { name: "Communities", icon: Communities, link: "/communities" },
    { name: "Birthday", icon: Birthday, link: "/birthdays" },
    { name: "Messages", icon: Message, link: "/messaging/view" },
    { name: "Memories", icon: Memories, link: "/memories" },
    { name: "Events", icon: Events, link: "/events" },
    { name: "Jobs", icon: Jobs, link: "/job" },
  ];

  const isActive = (path: string) => {
    if (path === "/feed") {
      return currentPath === path || currentPath.startsWith("/feed/");
    }
    return currentPath.startsWith(path);
  };

  return (
    <aside id="default-sidebar-1" className="h-full relative " aria-label="Sidebar">
      <div className="h-full  overflow-y-auto dark:bg-gray-800 no-scrollbar">
        <ul className="space-y-2 pr-6 w-full font-medium">
          <li key={321} className="">
            <Suspense fallback={<SelfProfileSkelatal />}>

            </Suspense>
          </li>
          {appState.user != null && (
            <li key={211231}>
              <Link
                href="/create"
                className="bg-indigo-500 flex items-center gap-2 rounded-[5px] shadow-sm p-2 w-full text-white"
              >
                <FaCirclePlus style={{ color: "white" }} /> Create Institutional Page
              </Link>
            </li>
          )}

          <li key={289890}>
            {appState.user != null ? (
              <ul className="space-y-2 font-medium">
                {sideOptions.map((side, index) => (
                  <li key={index} className="font-a">
                    <Link
                      href={side.link}
                      className={`${
                        isActive(side.link)
                          ? "bg-blue-100 text-blue-600 font-semibold"
                          : "text-gray-700 hover:bg-gray-100"
                      } flex items-center px-3 py-2 rounded-[5px] group transition-colors duration-200`}
                    >
                      <Image
                        src={side.icon} 
                        alt={side.name} 
                        className="w-6 h-6 object-contain" 
                      />
                      <span className="flex-1 font-[20px] family-roboto ml-3 whitespace-nowrap">
                        {side.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="space-y-2 font-medium">
                {sideOptions.map((_, index) => (
                  <ListTileSkelatal key={index} />
                ))}
              </ul>
            )}
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;