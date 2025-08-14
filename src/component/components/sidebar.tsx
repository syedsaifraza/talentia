"use client";
 
import Link from "next/link";
import { useSelector } from "react-redux";
import { FaCirclePlus } from "react-icons/fa6";
import { lazy, Suspense } from "react";
import SelfProfileSkelatal from "@/component/skelatal/SelfProfileCard";
import ListTileSkelatal from "@/component/skelatal/ListTileSkelatal";
import SelfProfile from "./self-profile";
import React from "react";

const Sidebar = ({currentPath,appState}:{currentPath:any,appState:any}) => {
  alert("Side bar rendered"); 


  const sideOptions = [
    { name: "Feed", icon: "https://content.acetians.in/uploads/home.png", link: "/env-pages/feed" },
    { name: "Connections", icon: "https://content.acetians.in/uploads/Connection%20People%20Sidbar.png", link: "/connection" },
    { name: "Blog", icon: "https://content.acetians.in/uploads/blog%20side%20bar.png", link: "/env-pages/blog" },
    { name: "TalentVerse", icon: "https://content.acetians.in/uploads/l%20e%20a%20d%20e%20r%20s%20h%20i%20p.png", link: "/reels" },
    { name: "Saved", icon: "https://content.acetians.in/uploads/b%20o%20o%20k%20m%20a%20r%20k.png", link: "/env-pages/saved" },
    { name: "Watch History", icon: "https://content.acetians.in/uploads/h%20i%20s%20t%20o%20r%20y.png", link: "/env-pages/watch-history" },
    { name: "Communities", icon: "https://content.acetians.in/uploads/g%20r%20o%20u%20p%20.png", link: "/communities" },
    { name: "Birthday", icon: "https://content.acetians.in/uploads/b%20i%20r%20t%20h%20d%20a%20y%20-%20c%20a%20k%20e.png", link: "/birthdays" },
    { name: "Messages", icon: "https://content.acetians.in/uploads/c%20h%20a%20t%20t%20i%20n%20g.png", link: "/messaging/view" },
    { name: "Memories", icon: "https://content.acetians.in/uploads/m%20e%20m%20o%20r%20%20i%20e%20s.png", link: "/memories" },
    { name: "Events", icon: "https://content.acetians.in/uploads/i%20m%20p%20o%20r%20%20t%20a%20n%20t%20-d%20a%20t%20e%20.png", link: "/events" },
    { name: "Jobs", icon: "https://content.acetians.in/uploads/b%20r%20i%20e%20f%20c%20a%20s%20e.png", link: "/job" },
  ];

  // Improved active link detection
  const isActive = (path: string) => {
    if (path === "/feed") {
      return currentPath === path || currentPath.startsWith("/feed/");
    }
    return currentPath.startsWith(path);
  };

  return (
    <aside id="default-sidebar-1" className="h-full relative  " aria-label="Sidebar">
      <div className="h-full  w-full overflow-y-auto p-2 dark:bg-gray-800 " >
        <ul className="space-y-2  font-medium" style={{width:"300px"}}>
          <li key={321} className="">
            <Suspense fallback={<SelfProfileSkelatal />}>
 <SelfProfile />
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
                  <li key={index} className="">
                    <Link
                      href={side.link}
                      className={`${
                        isActive(side.link)
                          ? "bg-blue-100 text-blue-600 font-semibold"
                          : "text-gray-700 hover:bg-gray-100"
                      } flex hover:bg-gray-100 items-center px-3 py-2 rounded-[5px] group transition-colors duration-200`}
                    >
                      <img 
                        src={side.icon} 
                        alt={side.name} 
                        className="w-6 h-6 drop-shadow-xl" 
                      />
                      <span className="font-inter flex-1 ml-3 text-[10px]whitespace-nowrap">
                        {side.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="space-y-2 font-[15px]" >
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

export default React.memo(Sidebar);