import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import DefaultAvatar from "./defaultAvatar";
import { useSelector } from "react-redux";
import { CgChevronDoubleDown, CgChevronDoubleLeft, CgChevronRight } from "react-icons/cg";

export const SelfProfile = () => {

  const { user } = useAuth();
  const appState = useSelector((state:any) => state.institute);
  const userState = useSelector((state:any) => state.auth.userInfo);
  return (
    <>
      <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto  bg-white shadow-xl rounded-lg text-gray-900">
        <div className="rounded-t-lg h-[12vh] overflow-hidden">
          <Image
            alt="user"
            height={100}
            width={100}
            className="object-cover object-top w-full"
            src={userState.coverPhoto==undefined? `https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ` :userState.coverPhoto }

          />
        </div>
        <div className="mx-auto w-[6vw] h-[6vw] relative left-[-10px] -mt-10 overflow-hidden">
          {/* <Link href="/account/profile"> */}
          {userState.profilePhoto==undefined && <DefaultAvatar  size={60} />}
          {userState.profilePhoto!=undefined && <DefaultAvatar imageUrl={userState.profilePhoto}  size={160} />}
          {/* </Link> */}
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
                <span className="font-semibold text-gray-800 g text-sm hover:cursor-pointer">{ins.name}</span>
                <span>{appState.institutes.length>1?(<Link href="/page/create">+{appState.institutes.length-1}</Link>):''}</span>
              </div>

              {/* Arrow Icon */}
              <span className="text-gray-600 hover:text-gray-800 transition">
                <CgChevronRight size={25} />
              </span>
            </li>
          ))}
        </div>
        <hr className="mt-4 border-gray-300" />



      </div>
    </>
  );
};
