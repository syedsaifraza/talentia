"use client";
import { useState, useRef } from "react";
import DefaultAvatar from "./defaultAvatar";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { MdNoteAdd } from "react-icons/md";
import dynamic from "next/dynamic";
import { addPost } from "@/utils/apis/post";
import { useSelector } from "react-redux";
import { Media } from "@/lib/interfaces/types";
const EmojiPicker = dynamic(() => import("emoji-picker-react"), { ssr: false });



const AddPost = ({addPost}:{addPost:any}) => {
  const [postText, setPostText] = useState("");
  const [media, setMedia] = useState<Media | null>(null);
  const [fileV, setFileV] = useState<File | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showEmojiSection, setShowEmojiSection] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
   
  const appState = useSelector((state:any)=>state.auth);
  const handleMediaUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setFileV(file);
      const mediaUrl = URL.createObjectURL(file);
      setMedia({ type: file.type.startsWith("image/") ? "image" : "video", url: mediaUrl });
    }
  };

  const handleRemoveMedia = () => {
    setMedia(null);
    setFileV(null);
  };

  const handlePostSubmit = async () => {
    if (!postText.trim() && !fileV) return;

    const formData = new FormData();
    formData.append("text", postText);
    formData.append("timestamp", new Date().toISOString());
    if (fileV) formData.append("file", fileV);

    try {
      await addPost(formData);
      setPostText("");
      setMedia(null);
      setFileV(null);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error posting:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center h-[25vh] px-[2vw] bg-white rounded-lg p-4">
      <div className="flex items-center space-x-3">
        <DefaultAvatar />
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
          <div className="bg-white shadow-lg flex flex-col py-5 rounded-lg w-[40vw] h-[90vh]">
            <div className="flex px-4 justify-between items-center border-b pb-2">
              <h2 className="text-lg">Create Post</h2>
              <button className="p-2 bg-gray-300 rounded-full" onClick={() => setIsModalOpen(false)}>
                <IoClose />
              </button>
            </div>

            <div className="flex px-4 items-center space-x-3">
              <DefaultAvatar size={40}/>
              <div>
                <h3 className="font-semibold">{appState.user.name}</h3>
                <select className="text-sm bg-gray-100 border-none">
                  <option>Everyone</option>
                  <option>Connections</option>
                  <option>Followers</option>
                  <option>Only Me</option>
                </select>
              </div>
            </div>

            <textarea
              className="w-full px-4 py-2 border-none rounded-md mt-3"
              rows={3}
              placeholder="What's on your mind?"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
            ></textarea>

            {showEmojiSection && (
              <div className="p-2 border mt-2 rounded-lg">
                <EmojiPicker onEmojiClick={(emojiObject) => setPostText(postText + emojiObject.emoji)} />
              </div>
            )}

            {media && (
              <div className="relative mt-2 px-4">
                <button className="absolute top-2 right-2 p-1 bg-white rounded-full" onClick={handleRemoveMedia}>
                  <IoClose />
                </button>
                {media.type === "image" ? (
                  <Image width={200} height={200} src={media.url} alt="Preview" className="rounded-md" />
                ) : (
                  <video controls className="rounded-md w-full">
                    <source src={media.url} type="video/mp4" />
                  </video>
                )}
              </div>
            )}

            <input type="file" accept="image/*,video/*" ref={fileInputRef} className="hidden" onChange={handleMediaUpload} />

            <div className="flex justify-between items-center mt-4 px-4">
              <div className="flex space-x-2">
                <button className="p-2 bg-gray-200 rounded-full" onClick={() => fileInputRef.current?.click()}>
                  <MdNoteAdd />
                </button>
                <button className="p-2 bg-gray-200 rounded-full" onClick={() => setShowEmojiSection(!showEmojiSection)}>
                  <BsEmojiHeartEyesFill />
                </button>
              </div>
              <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handlePostSubmit}>
                Post
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-evenly items-center mt-5">
        <button className="flex items-center justify-center px-2 py-3 w-[13vw] rounded-md space-x-2 hover:bg-gray-100" onClick={() => setIsModalOpen(true)}>
          <Image width={20} height={20} src="https://static.xx.fbcdn.net/rsrc.php/v4/y7/r/Ivw7nhRtXyo.png" alt="Photo Icon" />
          <span className="text-sm text-gray-600 font-bold">Photo</span>
        </button>

        <button className="flex items-center justify-center px-2 py-3 w-[13vw] rounded-md space-x-2 hover:bg-gray-100" onClick={() => setIsModalOpen(true)}>
          <Image width={20} height={20} src="https://static.xx.fbcdn.net/rsrc.php/v4/yr/r/c0dWho49-X3.png" alt="Video Icon" />
          <span className="text-sm text-gray-600 font-bold">Video</span>
        </button>

        <button className="flex items-center justify-center px-2 py-3 w-[13vw] rounded-md space-x-2 hover:bg-gray-100" onClick={() => setIsModalOpen(true)}>
          <BsEmojiHeartEyesFill />
          <span className="text-sm text-gray-600 font-bold">Feeling/Activity</span>
        </button>
      </div>
    </div>
  );
};

export default AddPost;
