"use client";

import Post from "@/app/home/components/post";
import { useState } from "react";
import { RiProfileLine } from "react-icons/ri";
import { GoStarFill } from "react-icons/go";
import { ImProfile } from "react-icons/im";
import { FaUserFriends } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { TbFlag3Filled } from "react-icons/tb";

export default function Memories() {
  const currentDate = new Date().toISOString().split("T")[0];
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
      timestamp: currentDate,
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
      timestamp: currentDate,
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
      timestamp: currentDate,
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
      timestamp: currentDate,
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
      timestamp: currentDate,
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
      timestamp: currentDate,
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
      timestamp: currentDate,
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
      timestamp: currentDate,
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
      timestamp: currentDate,
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
      timestamp: currentDate,
    },
  ];

  return (
    <>
      <div className=" flex flex-row gap-10 mt-2 justify-center items-center w-[75vw]">
        <div className="flex flex-1 flex-col gap-4 justify-center items-center ">
          <h1 className="bg-white p-2 rounded-[10px] font-bold w-[60vw]">
            On This Day
          </h1>
          {samplePosts.map((post) => (
            <div className=" w-[60vw]">
              <Post key={post.id} post={post} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
