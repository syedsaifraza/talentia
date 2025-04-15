"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { FastAverageColor } from "fast-average-color";
import { addStatus } from "@/utils/apis/status";
import Image from "next/image";

interface PostCustomiserProp{
    closeStatusBox : ()=>void;
}

const PostCustomizer: React.FC<PostCustomiserProp> = ({closeStatusBox}) => {
  const [activeTab, setActiveTab] = useState<"image" | "text">("image");
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [dominantColor, setDominantColor] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [openStatusAdd, setOpenStatusAdd] = useState(true);
  const [background, setBackground] = useState<string>("solid:#f87171");
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [fileV, setFileV] = useState<File | null>(null);
  
  const [zoom, setZoom] = useState<number>(100);

  const extractDominantColor = async () => {
    if (imgRef.current) {
      const fac = new FastAverageColor();
      try {
        const color = await fac.getColorAsync(imgRef.current);
        setDominantColor(color.hex);
         
        console.log("Dominant color:", color.hex);
      } catch (e) { 
        console.error("Error extracting color", e);
      }
    }
  };
  
  const handlePublish = async () => {
    const formData = new FormData();
    formData.append("type", activeTab); // "image" or "text"
    formData.append("text", message);
    
    formData.append("zoom", zoom.toString());
    formData.append("dominantColor", dominantColor || "");
    if (background) formData.append("background", background);
    if (fileV) formData.append("file", fileV); // image file

    await addStatus(formData)
    closeStatusBox();
  
    
  };
  useEffect(() => {
    if (imageURL) {
      const timeout = setTimeout(() => extractDominantColor(), 500);
      return () => clearTimeout(timeout);
    }
  }, [imageURL]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileV(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageURL(reader.result as string);
        setBackground("image");
      };
      reader.readAsDataURL(file);
    }
  };

  if (!openStatusAdd) return null;

  return (
    <div className="flex bg-white min-h-screen">
      {/* Left Panel */}
      <div className="w-1/4 p-4 bg-gray-100">
        {/* Tabs */}
        <ul className="flex mb-4">
          {["image", "text"].map((tab) => (
            <li
              key={tab}
              className={`p-2 rounded-sm w-1/2 text-center cursor-pointer ${
                activeTab === tab
                  ? "bg-blue-500 text-white"
                  : "bg-blue-100 text-gray-800"
              }`}
              onClick={() => setActiveTab(tab as "image" | "text")}
            >
              {tab === "image" ? "Image Story" : "Text Story"}
            </li>
          ))}
        </ul>

        {/* Message */}
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Your message
        </label>
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>

         

        {/* Background Selection */}
        {activeTab !== "image" ? (
          <ul className="mt-4">
            <li className="mb-2 text-sm font-semibold text-gray-800">
              Change Background
            </li>
            <li className="text-sm text-gray-600 grid grid-cols-4 gap-2">
              {/* Solid Colors */}
              {["#f87171", "#60a5fa", "#34d399", "#fbbf24", "#c084fc", "#f472b6"].map(
                (color) => (
                  <button
                    key={color}
                    className={`w-8 h-8 rounded-lg border-2 ${
                      background === `solid:${color}`
                        ? "border-black"
                        : "border-transparent"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => {
                      setBackground(`solid:${color}`);
                      setImageURL(null);
                    }}
                  ><p className="p-5">.</p></button>
                )
              )}
              {/* Gradients */}
              {[
                "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)",
                "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
                "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
              ].map((gradient, index) => (
                <button
                  key={index}
                  className={`w-8 h-8 rounded-lg border-2 ${
                    background === `gradient:${gradient}`
                      ? "border-black"
                      : "border-transparent"
                  }`}
                  style={{ background: gradient }}
                  onClick={() => {
                    setBackground(`gradient:${gradient}`);
                    setImageURL(null);
                  }}
                />
              ))}
            </li>
          </ul>
        ) : (
          <div className="mt-6" style={{marginBlock:'20px'}}>
            <label
              htmlFor="imgBg"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Upload Image
            </label>
            <input
              id="imgBg"
              type="file"
              accept="image/*"
              className="border-2 border-yellow-500 p-2 w-full"
              onChange={handleImageUpload}
            />
          </div>
        )}

        <button className="bg-white text-blue-500 w-full text-center font-bold p-3 border-2 border-blue-500 rounded-lg hover:border-0 hover:bg-blue-500 hover:text-white transition-300 mt-5" onClick={()=>handlePublish()}>
          Publish
        </button>
        <p className="text-gray-600 text-sm p-2">
          Note: Added status will vanish in 24 hours
        </p>
      </div>

      {/* Right Panel */}
      <div className="w-3/4 relative flex-col justify-end bg-gray-200">
      <div className="absolute top-0 right-0 p-4 z-20">
          <FaTimes
            size={20}
            className="cursor-pointer text-gray-900 hover:text-red-500"
            onClick={() => closeStatusBox()}
          />
        </div>
      <div className="bg-white shadow-sm p-6" style={{width:'400px',margin:'auto'}}>
        <p className="font-bold mb-2">Preview</p>

        {/* Preview */}
        <div
          className="transition-all duration-500 p-5 flex justify-center items-center rounded-xl shadow-xl"
          style={{
            height: "70vh",
            width: "350px",
            backgroundColor:
              background?.startsWith("solid:") && !imageURL
                ? background.split(":")[1]
                : dominantColor||"#bebebe",
            backgroundImage:
              background === "image" && imageURL
                ? `url(${imageURL})`
                : undefined,
            backgroundSize: imageURL ? `${zoom}%` : undefined,
            backgroundRepeat: imageURL ? "no-repeat" : undefined,
            backgroundPosition: imageURL ? "center center" : undefined,
            // height: "600px",
            // width: "350px",
            // background:
            //   background.startsWith("solid:") && !imageURL
            //     ? background.split(":")[1]
            //     : undefined,
            // backgroundImage:
            //   background.startsWith("gradient:") && !imageURL
            //     ? background.split(":")[1]
            //     : imageURL
            //     ? `url(${imageURL})`
            //     : undefined,
            // backgroundSize: imageURL ? `${zoom}%` : "cover",
            // backgroundColor:imageURL ?dominantColor||"#fff":undefined,
            // backgroundRepeat: imageURL ? "no-repeat" : undefined,
            
            // backgroundPosition:imageURL?"center center":undefined,
          }}
        >
          {imageURL && (
            <Image
              width={100}
              height={100}
              ref={imgRef}
              src={imageURL}
              alt="preview"
              className="hidden"
              crossOrigin="anonymous"
              onLoad={extractDominantColor}
            />
          )}

          <div className="flex items-center justify-center text-white text-xl text-center break-words max-w-[10vw]">
            <p>{message || "Preview your post here..."}</p>
          </div>
        </div>

        {/* Zoom Control */}
        {activeTab === "image" && (
          <div className="py-4 text-center" style={{margin:'auto'}}>
            <label
              htmlFor="zoom-range"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Zoom: {zoom}%
            </label>
            <input
              id="zoom-range"
              type="range"
              min={50}
              max={200}
              value={zoom}
              onChange={(e) => setZoom(parseInt(e.target.value))}
              className="w-1/2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        )}

         
      </div>
      </div>
    </div>
  );
};

export default PostCustomizer;
