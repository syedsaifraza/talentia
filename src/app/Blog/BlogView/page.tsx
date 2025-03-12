"use client";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { MdOutlineArticle } from "react-icons/md";
import { MdNoteAdd } from "react-icons/md";
import Image from "next/image";
import { IoMdCamera } from "react-icons/io";
import { useRef } from "react";
import dynamic from "next/dynamic";

interface Media {
  type: "image" | "video";
  url: string;
}

export default function BlogPage() {
  const [media, setMedia] = useState<Media | null>(null);

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

  const handleAddButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <div>
        <ul className="flex flex-col gap-1 bg-white rounded-[12px]">
          <li className="flex flex-row gap-2 items-center bg-gray-200 py-6 px-3 rounded-t-[12px]">
            <MdOutlineArticle className="size-[30]" />
            <p className="font-bold">Write New Article</p>
          </li>
          <li className="p-3 flex flex-col gap-4 ">
           
            <label className="flex flex-row  gap-[135px] ">
              <p className="text-black font-[500]">Title</p>
              <input
                className="py-2 px-1 border w-full border-gray-200"
                type="text"
              />
            </label>
            <label className="flex flex-row  gap-[107px] ">
            <p className="text-black font-[500]">Contant</p>
              <textarea
                className="py-2 px-1 border w-full border-gray-200 resize-y min-h-[40vh]"
                placeholder="Write your content here..."
              />
            </label>
            <label className="flex flex-row  gap-[125px] ">
            <p className="text-black font-[500]">Cover</p>
              <div
                onClick={handleAddButtonClick}
                className="flex justify-center align-center flex-col rounded-[10px]  w-[15vw] border border-blue-500 h-[30vh] relative"
              >
                {media ? (
                  <div className=" relative">
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
                  <div className="flex  flex-col justify-center items-center">
                    <IoMdCamera className="text-black text-[30px]" />
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
            </label>
            <label className="flex flex-row   gap-[100px] ">
            <p className="text-black font-[500]">Category</p>
              <select className=" w-full border text-[500] text-black py-3 px-1 border-gray-200">
                <option className="text-black" selected>
                  Select Category
                </option>
                <option className="text-black">Only Friends</option>
                <option className="text-black">EveryOne</option>
              </select>
            </label>
            <label className="flex flex-row  gap-[134px] ">
            <p className="text-black font-[500]">Tags</p>
              <input className="py-2 px-1 border w-full border-gray-200" />
            </label>
            <label className="flex flex-row  gap-[80px] ">
            <p className="text-black font-[500]">Enable Tips</p>
              <input type="checkbox" />
            </label>
          </li>
          <li className="flex flex-row gap-2 items-center bg-gray-200 py-6 px-3 rounded-b-[12px]">
            <button className="bg-blue-800 text-white font-bold px-4 py-2 rounded-[5px]">
              Publish
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}