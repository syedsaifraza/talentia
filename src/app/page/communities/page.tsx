"use client";
import Video from "@/app/home/components/Videos";
import { useState } from "react";
import { IoIosPeople } from "react-icons/io";

export default function JobsPage() {
  return (
    <ul className="flex flex-col gap-4 ">
      <li>
        <button className="bg-blue-600  rounded-[10px] text-white font-bold py-2 px-3 hover:bg-blue-700">Create Communities</button>
      </li>

      <li className="bg-white flex flex-col  gap-2 p-1 rounded-[10px]">
        <div className="max-w-screen-xl sm:p-10 md:p-8">
          <div className="border-b mb-5 flex justify-between text-sm">
            <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
              <a href="#" className="font-semibold inline-block">
                Top Trending Communities
              </a>
            </div>
            <a href="#">See All</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {/* CARD 1 */}
            <div className="rounded overflow-hidden shadow-lg flex flex-col">
              <a href="#" />
              <div className="relative">
                <a href="#">
                  <img
                    className="w-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiakQQXPgmJxsCp9rb8_2Jm7uWrGCvbUHGoQ&s"
                    alt="Sunset in the mountains"
                  />
                  <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                </a>
                <a href="#!">
                  <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                    Education
                  </div>
                </a>
              </div>
              <div className="px-6 py-4 mb-auto">
                <a
                  href="#"
                  className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
                >
                  The Student Room
                </a>
                <p className="text-gray-500 text-sm">
                  Popular among UK students for academic and career discussions.
                </p>
              </div>
              <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                <span className="flex flex-row">
                  <IoIosPeople className="text-[2vw]" />
                  <span className="ml-1">120k</span>
                </span>

                <div className="text-xs bg-indigo-600 px-4 py-2 text-white   hover:bg-indigo-800 cursor-pointer  transition duration-200 ease-in-out rounded">
                  Join
                </div>
              </div>
            </div>
            {/* CARD 2 */}
            <div className="rounded overflow-hidden shadow-lg flex flex-col">
              <a href="#" />
              <div className="relative">
                <a href="#">
                  <img
                    className="w-full"
                    src="https://www.si.com/.image/t_share/MTczMzYxMjQzODkxOTY3ODk3/x163129_tk1_00818.jpg"
                    alt="Sunset in the mountains"
                  />
                  <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                </a>
                <a href="#!">
                  <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                    Sports
                  </div>
                </a>
              </div>
              <div className="px-6 py-4 mb-auto">
                <a
                  href="#"
                  className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
                >
                  GameOn Nation
                </a>
                <p className="text-gray-500 text-sm">
                  A vibrant community where sports lovers unite, discuss their
                  favorite teams, and share game highlights.
                </p>
              </div>
              <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                <span className="flex flex-row">
                  <IoIosPeople className="text-[2vw]" />
                  <span className="ml-1">120k</span>
                </span>

                <div className="text-xs bg-indigo-600 px-4 py-2 text-white   hover:bg-indigo-800 cursor-pointer  transition duration-200 ease-in-out rounded">
                  Join
                </div>
              </div>
            </div>
            {/* CARD 3 */}
            <div className="rounded overflow-hidden shadow-lg flex flex-col">
              <a href="#" />
              <div className="relative">
                <a href="#">
                  <img
                    className="w-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO96z3T-2CqY__oEdjBER62VMH94j4lv9Yb7VYbey4nMUKaoOq3hER3d-3PKNmd3_UWxw&usqp=CAU"
                    alt="Sunset in the mountains"
                  />
                  <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                </a>
                <a href="#!">
                  <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white transition duration-500 ease-in-out">
                    Research
                  </div>
                </a>
              </div>
              <div className="px-6 py-4 mb-auto">
                <a
                  href="#"
                  className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
                >
                  Sports Insight Lab
                </a>
                <p className="text-gray-500 text-sm">
                  A hub for research and discussions on sports performance,
                  analytics, and innovations.
                </p>
              </div>
              <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                <span className="flex flex-row">
                  <IoIosPeople className="text-[2vw]" />
                  <span className="ml-1">120k</span>
                </span>

                <div className="text-xs bg-indigo-600 px-4 py-2 text-white   hover:bg-indigo-800 cursor-pointer  transition duration-200 ease-in-out rounded">
                  Join
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li className="bg-white flex flex-col  gap-2 p-1 rounded-[10px]">
        <div className="max-w-screen-xl sm:p-10 md:p-8">
          <div className="border-b mb-5 flex justify-between text-sm">
            <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
              <a href="#" className="font-semibold inline-block">
                Joined Communities
              </a>
            </div>
            <a href="#">See All</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {/* CARD 1 */}
            <div className="rounded overflow-hidden shadow-lg flex flex-col">
              <a href="#" />
              <div className="relative">
                <a href="#">
                  <img
                    className="w-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiakQQXPgmJxsCp9rb8_2Jm7uWrGCvbUHGoQ&s"
                    alt="Sunset in the mountains"
                  />
                  <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                </a>
                <a href="#!">
                  <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                    Education
                  </div>
                </a>
              </div>
              <div className="px-6 py-4 mb-auto">
                <a
                  href="#"
                  className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
                >
                  The Student Room
                </a>
                <p className="text-gray-500 text-sm">
                  Popular among UK students for academic and career discussions.
                </p>
              </div>
              <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                <span className="flex flex-row">
                  <IoIosPeople className="text-[2vw]" />
                  <span className="ml-1">120k</span>
                </span>

                <div className="text-xs bg-indigo-600 px-4 py-2 text-white   hover:bg-indigo-800 cursor-pointer  transition duration-200 ease-in-out rounded">
                  View
                </div>
              </div>
            </div>
            {/* CARD 2 */}
            <div className="rounded overflow-hidden shadow-lg flex flex-col">
              <a href="#" />
              <div className="relative">
                <a href="#">
                  <img
                    className="w-full"
                    src="https://www.si.com/.image/t_share/MTczMzYxMjQzODkxOTY3ODk3/x163129_tk1_00818.jpg"
                    alt="Sunset in the mountains"
                  />
                  <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                </a>
                <a href="#!">
                  <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                    Sports
                  </div>
                </a>
              </div>
              <div className="px-6 py-4 mb-auto">
                <a
                  href="#"
                  className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
                >
                  GameOn Nation
                </a>
                <p className="text-gray-500 text-sm">
                  A vibrant community where sports lovers unite, discuss their
                  favorite teams, and share game highlights.
                </p>
              </div>
              <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                <span className="flex flex-row">
                  <IoIosPeople className="text-[2vw]" />
                  <span className="ml-1">120k</span>
                </span>

                <div className="text-xs bg-indigo-600 px-4 py-2 text-white   hover:bg-indigo-800 cursor-pointer  transition duration-200 ease-in-out rounded">
                  View
                </div>
              </div>
            </div>
            {/* CARD 3 */}
            <div className="rounded overflow-hidden shadow-lg flex flex-col">
              <a href="#" />
              <div className="relative">
                <a href="#">
                  <img
                    className="w-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO96z3T-2CqY__oEdjBER62VMH94j4lv9Yb7VYbey4nMUKaoOq3hER3d-3PKNmd3_UWxw&usqp=CAU"
                    alt="Sunset in the mountains"
                  />
                  <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                </a>
                <a href="#!">
                  <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white transition duration-500 ease-in-out">
                    Research
                  </div>
                </a>
              </div>
              <div className="px-6 py-4 mb-auto">
                <a
                  href="#"
                  className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
                >
                  Sports Insight Lab
                </a>
                <p className="text-gray-500 text-sm">
                  A hub for research and discussions on sports performance,
                  analytics, and innovations.
                </p>
              </div>
              <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                <span className="flex flex-row">
                  <IoIosPeople className="text-[2vw]" />
                  <span className="ml-1">120k</span>
                </span>

                <div className="text-xs bg-indigo-600 px-4 py-2 text-white   hover:bg-indigo-800 cursor-pointer  transition duration-200 ease-in-out rounded">
                  View
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li className="bg-white flex flex-col  gap-2 p-1 rounded-[10px]">
        <div className=" bg-gray-100 flex justify-center items-center">
          <div className="container mx-auto bg-indigo-500 rounded-lg p-14">
            <form>
              <h1 className="text-center font-bold text-white text-4xl">
                Find the perfect Communities 
                <p className="mx-auto font-normal text-sm my-6 max-w-lg">
                  Enter your select communities name and choose any subject name
                </p>
                <div className="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
                  <input
                    className="text-base text-gray-400 flex-grow outline-none px-2 "
                    type="text"
                    placeholder="Search Communities"
                  />
                
                    
                    <button className="bg-indigo-500 text-white text-base rounded-lg px-4 py-2 font-thin">
                      Search
                    </button>
                
                </div>
              </h1>
            </form>
          </div>
        </div>
        <div>
          <h1 className="text-center font-bold">No Communities</h1>
        </div>
      </li>
    </ul>
  );
}
