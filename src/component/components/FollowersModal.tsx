"use client"

import { useState } from "react"
import NameAvatar from "./nameAvatar"
import Image from "next/image"

interface Follower {
  id: string
  name: string
  username: string
  avatar?: string
  isFollowing: boolean
  isVerified?: boolean
}

interface FollowersModalProps {
  isOpen: boolean
  onClose: () => void
  mockFollowers:[]
}



export function FollowersModal({ isOpen, onClose,mockFollowers }: FollowersModalProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [followers, setFollowers] = useState<Follower[]>(mockFollowers)

  const filteredFollowers = followers.filter(
    (follower) =>
      follower.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      follower.username.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleFollowToggle = (followerId: string) => {
    setFollowers((prev) =>
      prev.map((follower) =>
        follower.id === followerId ? { ...follower, isFollowing: !follower.isFollowing } : follower,
      ),
    )
  }



  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-md w-full mx-4 max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="p-6 pb-4 border-b flex items-center justify-between">
          <h2 className="text-lg font-semibold">Followers</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl font-bold w-8 h-8 flex items-center justify-center"
          >
            ×
          </button>
        </div>

        {/* Search Bar */}
        <div className="px-6 pb-4">
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
            <input
              type="text"
              placeholder="Search followers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Followers List */}
        <div className="flex-1 overflow-y-auto px-6 pb-6">
          <div className="space-y-3">
            {filteredFollowers.length === 0 ? (
              <div className="text-center py-8 text-gray-500">No followers found</div>
            ) : (
              filteredFollowers.map((follower) => (
                <div key={follower.id} className="flex items-center justify-between py-2">
                  <div className="flex  items-center space-x-3 flex-1 min-w-0">
                    <div className="w-10 h-10 flex justify-center items-center rounded-full shadow-[0px_0px_2px_0px_#00000024]">
                       
                    <img
                                     src={follower.avatar || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCpY5LtQ47cqncKMYWucFP41NtJvXU06-tnQ&s"}
                                     alt={follower.name || 'User'}
                                     height={80}
                                     width={80}
                                     className="rounded-full object-cover"
                                   />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-1">
                        <p className="font-medium text-sm truncate">{follower.name}</p>
                        {follower.isVerified && (
                          <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        )}
                      </div>
                      <p className="text-gray-500 text-xs truncate">@{follower.name}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleFollowToggle(follower.id)}
                    className={`ml-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      follower.isFollowing
                        ? "border border-gray-300 text-gray-700 hover:bg-gray-50"
                        : "bg-blue-500 text-white hover:bg-blue-600"
                    }`}
                  >
                    {"Remove"}
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
