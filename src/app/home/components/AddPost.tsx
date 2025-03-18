"use client";
import { useState, useRef } from "react";
import DefaultAvatar from "./defaultAvatar";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import Image from "next/image"; 
import { IoClose } from "react-icons/io5";
import { MdNoteAdd } from "react-icons/md";
import dynamic from "next/dynamic";

const EmojiPicker = dynamic(() => import("emoji-picker-react"), { ssr: false });


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

interface Media {
  type: "image" | "video";
  url: string;
}

interface AddPostProps {
  addPost: (newPost: Omit<PostType, "id">) => void;
}

const AddPost = ({ addPost }: AddPostProps) => {
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
    <div className="flex flex-col justify-center h-[25vh] px-[2vw] bg-white rounded-lg p-4">
      <div className="flex items-center space-x-3">
        <DefaultAvatar imageUrl="https://randomuser.me/api/portraits/men/69.jpg" />
        <input
          type="text"
          placeholder="What's on your mind?"
          className="w-full border-none focus:ring-0 bg-gray-100 rounded-full px-4 py-4 text-sm"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          onClick={() => setIsModalOpen(true)}
        />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[99] flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white shadow-[0px_0px_16px_0px_rgba(0,_0,_0,_0.1)] flex gap-2 flex-col py-5 rounded-lg w-[40vw] h-[90vh]">
            <div className="flex px-4 flex-row items-center border-b-[1px] border-gray pb-2 justify-between">
              <h2 className="text-lg">Create Post</h2>
              <button
                className="flex justify-center items-center rounded-[50%] p-2 bg-gray-300"
                onClick={() => setIsModalOpen(false)}
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
                <select className=" block font-bold text-[11px]  bg-gray-100 border-transparent  text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:focus:ring-neutral-600">
                  <option selected>Only for Me</option>
                  <option>Only Friends</option>
                  <option>EveryOne</option>
                </select>
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
                    onEmojiClick={handleEmojiClick}
                    height={300}
                    width="100%"
                    searchDisabled={true}
                  />
                </div>
              ) : (
                <div className="overflow-y-auto p-2 border-[1px] border-gray mt-2 rounded-[12px]">
                  <div
                    onClick={handleAddButtonClick}
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
                  title="Photos/Video"
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
                  title="Feeling/Activity"
                  className="flex justify-center items-center rounded-[50%] p-2 bg-gray-200"
                  onClick={handleFeelingButtonClick}
                >
                  <Image
                                      alt="user"
                                      height={10}
                                      width={10}
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

      <div className="flex justify-evenly items-center mt-5">
        <button
          className="flex items-center rounded-md justify-center hover:bg-gray-100 px-2 py-3 w-[13vw] space-x-2 cursor-pointer"
          onClick={() => {
            setIsModalOpen(true);
            setShowEmojiSection(false);
          }}
        >
          <Image
                              alt="user"
                              height={10}
                              width={10}
            src="https://static.xx.fbcdn.net/rsrc.php/v4/y7/r/Ivw7nhRtXyo.png"
            className="w-5 h-5"
          />
          <span className="text-sm text-gray-600 font-bold">Photo</span>
        </button>

        <button
          className="flex items-center justify-center hover:bg-gray-100 px-2 py-3 w-[13vw] rounded-md space-x-2 cursor-pointer"
          onClick={() => {
            setIsModalOpen(true);
            setShowEmojiSection(false);
          }}
        >
          <Image
                              alt="user"
                              height={10}
                              width={10}
            src="https://static.xx.fbcdn.net/rsrc.php/v4/yr/r/c0dWho49-X3.png"
            className="w-5 h-5"
          />
          <span className="text-sm text-gray-600 font-bold">Video</span>
        </button>

        <button
          className="flex items-center rounded-md justify-center hover:bg-gray-100 px-2 py-3 w-[13vw] space-x-2 cursor-pointer"
          onClick={() => {
            setIsModalOpen(true);
            handleFeelingButtonClick();
          }}
        >
          <BsEmojiHeartEyesFill />
          <span className="text-sm text-gray-600 font-bold">
            Feeling/Activity
          </span>
        </button>
      </div>
    </div>
  );
};

export default AddPost;
