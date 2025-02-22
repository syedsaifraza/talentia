'use client' 
  
import { FaBuilding, FaUserFriends, FaWatchmanMonitoring } from "react-icons/fa";
import { FaBookmark, FaHistory, FaUsers, FaVideo, FaHome, FaBirthdayCake, FaEnvelope, FaClock, FaBriefcase, FaNewspaper } from "react-icons/fa";
 
import { SelfProfile } from "./self-profile";


const Sidebar = () => {
  //const { user } = useSelector((state: any) => state.auth);
  const sideOptions = [
    { name: "Create Institutional Page", icon: <FaBuilding size={25} /> },
    { name: "Feed", icon: <FaHome size={25} /> },
    { name: "Connections", icon: <FaUserFriends size={25} /> },
    { name: "Blog", icon: <FaBookmark size={25} /> },
    { name: "Reels", icon: <FaWatchmanMonitoring size={25} /> },
    { name: "Saved", icon: <FaBookmark size={25} /> },
    { name: "Watch History", icon: <FaHistory size={25} /> },
    { name: "Communities", icon: <FaUsers size={25} /> },
    { name: "Video", icon: <FaVideo size={25} /> },
    { name: "Birthday", icon: <FaBirthdayCake size={25} /> },
    { name: "Messages", icon: <FaEnvelope size={25}/> },
    { name: "Memories", icon: <FaClock size={25} /> },
    { name: "Events", icon: <FaClock size={25}/> },
    { name: "Jobs", icon: <FaBriefcase size={25}/> },
    { name: "Blogs", icon: <FaNewspaper size={25} /> }
  ];
  return (
    <aside id="default-sidebar" className="w-1/4 h-[90vh]" aria-label="Sidebar">
      <div className="h-full px-3 py-4 overflow-y-auto   dark:bg-gray-800 no-scrollbar fixed left-0 z-40 ">
        <ul className="space-y-2 font-medium">
          <li key={321} className="">
            <SelfProfile/>
             
          </li>
          {sideOptions.map((side,index)=><li key={index} className=" px-2 font-a">
            <a
              href="#"
              className="flex items-center p-2 py-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              {side.icon}
              <span className="flex-1 ms-3 whitespace-nowrap font-900" style={{fontSize:'16px'}}>{side.name}</span>
               
            </a>
          </li>)}
           
           

        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
