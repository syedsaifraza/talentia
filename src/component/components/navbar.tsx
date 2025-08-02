"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineVideoLibrary, MdLeaderboard } from "react-icons/md";
import { PiBagSimpleFill } from "react-icons/pi";
import { usePathname } from "next/navigation";
import { BiSolidBell, BiSolidMessageAlt } from "react-icons/bi";

import DefaultAvatar from "./defaultAvatar";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
// import { logout, setLoggedInUser } from "@/store/slices/authSlices";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/slices/authSlices";
import HomeIcon from "../Icons/HomeIcon";
import TvIcon from "../Icons/TvIcon";
import WorkIcon from "../Icons/WorkIcon";
import BadgeIcon from "../Icons/BadgeIcon";
import WatchIcon from "../Icons/WatchIcon";
import LeaderBoard from "../Icons/LeaderBoard";
import MessageIcon from "../Icons/MessageIcon";
import BellIcon from "../Icons/BellIcon";
import SettingsIcon from "../Icons/SettingsIcon";
import LogoFile from "./LogoFile";
import LogoFileAlt from "./LogoFileAlt";
import "../../app/globals.css";
import { CircleChevronDown } from "lucide-react";
import ProfileDropdown from "./ProfileDropdown";

export default function Navbar() {
  const notifications = [
    {
      id: 1,
      title: "New message received",
      message: "You have a new message from John",
      time: "2 min ago",
      unread: true,
    },
    {
      id: 2,
      title: "Task completed",
      message: "Your report has been processed",
      time: "5 min ago",
      unread: true,
    },
    {
      id: 3,
      title: "Meeting reminder",
      message: "Team meeting starts in 30 minutes",
      time: "25 min ago",
      unread: false,
    },
    {
      id: 4,
      title: "System update",
      message: "System maintenance completed",
      time: "1 hour ago",
      unread: false,
    },
    {
      id: 5,
      title: "New comment",
      message: "Sarah commented on your post",
      time: "2 hours ago",
      unread: true,
    },
  ];

  const unreadCount = notifications.filter((n) => n.unread).length;

  const pathname = usePathname();
  const router = useRouter();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Clear session (e.g., remove token from localStorage)
    localStorage.removeItem("token");
    Cookies.remove("token");
    dispatch(logout());
    router.push("/signin");
  };

  const isActive = (route: string) =>
    pathname === route ? "border-b-4 border-[#3113d6]" : "";
  const activeColor = (route: string) =>
    pathname === route ? "#3113d6" : "gray";

  const appState = useSelector((state: any) => state.auth.user);
  const instituteState = useSelector((state: any) => state.institute);

  return (
    <nav className="bg-white shadow-sm w-full sticky top-0 z-50">
      <div className="grid grid-cols-3 justify-center items-center px-5 ">
        <div className="flex justify-start ">
          <LogoFile />
          {/* <p className="bg-orange-400 font-bold">BETA</p> */}
        </div>

        <div>
          {appState != null && (
            <div className="flex flex-row justify-evenly items-center">
              <div
                className={`hover:bg-gray-100 border-red-600 border-b-4 cursor-pointer py-5 px-10 flex justify-center items-center ${isActive(
                  "/home"
                )}`}
              >
                <Link href="/home" prefetch={true}>
                  <HomeIcon />
                  {/* <AiOutlineHome color={activeColor("/home")} size={28} /> */}
                </Link>
              </div>
              <div
                className={`hover:bg-gray-100  border-red-900 cursor-pointer py-5 px-10 flex justify-center items-center ${isActive(
                  "/watch"
                )}`}
              >
                <Link href="/watch" prefetch={true}>
                  <WatchIcon />
                  {/* <MdOutlineVideoLibrary color={activeColor("/watch")} size={28} /> */}
                </Link>
              </div>
              <div
                className={`hover:bg-gray-100 cursor-pointer  py-5 px-10 flex justify-center items-center ${isActive(
                  "/job"
                )}`}
              >
                <Link href="/job" prefetch={true}>
                  <WorkIcon />
                  {/* <PiBagSimpleFill color={activeColor("/job")} size={28} /> */}
                </Link>
              </div>
              <div
                className={`hover:bg-gray-100 cursor-pointer  py-5 px-10 flex justify-center items-center ${isActive(
                  "/achievements"
                )}`}
              >
                <Link href="/achievements" prefetch={true}>
                  <LeaderBoard />
                  {/* <MdLeaderboard color={activeColor("/Deachievements")} size={28} /> */}
                </Link>
              </div>
            </div>
          )}
        </div>

        <div>
          {appState == null && (
            <div className="flex justify-end items-center  ">
              <Link
                href="/login"
                type="button"
                className="mx-2 py-2.5 px-5 me-2  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Signin
              </Link>
              <Link
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                href="/signup"
              >
                Signup
              </Link>
            </div>
          )}

          {appState != null && (
            <div className="flex justify-end items-center  ">
              <div className="p-2 rounded-full">
                <Link href="/Settings/view">
                  <SettingsIcon />
                  {/* <IoMdSettings className="text-black text-bold" size={25} /> */}
                </Link>
              </div>
              <div className="p-1 rounded-full relative">
                

                <BiSolidBell
                  size={25}
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="cursor-pointer text-black text-bold"
                />
                {showNotifications && (
                  <>
                   
                    {/* Modal Content */}
                    <div className="absolute right-0 top-12 w-80 z-50 bg-white border border-gray-200 rounded-lg shadow-lg">
                      {/* Header */}
                      <div className="px-4 py-3 border-b border-gray-100">
                        <h3 className="text-sm font-medium text-gray-900">
                          Notifications
                        </h3>
                      </div>

                      {/* Notifications List */}
                      <div className="h-[30vh] w-[40vw]  overflow-y-auto" >
                        {notifications.map((notification) => (
                          <div
                          // href="/Notification/view"
                            key={notification.id}
                            className={`px-4 py-3 border-b w-[40vw] border-gray-50 hover:bg-gray-50 cursor-pointer ${
                              notification.unread ? "bg-blue-50" : ""
                            }`}
                          >
                            <div className="flex items-start space-x-3">
                              {/* Unread indicator */}
                              <div className="flex-shrink-0 mt-1">
                                {notification.unread && (
                                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                )}
                              </div>

                              {/* Content */}
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                  {notification.title}
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                  {notification.message}
                                </p>
                                <p className="text-xs text-gray-400 mt-1">
                                  {notification.time}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="px-4 py-3 border-t border-gray-100">
                        <Link
                        href="/Notification/view"
                          onClick={() => {
                            console.log("View all notifications");
                          }}
                          className="w-full text-sm text-blue-600 hover:text-blue-800 font-medium py-1"
                        >
                          View All Notifications
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="px-3 rounded-full">
                <Link href="/messaging/view">
                  <MessageIcon />
                  {/* <BiSolidMessageAlt size={25} className="cursor-pointer text-black text-bold" /> */}
                </Link>
              </div>

              {/* Avatar with Dropdown Menu */}
              <div className="relative">
                <div
                  className=" flex justify-center items-center rounded-full shadow-md cursor-pointer"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <DefaultAvatar size={30} />
                </div>

                {showMenu && (
                  <div
                    className="absolute right-0 mt-3 w-[400px] bg-white shadow-md rounded-md py-2"
                    style={{ zIndex: 1000 }}
                  >
                    <ProfileDropdown />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
