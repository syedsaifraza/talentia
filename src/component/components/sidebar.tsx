"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSelector } from "react-redux";
import { FaCirclePlus } from "react-icons/fa6";
import { lazy, Suspense } from "react";
import SelfProfile from "./self-profile";
import SelfProfileSkelatal from "@/component/skelatal/SelfProfileCard";
import ListTileSkelatal from "@/component/skelatal/ListTileSkelatal";

const LazySelfProfile = lazy(() => import("./self-profile"));

const Sidebar = () => {
  const currentPath = usePathname();
  const appState = useSelector((state: any) => state.auth);

  const sideOptions = [
    { name: "Feed", icon: "https://content.acetians.in/uploads/home.png", link: "/feed" },
    { name: "Connections", icon: "https://content.acetians.in/uploads/people.png", link: "/connection" },
    { name: "Blog", icon: "https://content.acetians.in/uploads/blog.png", link: "/blogs" },
    { name: "TalentVerse", icon: "https://content.acetians.in/uploads/confidence.png", link: "/page/reels" },
    { name: "Saved", icon: "https://content.acetians.in/uploads/bookmark.png", link: "/page/saved" },
    { name: "Watch History", icon: "https://content.acetians.in/uploads/reload.png", link: "/page/watches" },
    { name: "Communities", icon: "https://content.acetians.in/uploads/group.png", link: "/page/communities" },
    { name: "Birthday", icon: "https://content.acetians.in/uploads/birthday-cake.png", link: "/page/birthdays" },
    { name: "Messages", icon: "https://content.acetians.in/uploads/chatting.png", link: "/messaging/view" },
    { name: "Memories", icon: "https://content.acetians.in/uploads/history.png", link: "/page/memories" },
    { name: "Events", icon: "https://content.acetians.in/uploads/shield.png", link: "/page/events" },
    { name: "Jobs", icon: "https://content.acetians.in/uploads/job-search.png", link: "/job" },
  ];

  // Improved active link detection
  const isActive = (path: string) => {
    if (path === "/feed") {
      return currentPath === path || currentPath.startsWith("/feed/");
    }
    return currentPath.startsWith(path);
  };

  return (
    <aside id="default-sidebar" className="h-full relative" aria-label="Sidebar">
      <div className="h-full pt-2 pb-2 overflow-y-auto dark:bg-gray-800 no-scrollbar">
        <ul className="space-y-4 w-[25vw] font-medium">
          <li key={321} className="">
            <Suspense fallback={<SelfProfileSkelatal />}>
              <SelfProfile />
            </Suspense>
          </li>

          {appState.user != null && (
            <li key={211231}>
              <Link
                href="/page/create"
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
                      <img 
                        src={side.icon} 
                        alt={side.name} 
                        className="w-5 h-5 object-contain" 
                      />
                      <span className="flex-1 ml-3 whitespace-nowrap">
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