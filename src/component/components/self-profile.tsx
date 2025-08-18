"use client";

import Image from "next/image";
import Link from "next/link";
import DefaultAvatar from "./defaultAvatar";
import { useSelector } from "react-redux";
import SelfProfileSkelatal from "../skelatal/SelfProfileCard";
import { useEffect, useState } from "react";
import { FollowersModal } from "./FollowersModal";



export default function SelfProfile({ourfollowers}:any) {
 

  const [showModal, setshowModal] = useState(false);

  const userState = useSelector((state: any) => state.auth.userInfo);
  const coverPhoto =
    "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ";
  const profilePhoto = "https://content.acetians.in/uploads/149071.png";
  if (userState == null) {
    return <SelfProfileSkelatal />;
  }
  const follower = userState.followers || [];
  const followings = userState.followings || [];
  function getCoverPhoto(userState: any, coverPhoto: string): string {
    if (userState == null) return coverPhoto;

    if (userState.coverPhoto !== undefined) {
      return userState.coverPhoto;
    }

    if (userState.bannerURL !== undefined) {
      return userState.bannerURL;
    }

    return coverPhoto;
  }




  return (
    <>
      <div className="sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto  bg-white  rounded-[5px] text-gray-900">
        <div className="rounded-[5px] h-[20vh] overflow-hidden">
          <Image
            alt="user"
            height={100}
            width={100}
            className="object-cover object-top w-full"
            src={getCoverPhoto(userState, coverPhoto)}
            style={{ maxHeight: "200px" }}
          />
        </div>
        <div className="flex flex-row justify-between ">
          <div
            className=" rounded-full"
            style={{
              width: "6vw",
              height: "6vw",
              position: "relative",
              left: 25,
              marginTop: "-18px",
              overflow: "hidden",
            }}
          >
            <Link href={`/account/${userState.id}`}>
              {/* <Link href="/account/profile"> */}
              {userState == null ? (
                <DefaultAvatar size={50} />
              ) : (
                <DefaultAvatar
                  imageUrl={userState.profilePhoto || userState.logoURL}
                  size={120}
                />
              )}
            </Link>
          </div>
          <ul
            style={{
              position: "relative",
              marginTop: "0px",
              overflow: "hidden",
            }}
            className=" gap-4 px-5 py-3 text-gray-700 flex items-center justify-between"
          >
            <li
              onClick={() => console.log(setshowModal(true))}
              className="flex flex-col items-center justify-around"
            >
              <div>{ourfollowers.length}</div>
              <p className="text-xs">Followers</p>
             
            </li>
            <li className="flex flex-col items-center justify-between">
              <div>{followings.length}</div>
              <p className="text-xs">Following</p>
            </li>
          </ul>
        </div>

        <div className="px-4 pb-4 pt-2">
          <Link href={`/account/${userState.id}`}>
            <h2 className="font-semibold">{userState.name || "Guest"}</h2>
          </Link>
          <p className="text-gray-500 text-[12px]">
            {userState.jobTitle || ""}
          </p>
        </div>
      
    

        {showModal && (
          
            // <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            //   <div
            //     style={{ height: "60vh" }}
            //     className="bg-white rounded-lg max-w-md w-full  flex flex-col"
            //   >
            //     {/* Header */}
            //     <div className="p-6 pb-4 border-b flex items-center justify-between">
            //       <h2 className="text-lg font-semibold">Followers</h2>
            //       <button
            //         onClick={() => setshowModal(false)}
            //         className="text-gray-500 hover:text-gray-700 text-xl font-bold w-8 h-8 flex items-center justify-center"
            //       >
            //         ×
            //       </button>
            //     </div>

            //     {/* Search Bar */}
            //     <div className="px-6 pb-4">
            //       <div className="relative">
            //         <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            //           🔍
            //         </span>
            //         <input
            //           type="text"
            //           placeholder="Search followers..."
            //           value={searchQuery}
            //           onChange={(e) => setSearchQuery(e.target.value)}
            //           className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            //         />
            //       </div>
            //     </div>

            //     {/* Followers List */}
            //     <div className="flex-1 overflow-y-auto px-6 pb-6">
            //       <div className="space-y-3">
            //         {mockFollowers.length === 0 ? (
            //           <div className="text-center py-8 text-gray-500">
            //             No followers found
            //           </div>
            //         ) : (
            //           mockFollowers.map((follower) => (
            //             <div
            //               key={follower.id}
            //               className="flex items-center justify-between py-2"
            //             >
            //               <div className="flex items-center space-x-3 flex-1 min-w-0">
            //                 <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-medium">
            //                   {getInitials(follower.name)}
            //                 </div>

            //                 <div className="flex-1 min-w-0">
            //                   <div className="flex items-center space-x-1">
            //                     <p className="font-medium text-sm truncate">
            //                       {follower.name}
            //                     </p>
            //                     {follower.isVerified && (
            //                       <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
            //                         <span className="text-white text-xs">
            //                           ✓
            //                         </span>
            //                       </div>
            //                     )}
            //                   </div>
            //                   <p className="text-gray-500 text-xs truncate">
            //                     @{follower.username}
            //                   </p>
            //                 </div>
            //               </div>

            //               <button
            //                 onClick={() => handleFollowToggle(follower.id)}
            //                 className={`ml-3 px-4 py-1.5 text-sm font-medium rounded-lg transition-colors ${
            //                   follower.isFollowing
            //                     ? "border border-gray-300 text-gray-700 hover:bg-gray-50"
            //                     : "bg-blue-500 text-white hover:bg-blue-600"
            //                 }`}
            //               >
            //                 {follower.isFollowing ? "Following" : "Follow"}
            //               </button>
            //             </div>
            //           ))
            //         )}
            //       </div>
            //     </div>
            //   </div>
            // </div>
            <FollowersModal   mockFollowers={ourfollowers} onClose={() => setshowModal(false)}  isOpen={showModal}/>

        )}
      </div>
    </>
  );
}
