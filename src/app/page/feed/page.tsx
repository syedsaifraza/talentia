"use client";

import Post from "@/component/components/post";

import { GoStarFill } from "react-icons/go";
import { ImProfile } from "react-icons/im";
import { FaUserFriends } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { TbFlag3Filled } from "react-icons/tb";
import { PostType } from "@/types/PostType";

export default function FeedPage() {
  // Sample post data

  
  const samplePosts:PostType[] = [];

  return (
    <div className="flex flex-row gap-y-4">
      <div className="flex flex-1 flex-col gap-4 mt-2 ">
        {samplePosts.map((post) => (
          <p></p>
          // <div key={post.id}>
          //   <Post key={post.id} post={post} />
          // </div>
        ))}
      </div>
      <div className="w-[25vw]">
        <div>
          <ul className="fixed p-2  bg-white w-[25vw] h-[85vh] gap-1 flex flex-col ">
            <li className="flex rounded-[5px] flex-row gap-4 items-center px-3 py-[8px] hover:bg-slate-100 cursor-pointer">
              <p className="bg-sky-600 rounded-full p-2">
                <ImProfile className="size-[20] text-white" />
              </p>

              <p className="font-bold">All</p>
            </li>
            <li className="flex rounded-[10px] flex-row gap-4 items-center px-3 py-[8px] hover:bg-slate-100 cursor-pointer">
              <p className="bg-sky-600 rounded-full p-2">
             <GoStarFill className="size-[20] text-white" />
              </p>

              <p className="font-bold">followings</p>
            </li>
            <li className="flex rounded-[10px] flex-row gap-4 items-center px-3 py-[8px] hover:bg-slate-100 cursor-pointer">
              <p className="bg-sky-600 rounded-full p-2">
                <FaUserFriends className="size-[20] text-white" />
              </p>

              <p className="font-bold">Connections</p>
            </li>
            <li className="flex rounded-[10px] flex-row gap-4 items-center px-3 py-[8px] hover:bg-slate-100 cursor-pointer">
              <p className="bg-sky-600 rounded-full p-2">
                <MdGroups className="size-[20] text-white" />
              </p>

              <p className="font-bold">Communities</p>
            </li>
            <li className="flex rounded-[10px] flex-row gap-4 items-center px-3 py-[8px] hover:bg-slate-100 cursor-pointer">
              <p className="bg-sky-600 rounded-full p-2">
                <TbFlag3Filled className="size-[20] text-white" />
              </p>

              <p className="font-bold">Pages</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
