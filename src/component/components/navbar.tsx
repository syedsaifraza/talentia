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
import { useDispatch } from "react-redux";
import { logout } from "@/store/slices/authSlices";

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

  return (
    <nav className="bg-white shadow-md w-full sticky top-0 z-50">
       
      <div className="flex items-center justify-center">
            <div className="flex w-2/5">
              <Image
                width={200}
                height={80}
                alt="Logo"
                className="px-2"
                src="https://content.acetians.in/uploads/logo%20(2).png"
              />
              <p className="bg-orange-400 font-bold">BETA</p>
            </div>

            <div className="w-2/5 px-2">
              <div className="flex justify-between">
                <div className={`hover:bg-gray-100 cursor-pointer flex justify-center items-center ${isActive("/feed")}`}>
                  <Link href="/feed" prefetch={true}>
                  
                    <AiOutlineHome color={activeColor("/feed")} size={28} />
                  </Link>
                </div>
                <div className={`hover:bg-gray-100 cursor-pointer flex justify-center items-center ${isActive("/watch")}`}>
                  <Link href="/watch"  prefetch={true}>
                    <MdOutlineVideoLibrary color={activeColor("/watch")} size={28} />
                  </Link>
                </div>
                <div className={`hover:bg-gray-100 cursor-pointer flex justify-center items-center ${isActive("/job")}`}>
                  <Link href="/job"  prefetch={true}>
                    <PiBagSimpleFill color={activeColor("/job")} size={28} />
                  </Link>
                </div>
                <div className={`hover:bg-gray-100 cursor-pointer flex justify-center items-center ${isActive("/achievements")}`}>
                  <Link href="/achievements"  prefetch={true}>
                    <MdLeaderboard color={activeColor("/Deachievements")} size={28} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex justify-end items-center w-2/5 px-2">
              <div className="p-2 rounded-full">
                <Link href="/settings/view">
                  <IoMdSettings className="text-black text-bold" size={25} />
                </Link>
              </div>
              <div className="p-1 rounded-full relative">
                <BiSolidBell size={25} onClick={() => setShowNotifications(!showNotifications)} className="cursor-pointer text-black text-bold" />
                {showNotifications && (
                  <div className="absolute right-0 mt-3 w-64 bg-white shadow-lg rounded-lg p-4">
                    <Image className="text-center" height={200} width={200} alt="not-found" src="https://talentia.co.in/aligator.png" />
                    <p className="text-center">No new notifications</p>
                  </div>
                )}
              </div>

              <div className="px-3 rounded-full">
                <Link href="/messaging/view">
                  <BiSolidMessageAlt size={25} className="cursor-pointer text-black text-bold" />
                </Link>
              </div>

              {/* Avatar with Dropdown Menu */}
              <div className="relative px-2">
                <div className="w-16 h-16 flex justify-center items-center rounded-full shadow-md cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
                  <DefaultAvatar size={35} />
                </div>

                {showMenu && (
                  <div className="absolute right-0 mt-3 w-48 bg-white shadow-md rounded-md py-2" style={{zIndex:1000}}>
                    <Link href="/account/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Profile Settings
                    </Link>
                    <button onClick={()=>handleLogout()} className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>

      </div>
         
     
    </nav>
  );
}
