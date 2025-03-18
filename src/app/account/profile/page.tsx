"use client";
import Post from "@/app/home/components/post";
import { useState } from "react";
import { AccountPhotos } from "../components/photos-account";

import { FriendsGrid } from "../components/friends-grid";
import Image from "next/image";

interface PostType {
  id: number;
  text: string;
  media: {
    type: "image" | "video";
    url: string;
  } | null;
  user: {
    name: string;
    avatar: string;
  };
  timestamp: string;
}

export default function Profile() {
 
  const samplePosts: PostType[] = [
    {
      id: 1,
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
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
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
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
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
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
  ];

  const accountSubOptions = ["Posts", "About", "Friends", "Photos", "More"];
  const [currentPage, setCurrentPage] = useState<string>(accountSubOptions[0]);
  return (
    <div className="bg-gray-100 min-h-[90vh] align-center">
      {/* Cover Photo */}
      <div className="relative">
        <Image
          width={700}
          height={50}
          src="https://picsum.photos/1700/700.jpg"
          className="w-full h-60 object-cover"
          alt="Cover"
        />
        <div className="absolute bottom-4 left-6 flex items-center space-x-4">
          {/* Profile Picture */}
          <Image
            width={100}
            height={100}
            src="https://randomuser.me/api/portraits/men/69.jpg"
            className="w-28 h-28 rounded-full border-4 border-white"
            alt="Profile"
          />
          <div>
            <h1 className="text-2xl font-bold text-white">Rohit Saxena</h1>
            <p className="text-gray-200">Rohit Saxena | Marketing Executive</p>
          </div>
        </div>
      </div>

      {/* Profile Actions */}
      <div className="flex justify-between p-4 bg-white shadow">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Add to Story
        </button>
        <button className="px-4 py-2 border rounded">Edit Profile</button>
      </div>

      {/* Tabs */}
      <div className="border-b bg-white shadow-md">
        <nav className="flex space-x-6 p-4">
          {accountSubOptions.map((ac, index) => {
            return (
              <a
                key={index}
                href="#"
                onClick={() => setCurrentPage(ac)}
                className={
                  currentPage == ac
                    ? `text-blue-500 font-semibold`
                    : `text-gray-600`
                }
              >
                {ac}
              </a>
            );
          })}
        </nav>
      </div>

      {/* Content Section */}
      <div className="flex">
        <div className="w-full md:w-1/3 mx-auto p-6 bg-white mt-6 shadow rounded">
          <h2 className="text-xl font-semibold">Intro</h2>
          <p className="text-gray-700">Love to work in marketting.</p>
          <p className="text-gray-700">Leading marketting Executive.</p>
        </div>
        <div className="w-full md:w-2/3 mx-auto p-6 bg-white mt-6 shadow rounded">
          {currentPage == accountSubOptions[0] && (
            <>
              {/* {samplePosts.map((post) => (
                <Post key={post.id} post={post} />
              ))} */}
            </>
          )}
          {currentPage == accountSubOptions[3] && <AccountPhotos />}
          {currentPage == accountSubOptions[2] && <FriendsGrid />}
        </div>
      </div>
    </div>
  );
}
