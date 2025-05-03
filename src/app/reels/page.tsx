"use client"
import React, { useState, useRef, useEffect } from "react";
import { FaTimes, FaUpload, FaVideo } from "react-icons/fa";
import { FastAverageColor } from "fast-average-color";
import { addReels } from "@/utils/apis/reels";
import Image from "next/image";

interface PostCustomiserProp {
  closeStatusBox: () => void;
}

const ReelsPage = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const inputVideoRef = useRef<HTMLInputElement | null>(null);
  const selectedVideoRef = useRef<HTMLVideoElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [dominantColor, setDominantColor] = useState<string | null>(null);
  const [message, setMessage] = useState<string>();
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [fileV, setFileV] = useState<File | null>(null);
  const [zoom, setZoom] = useState<number>(100);
  const [isVideo, setIsVideo] = useState<boolean>(false);

  const extractDominantColor = async () => {
    if (selectedVideoRef.current) {
      const fac = new FastAverageColor();
      try {
        const color = await fac.getColorAsync(selectedVideoRef.current);
        setDominantColor(color.hex);
        console.log("Dominant color:", color.hex);
      } catch (e) {
        console.error("Error extracting color", e);
      }
    }
  };

  const handleVideoSelect = () => {
    inputVideoRef.current?.click();
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileV(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageURL(reader.result as string);
        setIsVideo(file.type.startsWith("video/"));
      };
      reader.readAsDataURL(file);
    }
  };
  const [submitting,setSubmitting]=useState(false);
  const handlePublish = async () => {
    const formData = new FormData();
    formData.append("type", "image");
    formData.append("text", message!);
    formData.append("zoom", zoom.toString());
    formData.append("dominantColor", dominantColor || "");
    if (fileV) formData.append("file", fileV);
    setSubmitting(true)
    await addReels(formData);
    setSubmitting(false)
    window.location.href="/home";
    // closeStatusBox();
  };

  useEffect(() => {
    if (imageURL && !isVideo) {
      const timeout = setTimeout(() => extractDominantColor(), 500);
      return () => clearTimeout(timeout);
    }
  }, [imageURL, isVideo]);

  if (!fileV && step !== 1) setStep(1);

  return (
    <>
    {submitting==true && <div className="bg-white" style={{width:'100vw',height:'100vh',padding:'20px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <Image alt="Uploading Gif" src={"https://content.acetians.in/uploads/uploading.gif"} width={50} height={100} style={{height:'200px',width:"auto",  margin:'auto'}} />
      
      Submitting Please Wait
    </div>}
    <div className="flex bg-white min-h-screen">
      {/* Left Panel */}
      <div className="w-1/4 p-4 bg-gray-100 relative">
        <p className="font-semibold border-b-2 border-gray-400">Create Reel</p>

        <h1 className="font-bold mt-4 text-lg">
          {step === 1 ? "Select Video" : step === 2 ? "Trim Video" : "Add Caption to Your Video"}
        </h1>

        {step === 1 && (
          <div
            className="flex flex-col justify-center items-center h-[200px] bg-gray-200 mt-2 rounded-xl"
            onClick={handleVideoSelect}
          >
            <p className="h-10 w-10 bg-gray-300 flex justify-center items-center rounded-full">
              <FaVideo color="#888" />
            </p>
            <p className="font-semibold">Add Video</p>
            <p className="text-xs">Or</p>
            <h1 className="text-sm">Drag and Drop</h1>
            <input
              type="file"
              style={{ visibility: "hidden" }}
              ref={inputVideoRef}
              accept="image/*,video/*"
              onChange={handleImageUpload}
              className="mt-2"
            />
          </div>
        )}

        {step === 2 && (
          <div className="mt-6">
            <p className="text-sm text-gray-600">(Trimming is currently Disabled)</p>
            <p className="text-sm text-gray-500">Dear Users trimming is currently disabled </p>
          </div>
        )}

        {step === 3 && (
          <div className="mt-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">Caption</label>
            <textarea 
            value={message}
            rows={5}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-gray-100 border-2 border-gray-200 rounded-xl w-full focus:outline-none p-2" />
             
          </div>
        )}

        <div className="absolute bottom-0 py-5 left-0 right-0">
          <div className="px-4">
            <button
              type="button"
              onClick={() => (step === 3 ? handlePublish() : setStep((prev) => (prev + 1) as 2 | 3))}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 w-full"
            >
              {step === 3 ? "Upload" : "Next"}
            </button>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-3/4 relative flex-col justify-end bg-gray-200">
        <div className="absolute top-0 right-0 p-4 z-20">
          <FaTimes
            size={20}
            className="cursor-pointer text-gray-900 hover:text-red-500"
            onClick={() => window.location.href="/home"}
          />
        </div>
        <div className="bg-white shadow-sm py-5 px-1" style={{ width: "350px", margin: "auto",textAlign:'center' }}>
          <p className="font-bold mb-2">Preview</p>

          <div
            className="transition-all duration-500 flex justify-center items-center rounded-xl shadow-xl m-auto"
            style={{
              minHeight: "80vh",
              width: "300px",
              backgroundColor: dominantColor || "#bebebe",
              backgroundImage: imageURL && !isVideo ? `url(${imageURL})` : undefined,
              backgroundSize: imageURL && !isVideo ? `${zoom}%` : undefined,
              backgroundRepeat: imageURL && !isVideo ? "no-repeat" : undefined,
              backgroundPosition: imageURL && !isVideo ? "center center" : undefined,
            }}
          >
            {imageURL && !isVideo && (
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

            {imageURL && isVideo && (
              <video controls className="w-full h-auto object-cover" src={imageURL} />
            )}

            {!imageURL && (
              <div className="flex items-center justify-center text-white text-xl text-center break-words max-w-[10vw]">
                <p>{message || "Preview your post here..."}</p>
              </div>
            )}
          </div>

          {/* Zoom Control */}
          {imageURL && !isVideo && (
            <div className="py-4 text-center">
              <label htmlFor="zoom-range" className="block mb-2 text-sm font-medium text-gray-900">
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
    </>
  );
};

export default ReelsPage;
