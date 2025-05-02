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


export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    
    // Clear session (e.g., remove token from localStorage)
    localStorage.removeItem("token");
    Cookies.remove("token")
    dispatch(logout());
    router.push("/login");
    alert("logout success") 
  };
  

  const isActive = (route: string) =>
    pathname === route ? "border-b-4 border-[#3113d6]" : "";
  const activeColor = (route: string) =>
    pathname === route ? "#3113d6" : "gray";

  const appState = useSelector((state:any)=>state.auth.user)

  return (
    <nav className="bg-white shadow-md w-full sticky top-0 z-50">
       
      <div className="flex items-center justify-between">
            <div className="flex w-1/5">
              <LogoFile/>
              <p className="bg-orange-400 font-bold">BETA</p>
             </div>
             {appState!=null &&
            <div className="w-2/5 px-2">
              <div className="flex justify-between">
                <div className={`hover:bg-gray-100 cursor-pointer flex justify-center items-center ${isActive("/feed")}`}>
                  <Link href="/feed" prefetch={true}>
                    <HomeIcon/>
                    {/* <AiOutlineHome color={activeColor("/feed")} size={28} /> */}
                  </Link>
                </div>
                <div className={`hover:bg-gray-100 cursor-pointer flex justify-center items-center ${isActive("/watch")}`}>
                  <Link href="/watch"  prefetch={true}>
                    <WatchIcon/>
                    {/* <MdOutlineVideoLibrary color={activeColor("/watch")} size={28} /> */}
                  </Link>
                </div>
                <div className={`hover:bg-gray-100 cursor-pointer flex justify-center items-center ${isActive("/job")}`}>
                  <Link href="/job"  prefetch={true}>
                   <WorkIcon/>
                    {/* <PiBagSimpleFill color={activeColor("/job")} size={28} /> */}
                  </Link>
                </div>
                <div className={`hover:bg-gray-100 cursor-pointer flex justify-center items-center ${isActive("/achievements")}`}>
                  <Link href="/achievements"  prefetch={true}>
                  <LeaderBoard/>
                    {/* <MdLeaderboard color={activeColor("/Deachievements")} size={28} /> */}
                  </Link>
                </div>
              </div>
            </div>
}
           
           {appState==null &&
           <div className="flex justify-end items-center w-2/5 px-2 mt-2">
            <Link href="/login" type="button" className="mx-2 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Signin</Link>
            <Link type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" href="/register">Signup</Link>


            </div>
           }
{appState!=null &&
            <div className="flex justify-end items-center w-2/5 px-2">
              <div className="p-2 rounded-full">
                <Link href="/settings/view">
                  <SettingsIcon/>
                  {/* <IoMdSettings className="text-black text-bold" size={25} /> */}
                </Link>
              </div>
              <div className="p-1 rounded-full relative">
                <BellIcon/>
                {/* <BiSolidBell size={25} onClick={() => setShowNotifications(!showNotifications)} className="cursor-pointer text-black text-bold" />
                {showNotifications && (
                  <div className="absolute right-0 mt-3 w-64 bg-white shadow-lg rounded-lg p-4">
                    <Image className="text-center" height={200} width={200} alt="not-found" src="https://talentia.co.in/aligator.png" />
                    <p className="text-center">No new notifications</p>
                  </div>
                )} */}
              </div>

              <div className="px-3 rounded-full">
                <Link href="/messaging/view">
                   <MessageIcon/>
                  {/* <BiSolidMessageAlt size={25} className="cursor-pointer text-black text-bold" /> */}
                </Link>
              </div>

              {/* Avatar with Dropdown Menu */}
              <div className="relative px-2">
                <div className="w-16 h-16 flex justify-center items-center rounded-full shadow-md cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
                  <DefaultAvatar size={35} />
                </div>

                {showMenu && (
                  <div className="absolute right-0 mt-3 w-48 bg-white shadow-md rounded-md py-2" style={{zIndex:1000}}>
                    <Link href={`/account/${appState.user_id}`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Profile Settings
                    </Link>
                    <button onClick={()=>handleLogout()} className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                      Logout
                    </button>
                  </div>
                )}
              </div>

            </div>
          }

      </div>
         
     
    </nav>
  );
}
