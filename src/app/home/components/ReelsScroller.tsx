"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdNoteAdd, MdAddCircleOutline } from "react-icons/md";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import ReelCardSkeletal from "@/component/skelatal/ReelCardSkletal";
import NameAvatar from "./nameAvatar";

const EmojiPicker = dynamic(() => import("emoji-picker-react"), { ssr: false });

const initialReelsData = [
  {
    id: 1,
    user: "Alice Johnson",

    avatar: "https://picsum.photos/20/20?random=1",
    thumbnail: "https://picsum.photos/300/500?random=1",
    video: "https://content.acetians.in/uploads/video15.mp4",
  },
  {
    id: 2,
    user: "Bob Brown",
    avatar: "https://picsum.photos/20/20?random=2",
    thumbnail: "https://picsum.photos/300/500?random=2",
    video: "https://content.acetians.in/uploads/video14.mp4",
  },
  {
    id: 3,
    user: "Charlie Davis",
    avatar: "https://picsum.photos/20/20?random=1",
    thumbnail: "https://picsum.photos/300/500?random=1",
    video: "https://content.acetians.in/uploads/video13.mp4",
  },
  {
    id: 4,
    user: "Diana Evans",
    avatar: "https://picsum.photos/20/20?random=2",
    thumbnail: "https://picsum.photos/300/500?random=2",
    video: "https://content.acetians.in/uploads/video12.mp4",
  },
  {
    id: 5,
    user:"Eva Green",
    avatar: "https://picsum.photos/20/20?random=1",
    thumbnail: "https://picsum.photos/300/500?random=1",
    video: "https://content.acetians.in/uploads/video7.mp4",
  },
  {
    id: 6,
    user:  "Frank Harris",
    avatar: "https://picsum.photos/20/20?random=1",
    thumbnail: "https://picsum.photos/300/500?random=1",
    video: "https://content.acetians.in/uploads/video1.mp4",
  },
  {
    id: 7,
    user:  "Grace Lee",
    avatar: "https://picsum.photos/20/20?random=2",
    thumbnail: "https://picsum.photos/300/500?random=2",
    video: "https://content.acetians.in/uploads/video4.mp4",
  },
  {
    id: 8,
    user:   "Henry Martinez",
    avatar: "https://picsum.photos/20/20?random=1",
    thumbnail: "https://picsum.photos/300/500?random=1",
    video: "https://content.acetians.in/uploads/video2.mp4",
  },
  {
    id: 9,
    user: "Ivy Nguyen",
    avatar: "https://picsum.photos/20/20?random=2",
    thumbnail: "https://picsum.photos/300/500?random=2",
    video: "https://content.acetians.in/uploads/VID-20250310-WA0020.mp4",
  },
  {
    id: 10,
    user:   "Jack Wilson",
    avatar: "https://picsum.photos/20/20?random=1",
    thumbnail: "https://picsum.photos/300/500?random=1",
    video: "https://content.acetians.in/uploads/VID-20250310-WA0021.mp4",
  },
  {
    id: 11,
    user:  "Karen Taylor",
    avatar: "https://picsum.photos/20/20?random=1",
    thumbnail: "https://picsum.photos/300/500?random=1",
    video: "https://content.acetians.in/uploads/VID-20250310-WA0023.mp4",
  },
  {
    id: 12,
    user: "Leo Anderson",
    avatar: "https://picsum.photos/20/20?random=2",
    thumbnail: "https://picsum.photos/300/500?random=2",
    video: "https://content.acetians.in/uploads/video3.mp4",
  },
];


const ReelsScroller = ({ size = "small", limit = 0 }) => {
  const [reelsData, setReelsData] = useState(initialReelsData);

  const appState = useSelector((state:any)=>state.auth);
  const userState = useSelector((state:any)=>state.auth.userInfo);
 

  const [postText, setPostText] = useState("");
  const [media, setMedia] = useState<{
    type: "image" | "video";
    url: string;
  } | null>(null);
  const [showEmojiSection, setShowEmojiSection] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedStatus, setSelectedStatus] = useState<number | null>(null);
  const [addstatus, setaddstatus] = useState(false);

  const handleMediaUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const mediaUrl = URL.createObjectURL(file);
      if (file.type.startsWith("image/")) {
        setMedia({ type: "image", url: mediaUrl });
      } else if (file.type.startsWith("video/")) {
        setMedia({ type: "video", url: mediaUrl });
      }
    }
  };

  const handleRemoveMedia = () => {
    setMedia(null);
  };

  const handlePostSubmit = () => {
    if (!postText.trim() && !media) return;

    const newStatus = {
      id: reelsData.length + 1,
      user: "John Doe",
      avatar: "https://picsum.photos/300/500?random=1",
      thumbnail: media?.url || "https://picsum.photos/300/500?random=1",
      video: media?.type === "video" ? media.url : "",
    };

    setReelsData((prev) => [...prev, newStatus]);

    setPostText("");
    setMedia(null);
    setaddstatus(false);
  };

  const handleNext = () => {
    if (selectedStatus !== null && selectedStatus < reelsData.length - 1) {
      setSelectedStatus(selectedStatus + 1);
    }
  };

  const handlePrevious = () => {
    if (selectedStatus !== null && selectedStatus > 0) {
      setSelectedStatus(selectedStatus - 1);
    }
  };

  const closeOverlay = () => {
    setSelectedStatus(null);
  };

  return (
    <>
      <div className=" bg-white rounded-lg p-2">
        <h3 className="text-lg font-semibold mb-2 px-2">Status</h3>
        <div className="flex space-x-3 overflow-x-auto no-scrollbar px-2 pb-1">
          <div className="flex gap-2">
            {appState.user==null ?<> <ReelCardSkeletal/></>:
            <div
            onClick={() => setaddstatus(!addstatus)}
            className={`relative ${
              limit !== 0 ? "h-100 w-60" : "h-40 w-24"
            } rounded-lg overflow-hidden cursor-pointer`}
          >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            {userState.profilePhoto==undefined?<NameAvatar name={userState.name} size={100} />:
            <Image
              width={100}
              height={100}
              src={userState.profilePhoto}
              alt="hello"
              className="w-full h-full object-cover"
            />}
            <div className="absolute flex flex-col justify-center align-center items-center top-[60%] left-[10%] text-white rounded-full">
              <MdAddCircleOutline
                onClick={() => setaddstatus(!addstatus)}
                className="text-white hover:text-gray-800 text-[30px]"
              />
              <p className="text-[12px]">Add Status</p>
            </div>
          </div>
            }
             
             
          </div>
        </div>

        {selectedStatus !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 gap-10">
            <div>
              <button
                onClick={handlePrevious}
                className="ml-5 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 z-50"
                disabled={selectedStatus === 0}
              >
                <FaAngleLeft className="text-[25px]" />
              </button>
            </div>

            <div className="flex flex-col flex">
              <div className="flex p-2 w-[350px] absolute gap-2 bg-[#000000ba] items-center">
                <div className="w-12 h-12 border-2 border-blue-500 rounded-full">
                  <Image
                    width={100}
                    height={100}
                    src={reelsData[selectedStatus].avatar}
                    alt={reelsData[selectedStatus].user}
                    className="w-full h-full rounded-full"
                  />
                </div>

                <div>
                  <h3 className="text-white text-lg font-semibold">
                    {reelsData[selectedStatus].user}
                  </h3>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>

              <div className="w-[350px] h-[550px]">
                {reelsData[selectedStatus].video ? (
                  <video
                    autoPlay
                    className="w-[600px] h-full object-cover"
                    src={reelsData[selectedStatus].video}
                  />
                ) : (
                  <Image
                    width={300}
                    height={500}
                    src={reelsData[selectedStatus].thumbnail}
                    alt={reelsData[selectedStatus].user}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>

            <div>
              <button
                onClick={handleNext}
                className="mr-5 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 z-50"
                disabled={selectedStatus === reelsData.length - 1}
              >
                <FaAngleRight className="text-[25px]" />
              </button>
              <button
                onClick={closeOverlay}
                className="absolute top-4 right-4 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 z-50"
              >
                <IoClose className="text-[30px]" />
              </button>
            </div>
          </div>
        )}
      </div>

      {addstatus && (
        <div className="fixed inset-0 z-[99] flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white shadow-[0px_0px_16px_0px_rgba(0,_0,_0,_0.1)] flex gap-2 flex-col py-5 rounded-lg w-[40vw] h-[90vh]">
            <div className="flex px-4 flex-row items-center border-b-[1px] border-gray pb-2 justify-between">
              <h2 className="text-lg font-bold">Add Status</h2>
              <button
                className="flex justify-center items-center rounded-[50%] p-2 bg-gray-300"
                onClick={() => setaddstatus(!addstatus)}
              >
                <IoClose />
              </button>
            </div>

            <div className="flex px-4 items-center space-x-3">
              <Image
                width={10}
                height={10}
                src="https://randomuser.me/api/portraits/men/69.jpg"
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-gray-800">John Doe</h3>
                <p className="text-xs text-gray-500">Only For Me</p>
              </div>
            </div>

            <div className="overflow-y-auto mx-4 mt-2">
              <textarea
                className="w-full py-2 border-none rounded-md focus:border-none focus:outline-none"
                rows={3}
                placeholder="What's on your mind?"
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
              ></textarea>

              {showEmojiSection ? (
                <div className="p-2 border-[1px] border-gray mt-2 rounded-[12px]">
                  <EmojiPicker
                    onEmojiClick={(emojiObject) =>
                      setPostText((prevText) => prevText + emojiObject.emoji)
                    }
                    height={300}
                    width="100%"
                    searchDisabled={true}
                  />
                </div>
              ) : (
                <div className="overflow-y-auto p-2 border-[1px] border-gray mt-2 rounded-[12px]">
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="flex justify-center align-center flex-col rounded-[10px] bg-gray-100 h-[40vh] relative"
                  >
                    {media ? (
                      <div className="w-full h-full relative">
                        <button
                          className="absolute top-2 right-2 z-10 p-1 bg-white rounded-full shadow-md hover:bg-gray-100"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemoveMedia();
                          }}
                        >
                          <IoClose className="text-lg text-gray-700" />
                        </button>

                        {media.type === "image" ? (
                          <Image
                            width={100}
                            height={100}
                            src={media.url}
                            alt="Preview"
                            className="w-full h-full object-cover rounded-md"
                          />
                        ) : (
                          <video
                            controls
                            className="w-full h-full object-cover rounded-md"
                          >
                            <source src={media.url} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        )}
                      </div>
                    ) : (
                      <div className="flex flex-col justify-center items-center">
                        <MdNoteAdd className="text-[30px]" />
                        <h2>Add Photos/Videos</h2>
                      </div>
                    )}

                    <input
                      type="file"
                      accept="image/*, video/*"
                      onChange={handleMediaUpload}
                      className="hidden"
                      ref={fileInputRef}
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="flex mx-4 justify-between items-center space-x-2 mt-4">
              <div className="flex flex-row items-center gap-2">
                <button
                  className="flex justify-center items-center rounded-[50%] p-2 bg-gray-200"
                  onClick={() => setShowEmojiSection(false)}
                >
                  <Image
                                      alt="user"
                                      height={5}
                                      width={5}
                    src="https://static.xx.fbcdn.net/rsrc.php/v4/y7/r/Ivw7nhRtXyo.png"
                    className="w-5 h-5"
                  />
                </button>
                <button
                  className="flex justify-center items-center rounded-[50%] p-2 bg-gray-200"
                  onClick={() => setShowEmojiSection(true)}
                >
                  <Image
                                      alt="user"
                                      height={5}
                                      width={5}
                    src="https://static.xx.fbcdn.net/rsrc.php/v4/yd/r/Y4mYLVOhTwq.png"
                    className="w-5 h-5"
                  />
                </button>
              </div>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={handlePostSubmit}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReelsScroller;
