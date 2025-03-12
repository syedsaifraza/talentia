"use client";
import { useState, useRef } from "react";
import DefaultAvatar from "@/app/home/components/defaultAvatar";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import Image from "next/image";
import { AiOutlineFileAdd } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { MdNoteAdd } from "react-icons/md";
import dynamic from "next/dynamic";
import { IoIosPeople } from "react-icons/io";

const EmojiPicker = dynamic(() => import("emoji-picker-react"), { ssr: false });

interface Media {
  type: "image" | "video";
  url: string;
}

interface AddPostProps {
  addPost: (post: { text: string; media: Media | null }) => void;
}

export default function JobsPage() {
  const [postText, setPostText] = useState("");
  const [media, setMedia] = useState<Media | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showEmojiSection, setShowEmojiSection] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

    const newPost = {
      text: postText,
      media,
      user: {
        name: "John Doe",
        avatar: "https://randomuser.me/api/portraits/men/69.jpg",
      },
      timestamp: new Date().toISOString(),
    };

    addPost(newPost);
    setPostText("");
    setMedia(null);
  };

  const handleAddButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFeelingButtonClick = () => {
    setShowEmojiSection((prev) => !prev);
  };

  const handleEmojiClick = (emojiObject: { emoji: string }) => {
    setPostText((prevText) => prevText + emojiObject.emoji);
  };

  return (
    <ul className="flex flex-col gap-4 ">
      <li>
        <button
          className="bg-blue-600  rounded-[10px] text-white font-bold py-2 px-3 hover:bg-blue-700"
          onClick={() => {
            setIsModalOpen(true);
            setShowEmojiSection(false);
          }}
        >
          Create Events
        </button>
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

      {isModalOpen && (
        <div className="fixed inset-0 z-[99] flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white shadow-[0px_0px_16px_0px_rgba(0,_0,_0,_0.1)] flex  flex-col py-5 rounded-lg w-[40vw] h-[90vh]">

            
            <div className="flex px-4 flex-row items-center border-b-[1px] border-gray pb-2 justify-between">
              <h2 className="text-lg">Create event</h2>
              <button
                className="flex justify-center items-center rounded-[50%] p-2 bg-gray-300"
                onClick={() => setIsModalOpen(false)}
              >
                <IoClose />
              </button>
            </div>

            <div className="overflow-y-auto mb-2 ">
              <div className="overflow-y-auto border-gray rounded-[12px]">
                <div
                  onClick={handleAddButtonClick}
                  className="flex justify-center align-center flex-col  bg-gray-100 h-[40vh] relative"
                >
                  {media ? (
                    <div className="w-full h-full relative">
                      <button
                        className="absolute top-5 right-2 z-10 p-1 bg-white rounded-full shadow-md hover:bg-gray-100"
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
                    <div className="flex flex-col justify-center items-center relative top-[90px] left-[135px]">
                      {/* <MdNoteAdd className="text-[30px]" /> */}
                      <h2 className="bg-blue-500">Add</h2>
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
                <select className=" block font-bold text-[11px]  bg-gray-100 border-transparent  text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:focus:ring-neutral-600">
                  <option selected>Only for Me</option>
                  <option>Only Friends</option>
                  <option>EveryOne</option>
                </select>
              </div>
            </div>

            <div className="flex mx-4 justify-between items-center space-x-2 mt-4">

              <div className="flex flex-row items-center gap-2">
                <button
                  title="Photos/Video"
                  className="flex justify-center items-center rounded-[50%] p-2 bg-gray-200"
                  onClick={() => setShowEmojiSection(false)}
                >
                  <img
                    src="https://static.xx.fbcdn.net/rsrc.php/v4/y7/r/Ivw7nhRtXyo.png"
                    className="w-5 h-5"
                  />
                </button>
                <button
                  title="Feeling/Activity"
                  className="flex justify-center items-center rounded-[50%] p-2 bg-gray-200"
                  onClick={handleFeelingButtonClick}
                >
                  <img
                    src="https://static.xx.fbcdn.net/rsrc.php/v4/yd/r/Y4mYLVOhTwq.png"
                    className="w-5 h-5"
                  />
                </button>
              </div>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => {
                  handlePostSubmit();
                  setIsModalOpen(false);
                }}
              >
                Post
              </button>
            </div>


          </div>
        </div>
      )}
    </ul>
  );
}
