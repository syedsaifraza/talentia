"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
 
import { IoMdSettings } from "react-icons/io";

import { MdOutlineVideoLibrary } from "react-icons/md";
import { MdLeaderboard } from "react-icons/md";
import { PiBagSimpleFill } from "react-icons/pi"; 

import { usePathname } from "next/navigation";
import { BiSolidBell } from "react-icons/bi";

import DefaultAvatar from "./defaultAvatar";
import { BiSolidMessageAlt } from "react-icons/bi"; 

export default function Navbar() {
  const pathname = usePathname(); 
  const [showNotifications, setShowNotifications] = useState(false);

  const isActive = (route: string) =>
    pathname === route ? "border-b-4 border-[#3113d6]" : "";
  const activeColor = (route: string) =>
    pathname === route ? "#3113d6" : "gray";
  // const chats = [
  //   {
  //     id: 1,
  //     name: "Suresh Yadav",
  //     message: "Hey, how are you?",
  //     time: "2h ago",
  //   },
  //   {
  //     id: 2,
  //     name: "Bacchan Pandey",
  //     message: "Let's catch up later!",
  //     time: "4h ago",
  //   },
  //   {
  //     id: 3,
  //     name: "Dr. Pankaj Kumar",
  //     message: "Did you check the report?",
  //     time: "6h ago",
  //   },
  //   {
  //     id: 4,
  //     name: "Munna Tripathi",
  //     message: "Meeting at 5 PM?",
  //     time: "8h ago",
  //   },
  //   {
  //     id: 5,
  //     name: "Guddu Pandit",
  //     message: "Meeting at 5 PM?",
  //     time: "8h ago",
  //   },
  // ];

  // className="bg-white shadow-md  px-10 w-full sticky top-0 z-50 bg-gradient-to-r from-[#36809A] via-[#D7EBF6] to-[#4389A2]"

  return (
    <nav className="bg-white shadow-md  px-4 w-full sticky top-0 z-50 ">
      <div className="mx-auto w-full sm:px-0 lg:px-0">
        <div className="relative flex items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:justify-between">
            <div className="flex shrink-0 items-start lg:w-1/4">
              <Image
                width={200}
                height={80}
                alt="Logo"
                className="px-2"
                src="https://talentia.co.in/logo.png"
              />
            </div>
            <div className="hidden sm:block lg:w-full">
              <div className="flex justify-between w-full px-20">
                <div
                  className={`py-[1rem] w-[100px] hover:bg-gray-100 cursor-pointer flex justify-center items-center ${isActive(
                    "/home/feed"
                  )}`}
                >
                  <Link href="/home/feed">
                    <AiOutlineHome
                      color={activeColor("/home/feed")}
                      size={28}
                    />
                  </Link>
                </div>
                <div
                  className={`py-[1rem] w-[100px] hover:bg-gray-100 cursor-pointer flex justify-center items-center ${isActive(
                    "/home/watch"
                  )}`}
                >
                  <Link href="/home/watch">
                    <MdOutlineVideoLibrary
                      color={activeColor("/home/watch")}
                      size={28}
                    />
                  </Link>
                </div>
                <div
                  className={`py-[1rem] w-[100px] hover:bg-gray-100 cursor-pointer flex justify-center items-center ${isActive(
                    "/home/job"
                  )}`}
                >
                  <Link href="/home/job">
                    <PiBagSimpleFill
                      color={activeColor("/home/job")}
                      size={28}
                    />
                  </Link>
                </div>
                <div
                  className={`py-[1rem] w-[100px] hover:bg-gray-100 cursor-pointer flex justify-center items-center  ${isActive(
                    "/home/achievements"
                  )}`}
                >
                  <Link href="/home/achievements">
                    <MdLeaderboard
                      color={activeColor("/home/achievements")}
                      size={28}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-5 items-center w-full lg:w-1/2">
              <div className="p- rounded-full">
                <a href="/Settings/view">
                  <IoMdSettings className="text-black text-bold" size={25} />
                </a>
              </div>
              <div className="p-1  rounded-full relative">
                <BiSolidBell
                  size={25}
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="cursor-pointer text-black text-bold"
                />
                {showNotifications && (
                  <div className="absolute right-0 mt-3 w-64 bg-white shadow-lg rounded-lg p-4 overshadow2 ">
                    <Image
                      className="text-center"
                      height={200}
                      width={200}
                      alt="not-found"
                      src={"https://talentia.co.in/aligator.png"}
                    />
                    <p className="text-center">No new notifications</p>
                  </div>
                )}
              </div>
              <div className="p-1 rounded-full">
                <a href="/messaging/view">
                  <BiSolidMessageAlt
                    size={25}
                    // onClick={() => setShowChat(!showChat)}
                    className="cursor-pointer text-black text-bold"
                  />
                  {/* {showChat && (
                  <div className="absolute right-0 mt-4 w-80 h-80 bg-white shadow-lg rounded-lg p-4 overflow-y-auto overshadow2">
                    <p>Chat window</p>
                    {chats.map((chat) => (
                      <div
                        key={chat.id}
                        className="flex items-center gap-3 p-2 border-b hover:bg-gray-100 rounded-md cursor-pointer"
                      >
                        <DefaultAvatar
                          imageUrl={`https://randomuser.me/api/portraits/men/${
                            61 + chat.id
                          }.jpg`}
                          size={30}
                        />

                        <div className="flex-1">
                          <h4 className="text-sm font-semibold">{chat.name}</h4>
                          <p className="text-xs text-gray-500 truncate">
                            {chat.message}
                          </p>
                        </div>
                        <span className="text-xs text-gray-400">
                          {chat.time}
                        </span>
                      </div>
                    ))}
                  </div>
                )} */}
                </a>
              </div>
              <div className=" w-11 h-11 flex justify-center items-center  rounded-full  shadow-[0px_0px_2px_0px_rgba(0,0,0,0.75)] ">
                <DefaultAvatar
                  size={35}
                  imageUrl="https://randomuser.me/api/portraits/men/69.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
