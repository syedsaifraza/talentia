"use client";

import Post from "@/app/home/components/post";
import { useState } from "react";
import { RiProfileLine } from "react-icons/ri";
import { GoStarFill } from "react-icons/go";
import { ImProfile } from "react-icons/im";
import { FaUserFriends } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { TbFlag3Filled } from "react-icons/tb";

export default function FeedPage() {
  // Sample post data
  const samplePosts = [
    {
      id: 1,
      text: "Enjoying a beautiful sunset at the beach! 🌅 #NatureLover",
      media: {
        type: "image",
        url: "https://picsum.photos/500/500.jpg?random=1",
      },
      user: {
        name: "John Doe",
        avatar: "https://randomuser.me/api/portraits/men/69.jpg",
      },
      timestamp: "2023-10-01T12:00:00Z",
    },
    {
      id: 2,
      text: "Just finished a 10k run! Feeling amazing. 🏃‍♂️ #FitnessGoals",
      media: {
        type: "image",
        url: "https://picsum.photos/500/500.jpg?random=2",
      },
      user: {
        name: "Jane Doe",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      },
      timestamp: "2023-10-02T12:00:00Z",
    },
    {
      id: 3,
      text: "Exploring the mountains today. The view is breathtaking! 🏔️ #AdventureTime",
      media: {
        type: "image",
        url: "https://picsum.photos/500/500.jpg?random=3",
      },
      user: {
        name: "Alice",
        avatar: "https://randomuser.me/api/portraits/women/67.jpg",
      },
      timestamp: "2023-10-03T12:00:00Z",
    },
    {
      id: 4,
      text: "Cooking up a storm in the kitchen today. Who's hungry? 🍳 #Foodie",
      media: {
        type: "image",
        url: "https://picsum.photos/500/500.jpg?random=4",
      },
      user: {
        name: "Bob",
        avatar: "https://randomuser.me/api/portraits/men/70.jpg",
      },
      timestamp: "2023-10-04T12:00:00Z",
    },
    {
      id: 5,
      text: "Check out this amazing street art I found downtown! 🎨 #UrbanArt",
      media: {
        type: "image",
        url: "https://picsum.photos/500/500.jpg?random=5",
      },
      user: {
        name: "Charlie",
        avatar: "https://randomuser.me/api/portraits/men/71.jpg",
      },
      timestamp: "2023-10-05T12:00:00Z",
    },
    {
      id: 6,
      text: "Weekend vibes with my favorite playlist. 🎶 #MusicLover",
      media: {
        type: "video",
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
      },
      user: {
        name: "Diana",
        avatar: "https://randomuser.me/api/portraits/women/72.jpg",
      },
      timestamp: "2023-10-06T12:00:00Z",
    },
    {
      id: 7,
      text: "Morning coffee and a good book. Perfect start to the day. ☕📚 #Relaxation",
      media: {
        type: "image",
        url: "https://picsum.photos/500/500.jpg?random=7",
      },
      user: {
        name: "Eve",
        avatar: "https://randomuser.me/api/portraits/women/73.jpg",
      },
      timestamp: "2023-10-07T12:00:00Z",
    },
    {
      id: 8,
      text: "Throwback to my last vacation. Can't wait to travel again! ✈️ #Wanderlust",
      media: {
        type: "image",
        url: "https://picsum.photos/500/500.jpg?random=8",
      },
      user: {
        name: "Frank",
        avatar: "https://randomuser.me/api/portraits/men/74.jpg",
      },
      timestamp: "2023-10-08T12:00:00Z",
    },
    {
      id: 9,
      text: "Game night with friends! 🎲 #FunTimes",
      media: {
        type: "image",
        url: "https://picsum.photos/500/500.jpg?random=9",
      },
      user: {
        name: "Grace",
        avatar: "https://randomuser.me/api/portraits/women/75.jpg",
      },
      timestamp: "2023-10-09T12:00:00Z",
    },
    {
      id: 10,
      text: "Just adopted a new puppy! Meet Max. 🐶 #DogLover",
      media: {
        type: "image",
        url: "https://picsum.photos/500/500.jpg?random=10",
      },
      user: {
        name: "Hank",
        avatar: "https://randomuser.me/api/portraits/men/76.jpg",
      },
      timestamp: "2023-10-10T12:00:00Z",
    },
  ];

  return (
    <div className=" flex flex-row gap-10">
      <div className="flex flex-1 flex-col gap-4 ">
        {samplePosts.map((post) => (
          <div>
            <Post key={post.id} post={post} />
          </div>
        ))}
      </div>
      <div className="w-[20vw] ">
        <div>
          <ul className="fixed p-3 bg-white w-[20vw] h-[85vh] gap-1 flex flex-col rounded-[8px] ">
            <li className="flex rounded-[10px] flex-row gap-4 items-center px-3 py-[8px] hover:bg-slate-100 cursor-pointer">
              <p className="bg-sky-600 rounded-full p-2">
                <ImProfile className="size-[20] text-white" />
              </p>

              <p className="font-bold">All</p>
            </li>
            
            <li className="flex rounded-[10px] flex-row gap-4 items-center px-3 py-[8px] hover:bg-slate-100 cursor-pointer">
              <p className="bg-sky-600 rounded-full p-2">
                <FaUserFriends className="size-[20] text-white" />
              </p>

              <p className="font-bold">Videos</p>
            </li>
            <li className="flex rounded-[10px] flex-row gap-4 items-center px-3 py-[8px] hover:bg-slate-100 cursor-pointer">
              <p className="bg-sky-600 rounded-full p-2">
                <MdGroups className="size-[20] text-white" />
              </p>

              <p className="font-bold">Reels</p>
            </li>
           
          </ul>
        </div>
      </div>
    </div>
  );
}
