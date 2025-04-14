import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import DefaultAvatar from "./defaultAvatar";
import { useSelector } from "react-redux";
import { CgChevronRight } from "react-icons/cg";
import Cookies from "js-cookie";
import { fetchUserProfileAndInstitute } from "@/utils/apis/auth";
import SelfProfileSkelatal from "../skelatal/SelfProfileCard";
import { SessionProvider } from "next-auth/react";

export default function SelfProfile  ()  {

  
  const appState = useSelector((state:any) => state.institute);
  const userState = useSelector((state:any) => state.auth.userInfo);
  const coverPhoto='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ';
  const profilePhoto ='https://content.acetians.in/uploads/149071.png';
  if(userState==null){
    
    
    return <SelfProfileSkelatal/>;
  }
  return (
    <>
    <SessionProvider>
      <div className="sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto  bg-white shadow-xl rounded-lg text-gray-900">
        <div className="rounded-t-lg h-[20vh] overflow-hidden">
          <Image
            alt="user"
            height={100}
            width={100}
            className="object-cover object-top w-full"
            src={userState==null?coverPhoto: (userState.coverPhoto==undefined) ? coverPhoto :userState.coverPhoto }

          />
        </div>
        <div className="mx-auto w-[6vw] h-[6vw] relative left-[-40px] -mt-50 overflow-hidden">
          {/* <Link href="/account/profile"> */}
          {userState==null ? <DefaultAvatar  size={60} />: <DefaultAvatar imageUrl={userState.profilePhoto}  size={80} />}
       
        </div>
        <div className=" mx-4">
          <h2 className="font-semibold">{userState.name|| 'Guest'}</h2>
          <p className="text-gray-500">{userState.jobTitle|| ''}</p>
        </div>
        <ul className="py-4  text-gray-700 flex items-center justify-around">
          <li className="flex flex-col items-center justify-around">
            <div>0</div>
            <p className="text-xs">Followers</p>
          </li>
          <li className="flex flex-col items-center justify-between">
            <div>0</div>
            <p className="text-xs">Following</p>
          </li>
          <li className="flex flex-col items-center justify-around">
            <div>0</div>
            <p className="text-xs">Post</p>
          </li>
        </ul>
        
        <div className="px-2">
          <p>Pages ({appState.institutes.length})</p>
          <ul>
          {appState.institutes.slice(0,1).map((ins:any) => (
            <li
              key={ins.id}
              className="p-1  mb-2 flex items-center justify-between rounded-lg shadow-sm hover:bg-blue-100 transition duration-300"
            >
              {/* Logo & Name Section */}
              <div className="flex items-center gap-x-3">
                <Image
                  src={ins.logoURL}
                  alt={ins.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="font-semibold text-gray-800 g text-sm hover:cursor-pointer"><Link href={`/account/${ins.id}`}>{ins.name}</Link></span>
                <span>{appState.institutes.length>1?(<Link href="/page/create">+{appState.institutes.length-1}</Link>):''}</span>
              </div>

              {/* Arrow Icon */}
              <span className="text-gray-600 hover:text-gray-800 transition">
                <CgChevronRight size={25} />
              </span>
            </li>
          ))}
          </ul>
        </div>
        <hr className="mt-4 border-gray-300" />



      </div>
      </SessionProvider>
    </>
  );
};
