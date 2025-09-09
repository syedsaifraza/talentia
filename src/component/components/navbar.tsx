"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiSolidBell } from "react-icons/bi";
import DefaultAvatar from "./defaultAvatar";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/slices/authSlices";
import MessageIcon from "../Icons/MessageIcon";
import SettingsIcon from "../Icons/SettingsIcon";
import LogoFile from "./LogoFile";
import "../../app/globals.css";
import ProfileDropdown from "./ProfileDropdown";
import { HiMiniChatBubbleLeftRight } from "react-icons/hi2";
import useSocket from "../../hooks/useSocket";
import { getNotifications } from "@/utils/apis/notification";
import NameAvatar from "./nameAvatar";
import Image from "next/image";

import Home from "../../assets/Navbar-Home-Icon.png"
import Watch from "../../assets/Navbar-Watch-Icon.png"
import Job from "../../assets/Navbar-Job-Icon.png"
import Archivement from "../../assets/Navbar-Archivement-Icon.png"










export default function Navbar() {
  const socketRef = useSocket('https://talentia.org.in/');  // <-- Your Node.js server URL
    const [messages, setMessages] = useState<number>();
    const [alerts, setAlerts] = useState<any[]>([]);

const loadNotifications = async () => {
  const notification = await getNotifications();
  setAlerts(notification || []); // fallback to empty array if null/undefined
};

    useEffect(() => {
      loadNotifications()
        if (!socketRef.current) return;

        socketRef.current.on('connect', () => {
            console.log('Connected to socket server');
        });

        socketRef.current.on('notification', (msg:any) => {
            setAlerts((prev)=>[...prev,msg])
        });

        return () => {
            if (socketRef.current) {
                socketRef.current.off('random:number');
            }
        };
    }, [socketRef]);
 

  const pathname = usePathname();
  const router = useRouter();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    Cookies.remove("token");
    dispatch(logout());
    router.push("/signin");
  };

  const activeColor = (route: string) =>
    pathname === route ? "#3113d6" : "gray";

  const appState = useSelector((state: any) => state.auth.user);
  const instituteState = useSelector((state: any) => state.institute);

  const tabs = [
    {
      id: "home",
      icon: <Image alt="home" src={Home} color={activeColor("/home")}/>,
      path: "/home",
      label: "Home",
    },
    {
      id: "watch",
      icon:  <Image alt="watch" src={Watch} color={activeColor("/hom")}/>,
      path: "/watch",
      label: "Watch",
    },
    {
      id: "job",
      icon:  <Image alt="job" src={Job} color={activeColor("/hom")}/>,
      path: "/job",
      label: "Jobs",
    },
    {
      id: "leaderboard",
      icon:  <Image alt="leaderboard" src={Archivement} color={activeColor("/hom")}/>,
      path: "/leaderboard",
      label: "Leaderboard",
    },
  ];

  return (
    <nav className="bg-white shadow-sm w-full sticky top-0 z-50">
      <div className="grid grid-cols-3 justify-center items-center px-5 ">
        <div className="flex justify-start ">
          <LogoFile />
        </div>

        <div>
          {appState != null && (
            <div className="grid  grid-cols-4 gap-3">
              {tabs.map((tab) => (
                <Link
                title={tab.label}
                  key={tab.id}
                  href={tab.path}
                  className={`py-3  ${
                    pathname === tab.path
                      ? "bg-gray-00 border-b-2 border-gray-900"
                      : ""
                  }  flex flex-col ${
                    pathname === tab.path ? "" : "hover:bg-gray-100"
                  } items-center ${
                    pathname === tab.path ? "text-[#3113d6]" : "text-gray-500"
                  }`}
                >
                  <div className={`p-2 rounded-lg w-10 h-10 `}>
                   {tab.icon}
                  </div>
                  {/* <span className="text-xs mt-1">{tab.label}</span> */}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Rest of your navbar code remains the same */}
        <div>
          {/* {appState == null && (
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
          )} */}

          {appState != null && (
            <div className="flex justify-end items-center gap-3">
              <div className="p-2 rounded-full bg-gray-200 text-white">
                <Link href="/Settings/view" className="text-white">
                  <SettingsIcon />
                </Link>
              </div>
              <div className="p-2 rounded-full bg-gray-200 text-white relative">
                <span className="flex justify-center items-center"  style={{fontSize:'13px',color:'white',fontWeight:'bolder',backgroundColor:"red" , borderRadius:"50%",position:'absolute',top:-3,right:0,display:"flex",justifyContent:"center",alignItems:"center",height:"20px",width:"20px",}}>{alerts.length}</span>
                
                <BiSolidBell
                  size={25}
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="cursor-pointer text-black text-bold"
                />
                
                
                {showNotifications && (
                  <>
                    <div className="absolute right-0 top-12 w-80 z-50 bg-white border border-gray-200 rounded-lg shadow-lg">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <h3 className="text-sm font-medium text-gray-900">
                          Notifications
                        </h3>
                      </div>
                      <div className="h-[30vh] w-[40vw]  overflow-y-auto">
                        {alerts.reverse().slice(0,4).map((notification,index) => (
                          <div
                            key={"not"+index}
                            className={`px-4 py-3 border-b w-[40vw] border-gray-50 hover:bg-gray-50 cursor-pointer ${
                              notification.id ? "bg-blue-50" : ""
                            }`}
                          >
                            <div className="flex items-start space-x-3">
                              <div className="flex-shrink-0 mt-1">
                                 
                                {notification.notificationImageUrl.toString().includes("https")? <>
                                <Image
                                              src={notification.notificationImageUrl.toString()}
                                              width={40}
                                              height={40}
                                              alt={"a"}
                                              className="rounded-full object-cover aspect-square"
                                            />
                                </>:<NameAvatar size={30} name={notification.notificationImageUrl} />
 } </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                  {notification.notificationTitle}
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                  {notification.notificationDescription}
                                </p>
                                <p className="text-xs text-gray-400 mt-1">
                                  {/* {notification.time} */}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
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

              <div className="p-2 rounded-full bg-gray-200 text-white">
                <Link href="/messaging/view">
                 <MessageIcon />
                </Link>
              </div>

              <div className="relative">
                <div
                  className=" flex justify-center items-center rounded-full shadow-md cursor-pointer"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <DefaultAvatar size={40} />
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
