"use client";
import { useState } from "react";
  
import { IoClose } from "react-icons/io5";  
import VideoPost from "../components/watch"; 

export default function Watch() {

  const [filter, setfilter] = useState(false);

  const handlefiltershow = () => {
    setfilter(!filter);
  };

  return (
    <div className="mt-2">
      <div className="flex flex-col justify-center mb-4 ">
        <div className="flex items-center space-x-3">
          <input
            type="text"
            placeholder="What's on your mind?"
            className="w-full border-none focus:ring-0 bg-white rounded-full px-4 py-4 text-sm"
          />
          <div
            className="flex flex-row justify-center items-center p-4 bg-white rounded-full hover:cursor-pointer hover:shadow"
            onClick={handlefiltershow}
          >
            <svg
              className="text-black size-5  font-extrabold "
              viewBox="0 0 24 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>Filter</title>{" "}
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  {" "}
                  <g id="Filter">
                    {" "}
                    <rect
                      id="Rectangle"
                      fill-rule="nonzero"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      {" "}
                    </rect>{" "}
                    <line
                      x1="4"
                      y1="5"
                      x2="16"
                      y2="5"
                      id="Path"
                      stroke="#0C0310"
                      strokeWidth="2"
                      stroke-linecap="round"
                    >
                      {" "}
                    </line>{" "}
                    <line
                      x1="4"
                      y1="12"
                      x2="10"
                      y2="12"
                      id="Path"
                      stroke="#0C0310"
                      strokeWidth="2"
                      stroke-linecap="round"
                    >
                      {" "}
                    </line>{" "}
                    <line
                      x1="14"
                      y1="12"
                      x2="20"
                      y2="12"
                      id="Path"
                      stroke="#0C0310"
                      strokeWidth="2"
                      stroke-linecap="round"
                    >
                      {" "}
                    </line>{" "}
                    <line
                      x1="8"
                      y1="19"
                      x2="20"
                      y2="19"
                      id="Path"
                      stroke="#0C0310"
                      strokeWidth="2"
                      stroke-linecap="round"
                    >
                      {" "}
                    </line>{" "}
                    <circle
                      id="Oval"
                      stroke="#0C0310"
                      strokeWidth="2"
                      stroke-linecap="round"
                      cx="18"
                      cy="5"
                      r="2"
                    >
                      {" "}
                    </circle>{" "}
                    <circle
                      id="Oval"
                      stroke="#0C0310"
                      strokeWidth="2"
                      stroke-linecap="round"
                      cx="12"
                      cy="12"
                      r="2"
                    >
                      {" "}
                    </circle>{" "}
                    <circle
                      id="Oval"
                      stroke="#0C0310"
                      strokeWidth="2"
                      stroke-linecap="round"
                      cx="6"
                      cy="19"
                      r="2"
                    >
                      {" "}
                    </circle>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
            {/* <GiSettingsKnobs  /> */}
          </div>
        </div>

        {filter && (
          <div className="fixed inset-0 z-[99] flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white shadow-[0px_0px_16px_0px_rgba(0,_0,_0,_0.1)] flex gap-2 flex-col py-5 rounded-lg w-[50vw] ">
              <div className="flex px-4 flex-row items-center border-b-[1px] border-gray pb-2 justify-between">
                <h2 className="text-lg font-bold">Search filters</h2>
                <div className="flex flex-row items-center gap-4">
                  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Apply
                  </button>
                <button
                  className="flex justify-center items-center rounded-[50%] p-2 bg-gray-300"
                  onClick={() => handlefiltershow()}
                >
                  <IoClose />
                </button>
                </div>
                
              </div>
              <div className="px-4 flex flex-1 justify-between gap-4 ">
                <div className="w-[10vw]">
                  <ul className="flex flex-col gap-2 ">
                    <li className="border-b-2  py-2">
                      <h3 className="text-[14px] uppercase font-[600] ">Upload date</h3>
                    </li>

                   <li className="text-[12px] hover:bg-gray-100 px-2 py-1 rounded-[5px] font-bold hover:cursor-pointer"> Last hour</li>
                   <li className="text-[12px] hover:bg-gray-100 px-2 py-1 rounded-[5px] font-bold hover:cursor-pointer">Today</li>
                   <li className="text-[12px] hover:bg-gray-100 px-2 py-1 rounded-[5px] font-bold hover:cursor-pointer">This week</li>
                   <li className="text-[12px] hover:bg-gray-100 px-2 py-1 rounded-[5px] font-bold hover:cursor-pointer">This month</li>
                   <li className="text-[12px] hover:bg-gray-100 px-2 py-1 rounded-[5px] font-bold hover:cursor-pointer">This year</li>
                  </ul>
                </div>
                <div className="w-[10vw]">
                  <ul className="flex flex-col gap-2 ">
                    <li className="border-b-2  py-2">
                      <h3 className="text-[14px] uppercase font-[600]">Type</h3>
                    </li>
                    <li className="text-[12px] hover:bg-gray-100 px-2 py-1 rounded-[5px] font-bold hover:cursor-pointer">Video</li>
                    <li className="text-[12px] hover:bg-gray-100 px-2 py-1 rounded-[5px] font-bold hover:cursor-pointer">Channel</li>
                    <li className="text-[12px] hover:bg-gray-100 px-2 py-1 rounded-[5px] font-bold hover:cursor-pointer">Playlist</li>
                    <li className="text-[12px] hover:bg-gray-100 px-2 py-1 rounded-[5px] font-bold hover:cursor-pointer">Film</li>
                  </ul>
                </div>
                <div className="w-[10vw]">
                  <ul className="flex flex-col gap-2 ">
                    <li className="border-b-2 py-2">
                      <h3 className="text-[14px] uppercase font-[600]">Duration</h3>
                    </li>
                    <li className="text-[12px] hover:bg-gray-100 px-2 py-1 rounded-[5px] font-bold hover:cursor-pointer">Under 4 minutes</li>
                    <li className="text-[12px] hover:bg-gray-100 px-2 py-1 rounded-[5px] font-bold hover:cursor-pointer">4–20 minutes</li>
                    <li className="text-[12px] hover:bg-gray-100 px-2 py-1 rounded-[5px] font-bold hover:cursor-pointer">Over 20 minutes</li>
                  </ul>
                </div>
                <div className="w-[10vw]">
                  <ul className="flex flex-col gap-2 ">
                    <li className="border-b-2  py-2">
                      <h3 className="text-[14px] uppercase font-[600]">Features</h3>
                    </li>
                    <li className="text-[12px] hover:bg-gray-100 px-2 py-1 rounded-[5px] font-bold hover:cursor-pointer" >Live</li>
                    <li className="text-[12px] hover:bg-gray-100 px-2 py-1 rounded-[5px] font-bold hover:cursor-pointer">4K</li>
                    <li className="text-[12px] hover:bg-gray-100 px-2 py-1 rounded-[5px] font-bold hover:cursor-pointer">HD</li>
                    <li className="text-[12px] hover:bg-gray-100 px-2 py-1 rounded-[5px] font-bold hover:cursor-pointer">Subtitles/CC</li>
                    <li className="text-[12px] hover:bg-gray-100 px-2 py-1 rounded-[5px] font-bold hover:cursor-pointer">Creative Commons</li>
                    <li className="text-[12px] hover:bg-gray-100 px-2 py-1 rounded-[5px] font-bold hover:cursor-pointer">360°</li>
                    <li className="text-[12px] hover:bg-gray-100 px-2 py-1 rounded-[5px] font-bold hover:cursor-pointer">VR180</li>
                    <li className="text-[12px] hover:bg-gray-100 px-2 py-1 rounded-[5px] font-bold hover:cursor-pointer">3D</li>
                    <li className="text-[12px] hover:bg-gray-100 px-2 py-1 rounded-[5px] font-bold hover:cursor-pointer">HDR</li>
                    <li className="text-[12px] hover:bg-gray-100 px-2 py-1 rounded-[5px] font-bold hover:cursor-pointer">Location</li>
                    <li className="text-[12px] hover:bg-gray-100 px-2 py-1 rounded-[5px] font-bold hover:cursor-pointer">Purchased</li>
                  </ul>
                </div>
                <div className="w-[10vw]">
                  <ul className="flex flex-col gap-1 ">
                    <li className="border-b-2 py-2">
                      <h3 className="text-[14px] uppercase font-[600]">Sort by</h3>
                    </li>
                    <li className="text-[12px] hover:bg-gray-100 px-2 py-1 rounded-[5px] font-bold hover:cursor-pointer">Relevance</li>
                    <li className="text-[12px] hover:bg-gray-100 px-2 py-1 rounded-[5px] font-bold hover:cursor-pointer">Upload date</li>
                    <li className="text-[12px] hover:bg-gray-100 px-2 py-1 rounded-[5px] font-bold hover:cursor-pointer">View count</li>
                    <li className="text-[12px] hover:bg-gray-100 px-2 py-1 rounded-[5px] font-bold hover:cursor-pointer">Rating</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <VideoPost key={1} />
      <VideoPost key={2} />
      <VideoPost key={3} />
      <VideoPost key={4} />
    </div>
  );
}
