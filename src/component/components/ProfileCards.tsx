"use client"
import React, { useState } from "react";
import NoData from "./NoData";
import Link from "next/link";
import { addFollower } from "@/utils/apis/profile";
import { handleAccountRevalidation } from "./accountRevaliation";

const ProfileCards = ({ data, tab,followers,appState ,followings}: any) => {


  const [sendingUserId, setSendingUserId] = useState<string | null>(null);

  const followerUser = async (followerId: string) => {
    setSendingUserId(followerId);
    await addFollower(followerId);
    await handleAccountRevalidation();
    setSendingUserId(null);
  } 

  return (
    <div>
      <div className="p-4 flex  flex-1">
        {data.length < 1 && <NoData />}
        <div className="flex flex-wrap gap-4">
          {data.map((user: any, index: number) => (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden w-48">
              {/* Profile Image Section */}
              <div className="relative">
                <img
                  src={
                    user.avatar ||
                    "https://content.acetians.in/uploads/d%20u%20m%20m%20y%20-%20u%20s%20er%20-%20male.jpg"
                  }
                  alt={user.avatar}
                  className="w-full h-40 object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-3">
                {/* Name */}
                {/* <button onClick={()=>{
                    return console.log(data)
                }}>hllo</button> */}
                {/* <h3 className="cursor-pointer font-semibold text-base text-gray-900 mb-4 leading-tight">
                  {" "}
                  {user.name}
                </h3> */}

                <Link
                  href={`/account/${user.uid}`}
                  className="cursor-pointer text-center  box-border whitespace-nowrap  font-semibold text-gray-900 mb-4 "
                >
                  {(user.name || "").split(" ").slice(0,3).join(" ")}
                </Link>

                {tab === "connections" && (
                  <div className="space-y-2 mt-4">
                    <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors  duration-200 text-sm">
                      Message
                    </button>
                  </div>
                )}

                {tab === "following" && (
                  <div className="space-y-2 mt-4">
                    <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors duration-200 text-sm">
                      Message
                    </button>

                     <button className="w-full bg-blue-700 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 text-sm">
                      Remove
                    </button>
                  </div>
                )}


                {tab === "followers" && (
                  <div className="space-y-2 mt-3">
                      {followings && followings.some((f:any) => f.uid === user.uid) ? (
                      <button className="w-full bg-blue-700 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 text-sm">Following</button>
                    ) : (
                      <button
                        className="w-full bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 text-sm"
                        onClick={() => followerUser(user.uid)}
                        disabled={sendingUserId === user.uid}
                      >
                        {sendingUserId === user.uid ? "Please Wait..." : "Follow"}
                      </button>
                    )}
                    <button className="w-full bg-gray-300 hover:bg-blue-600 text-black font-medium py-2 px-4 rounded-md transition-colors duration-200 text-sm">
                      Remove
                    </button>
                  </div>
                )}


                {tab === "request" && (
                  <div className="space-y-2">
                    <button className="w-full bg-blue-700 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 text-sm mb-3">
                      Confirm
                    </button>
                    <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors duration-200 text-sm">
                      Delete
                    </button>
                  </div>
                )}

                {/* Action Buttons */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCards;
