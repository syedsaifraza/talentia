"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import {
  FaAngleLeft,
  FaAngleRight,
  FaPlusCircle,
  FaTimes,
} from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";
import PostCustomizer from "./PostCustomiser";
import NameAvatar from "./nameAvatar";
import { IoClose } from "react-icons/io5";
import moment from "moment";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ReelsScroller({
  limit,
  size,
}: {
  limit: number;
  size: string;
}) {
  const [selectedStatus, setSelectedStatus] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const arrayName = useRef<HTMLUListElement>(null);
  const userState = useSelector((state: any) => state.auth.userInfo);



  const statusUpdates = useSelector((state: any) => state.status);
  const scroll = (direction: string) => {
    const { current } = scrollRef;
    if (current) {
      current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };
  const scrollToLeft = () => {
    const { current } = arrayName;
    if (current) {
      current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const scrollToRight = () => {
    const { current } = arrayName;
    if (current) {
      current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const [openStatusAdd, setOpenStatusAdd] = useState(false);
  const handleNext = () => {
    if (
      selectedStatus !== null &&
      selectedStatus < statusUpdates.status.length - 1
    ) {
      setSelectedStatus(selectedStatus + 1);
    }
  };

  const closeOverlay = () => {
    setSelectedStatus(null);
  };
  const handlePrevious = () => {
    if (selectedStatus !== null && selectedStatus > 0) {
      setSelectedStatus(selectedStatus - 1);
    }
  };

  return (
    <>
      {selectedStatus !== null && (
        <div
          id="default-sidebar"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-95 gap-4 md:gap-10 overflow-hidden z-50"
        >
          {/* Navigation Arrows */}
          <div className="z-50">
            <button
              onClick={handlePrevious}
              className="bg-white/20 hover:bg-white/30 p-2 rounded-full text-white transition-all duration-200"
              disabled={selectedStatus === 0}
            >
              <FaAngleLeft size={28} color="white" />
            </button>
          </div>

          {/* Main Content Container */}
          <div className="relative flex flex-col items-center w-full max-w-2xl h-[90vh] mx-4">
            {/* User Header */}
            <div className="flex items-center w-full p-4 bg-[#000000ba]">
              <div className="w-10 h-10 border-2 border-blue-500 rounded-full overflow-hidden">
                <Image
                  width={40}
                  height={40}
                  src={
                    statusUpdates.status[selectedStatus].userDetails
                      .profilePhoto
                  }
                  alt={statusUpdates.status[selectedStatus].userDetails.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-3">
                <h3 className="text-white text-md font-semibold">
                  {statusUpdates.status[selectedStatus].userDetails.name}
                </h3>
                <p className="text-xs text-gray-300">
                  {moment(
                    statusUpdates.status[selectedStatus].createdAt._seconds *
                      1000
                  ).fromNow()}
                </p>
              </div>
            </div>

            <div className="w-full h-full flex justify-center">
              {statusUpdates.status[selectedStatus].fileURL ? (
                <div
                  className="flex justify-center items-center"
                  style={{ minHeight: "80vh", width: "500px" }}
                >
                  {statusUpdates.status[selectedStatus].fileURL.endsWith(
                    ".mp4"
                  ) ? (
                    <video
                      controls
                      src={statusUpdates.status[selectedStatus].fileURL}
                      autoPlay={true}
                      className="h-full max-h-[80vh] object-contain"
                    />
                  ) : (
                    <Image
                      width={300}
                      height={500}
                      src={statusUpdates.status[selectedStatus].fileURL}
                      alt={statusUpdates.status[selectedStatus].text}
                      className="h-full max-h-[80vh] object-contain"
                    />
                  )}
                </div>
              ) : (
                <div
                  className="flex justify-center items-center w-full h-full"
                  style={{
                    background: "#f87171",
                    height: "90vh",
                    width: "400px",
                  }}
                >
                  <div className="text-white text-lg p-4 text-center">
                    {statusUpdates.status[selectedStatus].text}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Navigation and Close Button */}
          <div className="z-50 flex flex-col items-center gap-4">
            <button
              onClick={handleNext}
              className="bg-white/20 hover:bg-white/30 p-2 rounded-full text-white transition-all duration-200"
            >
              <FaAngleRight size={28} color="white" />
            </button>
            <button
              onClick={closeOverlay}
              className="absolute top-4 left-4 bg-white/20 hover:bg-white/30 p-2 rounded-full text-white transition-all duration-200"
            >
              <IoClose size={24} color="white" />
            </button>
          </div>
        </div>
      )}

      {openStatusAdd === true && (
        <div
          className=" fixed top-0 left-0 w-full h-full bg-white"
          style={{ zIndex: 200 }}
        >
          <PostCustomizer closeStatusBox={() => setOpenStatusAdd(false)} />
        </div>
      )}

      <div
        style={{ borderRadius: "6px" }}
        className="flex flex-col  gap-5  rounded-lg  relative select-none"
      >
        <ul
          className="flex border-1 gap-3 p-2 border-black"
          ref={arrayName}
          style={{ overflow: "scroll", scrollbarWidth: "none" }}
        >
          <li key={23111} className="text-indigo-500 ">
            {/* <div
              className="profile-card relative h-56 w-32 rounded-lg overflow-hidden cursor-pointer"
              style={{ boxShadow: "0px 1px 1px 1px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="relative flex flex-col justify-between h-full p-2">
                <div className="flex justify-center py-3">
                  <img
                    src={
                      "https://content.acetians.in/uploads/d%20u%20m%20m%20y%20-%20u%20s%20er%20-%20male.jpg"
                    }
                    alt="Profile"
                    className="rounded-full border-2 border-green-500 w-12 h-12 object-cover"
                  />
                </div>
                <div className="flex py-2 text-[14px] text-white justify-center items-end">
                  hello
                </div>
              </div>
            </div> */}
            <div className="bg-white flex flex-col justify-between rounded-lg shadow-sm border border-gray-200 p-4 h-56 w-32 cursor-pointer hover:shadow-md transition-shadow">
              {/* Avatar container with plus button */}
              <div className="relative mb-3">
                {/* Large gray avatar circle */}
                <div className=" bg-gray-500 rounded-full mx-auto flex items-center justify-center">
                  {/* Simple person icon using CSS */}
                  <img
                    src={"https://content.acetians.in/uploads/d%20u%20m%20m%20y%20-%20u%20s%20er%20-%20male.jpg"}
                    alt="Avatar"
                    className=" rounded-full object-cover"
                  />
                </div>

               

                {/* Blue plus button */}
              </div>
               <div className="flex justify-center items-center ">
                  <div onClick={() => setOpenStatusAdd(true)} className="absolut bottom-5 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white  rounded-full"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </div>
                </div>

              {/* Create story text */}
              <p  onClick={()=>console.log(userState)} className="text-[14px] text-gray-700 text-center ">
                Create story
              </p>
            </div>
            {/* <div
            style={{boxShadow: "0px 1px 1px 1px rgba(0, 0, 0, 0.1)"}}
              className="bg-gray-200 text-indigo-500 px-2 h-56 w-32 rounded-lg 
                 hover:cursor-pointer"
            >
              <FaPlus
                size={68}
                color="green"
                onClick={() => setOpenStatusAdd(true)}
              />
            </div> */}
          </li>
          <div className="flex gap-3 flex-row ">
            {statusUpdates.status.map((stat: any, i: number) => (
              <div
                key={i}
                onClick={() => setSelectedStatus(i)}
                className="profile-card relative h-56 w-32 rounded-lg overflow-hidden cursor-pointer"
                style={{ boxShadow: "0px 1px 1px 1px rgba(0, 0, 0, 0.1)" }}
              >
                {/* Transparent black overlay */}
                <div className="absolute inset-0 z-30 ">
                  {stat.fileURL ? (
                    <div>
                      {stat.fileURL.endsWith(".mp4") ? (
                        <video
                          controls={false}
                          src={stat.fileURL}
                          autoPlay={false}
                          muted={true}
                          className="  h-56 object-contain"
                        />
                      ) : (
                        <img
                          src={stat.fileURL}
                          alt={stat.text}
                          className=" h-56  object-cover"
                        />
                      )}
                    </div>
                  ) : (
                    <div
                      className="flex justify-center bg-gray-700  items-center w-full h-full"
                      style={{}}
                    >
                      <div className="text-white text-[14px] line-clamp-2 p-2 text-center">
                        {stat.text}
                      </div>
                    </div>
                  )}
                </div>
                <div className="relative flex flex-col justify-between h-full p-2">
                  <div className="flex justify-center py-3">
                    <img
                      src={
                        stat.userDetails.profilePhoto ||
                        "https://content.acetians.in/uploads/d%20u%20m%20m%20y%20-%20u%20s%20er%20-%20male.jpg"
                      }
                      alt="Profile"
                      className="rounded-full border-2 border-green-500 w-12 h-12 object-cover"
                    />
                  </div>
                  <div className="flex py-2 text-[14px] text-white justify-center items-end">
                    {stat.userDetails.name}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <li
            className="hover:cursor-pointer bg-white rounded-full absolute z-40 top-44 left-3 flex justify-center align-center hover:text-indigo-900 p-2  "
            style={{ top: "36%" }}
          >
            <ChevronLeft
              size={30}
              onClick={() => scrollToRight()}
              className=" text-gray-700"
            />
          </li>

          <li
            className="hover:cursor-pointer bg-white rounded-full absolute z-40 top-44 right-3 flex justify-center align-center hover:text-indigo-900 p-2  "
            style={{ top: "36%" }}
          >
            {" "}
            <ChevronRight
              size={30}
              onClick={() => scrollToLeft()}
              className=" text-gray-700"
            />{" "}
          </li>
        </ul>
      </div>
    </>
  );
}
