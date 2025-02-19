"use client"
import { useState } from "react"; 
import DefaultAvatar from "./defaultAvatar";
import { BsCamera, BsEmojiHeartEyesFill } from "react-icons/bs";
import Image from "next/image";

const AddPost = () => {
  const [postText, setPostText] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handlePostSubmit = () => {
    if (!postText.trim() && !image) return;
    console.log("Posted:", { postText, image });
    setPostText("");
    setImage(null);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-1 mb-1">
      <div className="flex items-center space-x-3">
      <DefaultAvatar imageUrl="https://randomuser.me/api/portraits/men/69.jpg"/>
        <input
          type="text"
          placeholder="What's on your mind?"
          className="w-full border-none focus:ring-0 bg-gray-100 rounded-full px-4 py-2 text-sm"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        />
      </div>

      {image && (
        <div className="mt-3">
          <Image width={100} height={100}src={image} alt="Preview" className="w-full rounded-md" />
        </div>
      )}

      <div className="flex justify-between items-center mt-3">
        <label className="flex items-center space-x-2 cursor-pointer">
          <BsCamera className="w-5 h-5 text-blue-500"/>
          <span className="text-sm text-gray-600">Photo/Video</span>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </label>

        <label className="flex items-center space-x-2 cursor-pointer">
          <BsEmojiHeartEyesFill/>
          <span className="text-sm text-gray-600">Feeling/ Activity</span>
           
        </label>

        <button
          className="bg-blue-500 text-white text-sm px-4 py-1.5 rounded-full disabled:opacity-50"
          onClick={handlePostSubmit}
          disabled={!postText.trim() && !image}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default AddPost;
