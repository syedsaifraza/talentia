"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { FaTimes, FaImage, FaFont, FaUpload } from "react-icons/fa"
import { FastAverageColor } from "fast-average-color"
import Image from "next/image"

// Mock addStatus function
const addStatus = async (formData: FormData) => {
  console.log("Publishing status:", Object.fromEntries(formData.entries()))
  return new Promise((resolve) => setTimeout(resolve, 1500))
}

interface PostCustomiserProp {
  closeStatusBox: () => void
}

const PostCustomizer: React.FC<PostCustomiserProp> = ({ closeStatusBox }) => {
  const [activeTab, setActiveTab] = useState<"image" | "text">("image")
  const imgRef = useRef<HTMLImageElement | null>(null)
  const [dominantColor, setDominantColor] = useState<string>("#f87171")
  const [message, setMessage] = useState("")
  const [background, setBackground] = useState<string>("solid:#f87171")
  const [imageURL, setImageURL] = useState<string | null>(null)
  const [fileV, setFileV] = useState<File | null>(null)
  const [zoom, setZoom] = useState<number>(100)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [dragActive, setDragActive] = useState(false)

  const extractDominantColor = async () => {
    if (imgRef.current) {
      const fac = new FastAverageColor()
      try {
        const color = await fac.getColorAsync(imgRef.current)
        setDominantColor(color.hex)
      } catch (e) {
        console.error("Error extracting color", e)
      }
    }
  }

  const handlePublish = async () => {
    setIsSubmitting(true)
    try {
      const formData = new FormData()
      formData.append("type", activeTab)
      formData.append("text", message)
      formData.append("zoom", zoom.toString())
      formData.append("dominantColor", dominantColor)
      if (background) formData.append("background", background)
      if (fileV) formData.append("file", fileV)
      await addStatus(formData)
      closeStatusBox()
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFileV(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImageURL(reader.result as string)
        setBackground("image")
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      setFileV(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImageURL(reader.result as string)
        setBackground("image")
      }
      reader.readAsDataURL(file)
    }
  }

  useEffect(() => {
    if (imageURL) {
      const timeout = setTimeout(() => extractDominantColor(), 500)
      return () => clearTimeout(timeout)
    }
  }, [imageURL])

  const solidColors = ["#f87171", "#60a5fa", "#34d399", "#fbbf24", "#c084fc", "#f472b6"]
  const gradients = [
    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)",
    "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
  ]

  const previewBackgroundStyle = () => {
    if (activeTab === "image" && imageURL) {
      return {
        backgroundImage: `url(${imageURL})`,
        backgroundSize: `${zoom}%`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundColor: dominantColor || "#bebebe",
      }
    } else if (background.startsWith("solid:")) {
      return {
        backgroundColor: background.split(":")[1],
      }
    } else if (background.startsWith("gradient:")) {
      return {
        background: background.split(":")[1],
      }
    }
    return { backgroundColor: "#bebebe" }
  }

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-hidden flex">
      {/* Loading Overlay */}
      {isSubmitting && (
        <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
          <div className="text-center flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="mt-4 text-lg font-medium text-gray-800">Publishing your story...</p>
          </div>
        </div>
      )}

      {/* Left Panel - Controls (300px fixed width) */}
      <div className="w-[300px] p-6 bg-gray-50 h-full overflow-y-auto border-r border-gray-200 flex-shrink-0">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Create Story</h1>
          <button
            onClick={closeStatusBox}
            className="p-2 rounded-full hover:bg-gray-200 transition-colors"
            aria-label="Close story creator"
          >
            <FaTimes className="h-6 w-6 text-gray-600 hover:text-red-500" />
          </button>
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <ul className="grid w-full grid-cols-2 h-12 border-b border-gray-200">
            <li
              className={`flex items-center justify-center gap-2 text-base cursor-pointer px-4 py-2 transition-colors ${
                activeTab === "image"
                  ? "border-b-2 border-blue-500 text-blue-600 font-medium"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("image")}
            >
              <FaImage className="h-5 w-5" />
              Image Story
            </li>
            <li
              className={`flex items-center justify-center gap-2 text-base cursor-pointer px-4 py-2 transition-colors ${
                activeTab === "text"
                  ? "border-b-2 border-blue-500 text-blue-600 font-medium"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("text")}
            >
              <FaFont className="h-5 w-5" />
              Text Story
            </li>
          </ul>

          {activeTab === "image" && (
            <div className="mt-6 space-y-6">
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your thoughts here..."
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 resize-none"
                />
              </div>
              <div>
                <label htmlFor="image-upload" className="block text-sm font-medium text-gray-900 mb-2">
                  Upload Image
                </label>
                <div
                  className={`flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
                    dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-blue-400"
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  onClick={() => document.getElementById("image-upload")?.click()}
                >
                  <FaUpload className="text-blue-500 text-4xl mb-3" />
                  <p className="text-sm text-gray-600">Drag & drop an image here, or click to upload</p>
                  <p className="text-xs text-gray-400 mt-1">Supports JPG, PNG, GIF</p>
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === "text" && (
            <div className="mt-6 space-y-6">
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your thoughts here..."
                  className=" w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 resize-none"
                
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-3">Change Background</label>
                <div className="grid grid-cols-4 gap-3">
                  {solidColors.map((color) => (
                    <button
                      key={color}
                      className={`w-12 h-12 rounded-lg border-2 ${
                        background === `solid:${color}` ? "border-black ring-2 ring-black" : "border-transparent"
                      } transition-all duration-200`}
                      style={{ backgroundColor: color }}
                      onClick={() => {
                        setBackground(`solid:${color}`)
                        setImageURL(null)
                      }}
                      aria-label={`Select solid color ${color}`}
                    >
                      <span className="sr-only">{"Select color " + color}</span>
                    </button>
                  ))}
                  {gradients.map((gradient, index) => (
                    <button
                      key={index}
                      className={`w-12 h-12 rounded-lg border-2 ${
                        background === `gradient:${gradient}` ? "border-black ring-2 ring-black" : "border-transparent"
                      } transition-all duration-200`}
                      style={{ background: gradient }}
                      onClick={() => {
                        setBackground(`gradient:${gradient}`)
                        setImageURL(null)
                      }}
                      aria-label={`Select gradient ${index + 1}`}
                    >
                      <span className="sr-only">{"Select gradient " + (index + 1)}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Zoom Control */}
        {activeTab === "image" && imageURL && (
          <div className="mb-6">
            <label htmlFor="zoom-range" className="block text-sm font-medium text-gray-900 mb-2">
              Zoom: {zoom}%
            </label>
            <input
              id="zoom-range"
              type="range"
              min={50}
              max={200}
              step={1}
              value={zoom}
              onChange={(e) => setZoom(Number.parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-sm [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-blue-500 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:shadow-sm"
              aria-label="Image zoom slider"
            />
          </div>
        )}

        {/* Publish Button */}
        <button
          onClick={handlePublish}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg transition-colors text-lg font-semibold flex items-center justify-center"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Publishing...
            </>
          ) : (
            "Publish Story"
          )}
        </button>
        <p className="text-gray-500 text-xs mt-3 text-center">Story will disappear after 24 hours</p>
      </div>

      {/* Right Panel - Preview (takes remaining space) */}
      <div className="flex-1 bg-gray-100 flex items-center justify-center p-6 overflow-auto">
        <div className="w-full h-full flex items-center justify-center">
          <div
            className="transition-all duration-300 rounded-xl overflow-hidden relative"
            style={{
              height: "80vh",
              width: "350px",
              maxWidth: "100%",
              ...previewBackgroundStyle(),
            }}
          >
            {imageURL && (
              <Image
                width={100}
                height={100}
                ref={imgRef}
                src={imageURL || "/placeholder.svg"}
                alt="preview"
                className="hidden"
                crossOrigin="anonymous"
                onLoad={extractDominantColor}
              />
            )}
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <p className="text-white text-2xl font-semibold text-center break-words max-w-[90%] drop-shadow-lg">
                {message || "Your story preview will appear here..."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCustomizer