"use client"
import React, { useState, useRef, useEffect } from "react";
import { FaTimes, FaVideo } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { FastAverageColor } from "fast-average-color";
import { addReels } from "@/utils/apis/reels";
import Image from "next/image";
import { handlePostRevalidation } from "@/component/components/postRevalidation";
import Link from "next/link";

const ReelsPage = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const inputVideoRef = useRef<HTMLInputElement | null>(null);
  const selectedVideoRef = useRef<HTMLVideoElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [dominantColor, setDominantColor] = useState<string>("#000000");
  const [message, setMessage] = useState<string>("");
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [fileV, setFileV] = useState<File | null>(null);
  const [thumbnailFile,setThumbnailFile]=useState<File|null>(null);
  const [zoom, setZoom] = useState<number>(100);
  const [isVideo, setIsVideo] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const [thumbnl,setThumbnl]=useState<string|null>(null);

  const extractDominantColor = async () => {
    if (selectedVideoRef.current) {
      const fac = new FastAverageColor();
      try {
        const color = await fac.getColorAsync(selectedVideoRef.current);
        setDominantColor(color.hex);
      } catch (e) {
        console.error("Error extracting color", e);
      }
    }
  };

  const handleVideoSelect = () => inputVideoRef.current?.click();

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };
 
  const handleFile = (file: File) => {
    setFileV(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageURL(reader.result as string);
      setIsVideo(file.type.startsWith("video/"));
    };
    reader.readAsDataURL(file);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
    if(file) generateThumbnails(file)
  };
  
  const [thumbnails,setThumbnails]=useState<File[]>([]);
  const generateThumbnails = async (file: File) => {
    const url = URL.createObjectURL(file);
    const video = document.createElement('video');
    video.src = url;
    video.crossOrigin = 'anonymous';
    video.preload = 'auto';

    // Wait for metadata to load to get video duration
    await new Promise<void>((resolve) => {
      video.onloadedmetadata = () => resolve();
    });

    const duration = video.duration;
    const captureTimes = [0, 0.50, 1].map(p => p * duration);
    const thumbnailsArray: File[] = [];

    for (const time of captureTimes) {
      await new Promise<void>((resolve) => {
        video.currentTime = time;
        video.onseeked = () => {
          const canvas = document.createElement('canvas');
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            const imageData = canvas.toDataURL('image/png'); 

// Convert base64 to Blob
const byteString = atob(imageData.split(',')[1]);
const mimeString = imageData.split(',')[0].split(':')[1].split(';')[0];
const ab = new ArrayBuffer(byteString.length);
const ia = new Uint8Array(ab);
for (let i = 0; i < byteString.length; i++) {
  ia[i] = byteString.charCodeAt(i);
}
const blob = new Blob([ab], { type: mimeString });

// Create File object
const file = new File([blob], `thumbnail-${time}.png`, { type: mimeString });
thumbnailsArray.push(file);
          }
          resolve();
        };
      });
    }

    setThumbnails(thumbnailsArray);
    URL.revokeObjectURL(url);
  };
  const handlePublish = async () => {
    if (!fileV) return;

    
    const formData = new FormData();
    formData.append("type", isVideo ? "video" : "image");
    formData.append("text", message);
    formData.append("zoom", zoom.toString());
    formData.append("dominantColor", dominantColor);
    formData.append("file", fileV);
    formData.append("thumbnail",thumbnailFile!);
    
    setSubmitting(true);
    await addReels(formData);
    // window.location.href = "/reels";
    handlePostRevalidation()
  };

  useEffect(() => {
    if (imageURL && !isVideo) {
      const timeout = setTimeout(() => extractDominantColor(), 500);
      return () => clearTimeout(timeout);
    }
  }, [imageURL, isVideo]);

  if (!fileV && step !== 1) setStep(1);

  return (
    <div className="fixed inset-0 bg-gray-50 overflow-hidden ">
      {/* Loading Overlay */}
      {submitting && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white bg-opacity-90">
          <div className="w-32 h-32 relative">
            <Image 
              src="https://content.acetians.in/uploads/uploading.gif" 
              alt="Uploading" 
              fill
              className="object-contain"
            />
          </div>
          <p className="mt-4 text-lg font-medium">Submitting Your Reel...</p>
        </div>
      )}

      <div className="flex flex-col lg:flex-row h-full">
        {/* Left Panel - Controls */}
        <div className="w-full lg:w-1/4 bg-white border-r border-gray-200 p-4 flex flex-col h-full">
          <div className="flex items-center justify-between mb-6">
            <Link
            href={"/reels"} 
              // onClick={() => window.location.href = "/reels"}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <FaTimes className="text-gray-600" />
            </Link>
            <h1 className="text-xl font-bold text-gray-800">Add Reel</h1>
            <div className="w-8"></div>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-between items-center mb-8 px-4">
            {[1, 2, 3].map((stepNum) => (
              <React.Fragment key={stepNum}>
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center 
                    ${step === stepNum ? 'bg-blue-600 text-white' : 
                    step > stepNum ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'}`}
                >
                  {stepNum}
                </div>
                {stepNum < 3 && (
                  <div className={`flex-1 h-1 mx-2 ${step > stepNum ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Step Content */}
          <div className="flex-1 overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              {step === 1 ? "Select Media" : 
               step === 2 ? "Trim Options" : 
               "Add Caption"}
            </h2>

            {step === 1 && (
              <>
              <div 
                className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all
                  ${dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'}`}
                onClick={handleVideoSelect}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <div className="flex flex-col items-center justify-center h-30">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                    <FaVideo className="text-blue-600 text-xl" />
                  </div>
                  <p className="font-medium text-gray-700 mb-1">Upload Video/Image</p>
                  <p className="text-sm text-gray-500">Drag & drop or click to browse</p>
                  <p className="text-xs text-gray-400 mt-2">Supports MP4, MOV, JPG, PNG</p>
                </div>
                
                <input
                  type="file"
                  ref={inputVideoRef}
                  accept="image/*,video/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>
              <p className="text-xs text-gray mt-2">Select thumbnail</p>
                <div className="flex justify-between"> 
                    {thumbnails.map((thm:File,key)=><Image className={thm==thumbnailFile?`border-4 border-solid border-indigo-500`:``} onClick={()=>setThumbnailFile(thm)} key={key} src={URL.createObjectURL(thm)} width={80} height={160} alt={key+"a"} />)}
                </div>
</>
            )}
 
            {step === 2 && (
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium text-blue-800 mb-2">Trim Options</h3>
                <p className="text-sm text-gray-600">
                  Video trimming functionality is coming soon! You can still proceed to add captions.
                </p>
              </div>
            )}

            {step === 3 && (
              <div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Caption</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Add a catchy caption..."
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <p className="text-xs text-gray-500 mt-1">{message.length}/220 characters</p>
                </div>

                {!isVideo && imageURL && (
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Zoom: {zoom}%
                    </label>
                    <input
                      type="range"
                      min={50}
                      max={200}
                      value={zoom}
                      onChange={(e) => setZoom(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="pt-4 border-t border-gray-200">
            {step > 1 && (
              <button
                onClick={() => setStep(prev => (prev - 1) as 1 | 2)}
                className="w-full mb-2 py-2.5 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-lg transition-colors"
              >
                Back
              </button>
            )}
            <button
              onClick={() => step === 3 ? handlePublish() : setStep(prev => (prev + 1) as 2 | 3)}
              disabled={!fileV}
              className={`w-full py-2.5 px-4 font-medium rounded-lg transition-colors flex items-center justify-center
                ${fileV ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
            >
              {step === 3 ? (
                <>
                  <FiSend className="mr-2" />
                  Publish Reel
                </>
              ) : (
                "Next"
              )}
            </button>
          </div>
        </div>

        {/* Right Panel - Preview */}
        <div className="flex-1 bg-gray-700 flex items-center justify-center p-4 relative overflow-hidden">
          <div className="w-full h-full max-w-md flex items-center justify-center">
            <div
              className="relative overflow-hidden rounded-xl shadow-lg mx-auto transition-all duration-300"
              style={{
                width: '100%',
                maxWidth: '100%',
                height: '100%',
                maxHeight: '90vh',
                aspectRatio: '9/16',
                backgroundColor: dominantColor,
                backgroundImage: imageURL && !isVideo ? `url(${imageURL})` : undefined,
                backgroundSize: imageURL && !isVideo ? `${zoom}%` : undefined,
                backgroundRepeat: imageURL && !isVideo ? 'no-repeat' : undefined,
                backgroundPosition: imageURL && !isVideo ? 'center center' : undefined,
              }}
            >
              {imageURL && !isVideo && (
                <Image
                  ref={imgRef}
                  src={imageURL}
                  alt="preview"
                  fill
                  className="hidden"
                  crossOrigin="anonymous"
                  onLoad={extractDominantColor}
                />
              )}

              {imageURL && isVideo && (
                <video 
                  controls 
                  ref={selectedVideoRef}
                  className="w-full h-full object-contain"
                  src={imageURL}
                />
              )}

              {!imageURL && (
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <p>Preview will appear here</p>
                </div>
              )}

              {message && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-white text-center font-medium">{message}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReelsPage;