"use client"

import { useState } from "react"
import Image from "next/image"

// Sample memories data - you can replace this with your actual data
const sampleMemories = [
  {
    id: 1,
    date: "2024-01-28",
    year: "2023",
    image: "https://content.acetians.in/uploads/istockphoto-1403500817-612x612.jpg",
    description: "Beautiful sunset at the beach with friends",
    location: "Santa Monica Beach",
  },
  {
    id: 2,
    date: "2024-01-28",
    year: "2022",
    image: "https://content.acetians.in/uploads/5f5932fb-f540-46fa-94d1-d7892df85840.jpg",
    description: "Amazing birthday celebration last year",
    location: "Home",
  },
  {
    id: 3,
    date: "2024-01-28",
    year: "2021",
    image: "https://content.acetians.in/uploads/images.jpeg",
    description: "Epic hiking adventure in the mountains",
    location: "Rocky Mountains",
  },
]

export default function MemoriesPage() {
  // Toggle this to test the "no memories" state
  const [hasMemories] = useState(true)
  const [shareModalOpen, setShareModalOpen] = useState(false)
  const [selectedMemory, setSelectedMemory] = useState(null)

  const handleShare = (memory:any) => {
    setSelectedMemory(memory)
    setShareModalOpen(true)
  }

  const memories = hasMemories ? sampleMemories : []
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const ShareModal = ({ memory, isOpen, onClose }:any) => {
    if (!isOpen || !memory) return null

    const shareUrl = `${window.location.origin}/memory/${memory.id}`
    const shareText = `Check out this amazing memory: ${memory.description}`

    const shareOptions = [
      {
        name: "Facebook",
        icon: "https://content.acetians.in/uploads/facebook.png",
        color: "bg-blue-600 hover:bg-blue-700",
        url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      },
      {
        name: "Instagram",
        icon: "https://content.acetians.in/uploads/instagram.png",
        color: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
        url: "#", // Instagram doesn't support direct URL sharing
        action: () => {
          navigator.clipboard.writeText(`${shareText} ${shareUrl}`)
          alert("Link copied! You can now paste it on Instagram")
        },
      },
      {
        name: "LinkedIn",
        icon: "https://content.acetians.in/uploads/linkedin.png",
        color: "bg-blue-700 hover:bg-blue-800",
        url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      },
      {
        name: "X (Twitter)",
        icon: "https://content.acetians.in/uploads/twitter.png",
        color: "bg-black hover:bg-gray-800",
        url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      },
      {
        name: "WhatsApp",
        icon: "https://content.acetians.in/uploads/social.png",
        color: "bg-green-500 hover:bg-green-600",
        url: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`,
      },
      {
        name: "Copy Link",
        icon: "https://content.acetians.in/uploads/link.png",
        color: "bg-gray-600 hover:bg-gray-700",
        action: () => {
          navigator.clipboard.writeText(shareUrl)
          alert("Link copied to clipboard!")
        },
      },
    ]

    const handleShare = (option:any) => {
      if (option.action) {
        option.action()
      } else if (option.url !== "#") {
        window.open(option.url, "_blank", "width=600,height=400")
      }
    }

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
          {/* Modal Header */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Share Memory
                </h3>
                <p className="text-gray-600 mt-1">Share this precious moment</p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Memory Preview */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex gap-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                <Image
                  src={memory.image || "/placeholder.svg"}
                  alt={memory.description}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900 line-clamp-2">{memory.description}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {memory.location} • {memory.year}
                </p>
              </div>
            </div>
          </div>

          {/* Share Options */}
          <div className="p-6">
            <div className="flex flex-row gap-2 justify-between items-center">
              {shareOptions.map((option) => (
                <button
                  key={option.name}
                  onClick={() => handleShare(option)}
                  className={` text-white  rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl`}
                >
                
                    <Image
                    src={option.icon}
                    alt="Share Icon"
                     width={50}
                  height={50}
                    className="text-2xl"
                    />
                   
            
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen m-1 bg-gradient-to-br  from-purple-50 via-white to-pink-50">
      {/* Header */}
      <div className="bg-white static top-0  border-b border-purple-100">
        <div className="max-w-4xl mx-auto px-2 py-8">
          <div className="flex items-center justify-between ">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Memories
              </h1>
              <p className="text-gray-600 mt-2 text-[14px] font-medium">Here are your precious memories from previous years</p>
            </div>
            <div className="text-right">
              {/* <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mb-2">
                <div className="text-gray-600 mt-2 text-[15px] font-medium">{today}</div>
              </div> */}
              <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg border border-purple-100 ">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✨</span>
                </div>
                <h2 className="text-xl font-[500] bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  On This Day
                </h2>
              </div>
           
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {memories.length > 0 ? (
          <>
            {/* Memories Header */}
            

            {/* Memories Grid */}
            <div className="grid gap-6 md:gap-8">
              {memories.map((memory) => (
                <div
                  key={memory.id}
                  className="bg-white rounded-3xl  overflow-hidden  transition-all duration-500 transform hover:-translate-y-1 border border-gray-100"
                >
                  {/* Memory Header */}
                  <div className="px-8 py-5 bg-gradient-to-r from-purple-50 to-pink-50 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {memory.year.slice(-2)}
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 text-lg">{memory.year} Memory</h3>
                            <p className="text-sm text-gray-600 font-medium">
                              {new Date(memory.date).toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                              })}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="text-3xl animate-pulse">🎉</div>
                    </div>
                  </div>

                  {/* Memory Content */}
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row gap-8">
                      {/* Image - Made smaller */}
                      <div className="md:w-[150px] flex-shrink-0">
                        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md ring-4 ring-purple-50">
                          <Image
                            src={memory.image || "/placeholder.svg"}
                            alt={memory.description}
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>

                      {/* Content - Takes more space now */}
                      <div className="md:w-3/4 flex flex-col ">
                        <div className="mb-4">
                          <p className="text-gray-800 text-xl leading-relaxed font-medium mb-4">{memory.description}</p>
                          <div className="flex items-center text-gray-500 text-base">
                            <div className="w-6 h-6 mr-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <span className="font-medium">{memory.location}</span>
                          </div>
                        </div>

                        {/* Enhanced stats */}
                        <div className="flex gap-6 text-sm text-gray-500">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <span>Memory from {new Date().getFullYear() - Number.parseInt(memory.year)} years ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Memory Actions */}
                  <div className="px-8 py-6 bg-gradient-to-r from-gray-50 to-purple-50/30 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <button className="flex items-center gap-3 text-gray-600 hover:text-purple-600 transition-all duration-200 px-4 py-2 rounded-full hover:bg-purple-50 group">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                          </svg>
                        </div>
                        <span className="font-medium">Remember</span>
                      </button>
                      <button
                        onClick={() => handleShare(memory)}
                        className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-all duration-200 px-4 py-2 rounded-full hover:bg-blue-50 group"
                      >
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                            />
                          </svg>
                        </div>
                        <span className="font-medium">Share</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          /* No Memories State */
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              {/* Empty State Icon */}
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                <div className="text-4xl">📷</div>
              </div>

              {/* Empty State Content */}
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">No Memories Today</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {
                  "You don't have any memories from previous years on this date. Keep creating moments and they'll appear here next year!"
                }
              </p>

              {/* Call to Action */}
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                Create New Memory
              </button>
            </div>
          </div>
        )}
      </div>
      {/* Share Modal */}
      <ShareModal memory={selectedMemory} isOpen={shareModalOpen} onClose={() => setShareModalOpen(false)} />
    </div>
  )
}
