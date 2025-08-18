"use client";
import NameAvatar from "@/component/components/nameAvatar";
import NoData from "@/component/components/NoData";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiImages, BiSolidVideos } from "react-icons/bi";
import { FaLayerGroup } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { RiFilmAiFill } from "react-icons/ri";
import { useSelector } from "react-redux";

function Page() {
  const [mounted, setMounted] = useState(false);
  const followings = useSelector((state: any) => state.auth.followings || []);
  const followers = useSelector((state: any) => state.auth.followers || []);
  const followersIds: string[] = followers.map((follower: any) => follower.uid);
  const connections = followings.filter((following: any) =>
    followersIds.includes(following.uid)
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

    const menuItems = [
      {
        id: "all",
        label: "Connections",
        icon:<FaLayerGroup />
      },
      {
        id: "videos",
        label: "Followers",
        icon:<BiSolidVideos />
      },
      {
        id: "images",
        label: "Following",
        icon:<BiImages />
      },
      {
        id: "reels",
        label: "Follow Request",
        icon:<RiFilmAiFill />
      },
    ];

  return (
    <div className="flex flex-row">
       <div className="w-[300px] h-full">
        <div className="fixed bg-white left-0 w-[300px] flex flex-col h-screen overflow-y-auto">
          <div className="flex items-center p-4 border-b border-gray-200 justify-between sticky top-0 bg-white z-10">
            <h2 className="text-xl font-semibold text-gray-800">Connections</h2>
            <Link
              href="/home"
              className="p-2 bg-gray-200 rounded-full hover:bg-gray-100 transition-colors duration-200 mr-2"
            >
              <IoClose size={24} className="text-gray-600" />
            </Link>
          </div>

          <aside className="space-y-2 w-[300px] p-[1rem]">
            {menuItems.map((filter) => (
                          <Link
                            key={filter.id}
                            
                            className={`flex items-center text-black p-3 text-[19px] rounded-lg cursor-pointer transition-colors duration-200 `}
                            href={`?filter=${filter.id}`}
                          >
                            <div className={`p-2 rounded-full mr-3 `}>
            
                          <div className={``} >
                            {filter.icon}
                          </div>
                          </div>
            
                           <span className={`font-medium `}>
                          {filter.label}
                        </span>
                            
                          </Link>
                        ))}
          </aside>
        </div>
      </div>

      <div className="p-4 flex  flex-1">
        
        {connections.length < 1 && <NoData />}
        <div className="flex flex-wrap gap-4">
          {connections.map((user: any, index: number) => (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden w-44">
              {/* Profile Image Section */}
              <div className="relative">
                <img
                  src={
                    user.avatar ||
                    "https://content.acetians.in/uploads/d%20u%20m%20m%20y%20-%20u%20s%20er%20-%20male.jpg"
                  }
                  alt={user.avatar}
                  className="w-full h-40 object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-3">
                {/* Name */}
                <h3 className="font-semibold text-base text-gray-900 mb-1 leading-tight">
                  {" "}
                  {user.name}
                </h3>

                {/* Followers */}
                <p className="text-sm text-gray-600 mb-3"> {user.bio}</p>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors duration-200 text-sm">
                    Message
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
   
    </div>
  );
}

export default Page;
