"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { IoChatbubblesOutline } from "react-icons/io5";
import { CiBellOn, CiBoxes, CiLaptop, CiSettings, CiYoutube } from "react-icons/ci";
import { usePathname } from "next/navigation";
import DefaultAvatar from "./defaultAvatar";

export default function Navbar() {
    const pathname = usePathname();
    const [showChat, setShowChat] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);

    const isActive = (route:string) => pathname === route ? 'border-b-4 border-[#3113d6]' : '';
    const activeColor = (route:string) => pathname === route ? '#3113d6' : 'gray';

    return (
        <nav className="bg-white shadow-md w-full sticky top-0 z-50">
            <div className="mx-auto w-full sm:px-0 lg:px-0">
                <div className="relative flex items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:justify-between">
                        <div className="flex shrink-0 items-start lg:w-1/4">
                            <Image width={100} height={100}alt="Logo" width={200} height={30} className="px-2" src="https://talentia.co.in/logo.png" />
                        </div>
                        <div className="hidden sm:block lg:w-full">
                            <div className="flex justify-between w-full px-20">
                                <div className={`py-3 w-[100px] flex justify-center items-center ${isActive('/home/feed')}`}>
                                    <Link href="/home/feed"><AiOutlineHome color={activeColor('/home/feed')} size={28} /></Link>
                                </div>
                                <div className={`py-4 w-[100px] flex justify-center items-center ${isActive('/home/watch')}`}>
                                    <Link href="/home/watch"><CiYoutube color={activeColor('/home/watch')} size={28} /></Link>
                                </div>
                                <div className={`py-4 w-[100px] flex justify-center items-center ${isActive('/home/job')}`}>
                                    <Link href="/home/job"><CiLaptop color={activeColor('/home/job')} size={28} /></Link>
                                </div>
                                <div className={`py-4 w-[100px] flex justify-center items-center ${isActive('/home/achievements')}`}>
                                    <Link href="/home/achievements"><CiBoxes color={activeColor('/home/achievements')} size={28} /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end items-center w-full lg:w-1/2">
                            <div className="px-2"><CiSettings size={35} /></div>
                            <div className="px-2 relative">
                                <CiBellOn size={35} onClick={() => setShowNotifications(!showNotifications)} className="cursor-pointer" />
                                {showNotifications && (
                                    <div className="absolute right-0 mt-3 w-64 bg-white shadow-lg rounded-lg p-4 overshadow2 ">
                                       <Image
                                       className="text-center" 
                                       height={200}
                                       width={200}  alt="not-found" src={"https://talentia.co.in/aligator.png"} />
                                        <p className="text-center">No new notifications</p>
                                    </div>
                                )}
                            </div>
                            <div className="px-2 relative">
                                <IoChatbubblesOutline size={30} onClick={() => setShowChat(!showChat)} className="cursor-pointer" />
                                {showChat && (
                                    <div className="absolute right-0 mt-4 w-80 h-80 bg-white shadow-lg rounded-lg p-4 overflow-y-auto overshadow2">
                                        <p>Chat window</p>
                                    </div>
                                )}
                            </div>
                            <div className="px-1"><DefaultAvatar size={35} imageUrl="https://randomuser.me/api/portraits/men/69.jpg" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
