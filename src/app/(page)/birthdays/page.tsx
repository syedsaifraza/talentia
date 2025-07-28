"use client"

import type React from "react"
import { useState } from "react"

interface Friend {
  id: string
  name: string
  birthday: string
  phone: string
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const monthColors = [
  "from-blue-500 to-cyan-500",
  "from-pink-500 to-rose-500",
  "from-green-500 to-emerald-500",
  "from-yellow-500 to-orange-500",
  "from-purple-500 to-violet-500",
  "from-indigo-500 to-blue-500",
  "from-red-500 to-pink-500",
  "from-teal-500 to-cyan-500",
  "from-orange-500 to-red-500",
  "from-violet-500 to-purple-500",
  "from-emerald-500 to-teal-500",
  "from-rose-500 to-pink-500",
]

const initialFriends: Friend[] = [
  { id: "1", name: "Alice Johnson", birthday: "1995-01-15", phone: "+1234567890" },
  { id: "2", name: "Bob Smith", birthday: "1992-03-22", phone: "+1234567891" },
  { id: "3", name: "Carol Davis", birthday: "1988-01-08", phone: "+1234567892" },
  { id: "4", name: "David Wilson", birthday: "1990-07-12", phone: "+1234567893" },
  { id: "5", name: "Emma Brown", birthday: "1993-09-30", phone: "+1234567894" },
  { id: "6", name: "Frank Miller", birthday: "1987-03-18", phone: "+1234567895" },
  { id: "7", name: "Grace Lee", birthday: "1991-11-25", phone: "+1234567896" },
  { id: "8", name: "Henry Taylor", birthday: "1989-05-14", phone: "+1234567897" },
]

export default function BirthdayTracker() {
  const [friends, setFriends] = useState<Friend[]>(initialFriends)
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null)
  const [message, setMessage] = useState("")
  const [newFriend, setNewFriend] = useState({ name: "", birthday: "", phone: "" })
  const [showAddForm, setShowAddForm] = useState(false)
  const [showMessageModal, setShowMessageModal] = useState(false)

  const groupFriendsByMonth = () => {
    const grouped: { [key: number]: Friend[] } = {}
    friends.forEach((friend) => {
      const month = new Date(friend.birthday).getMonth()
      if (!grouped[month]) grouped[month] = []
      grouped[month].push(friend)
    })
    return grouped
  }

  const formatBirthday = (birthday: string) => {
    const date = new Date(birthday)
    return date.toLocaleDateString("en-US", { month: "long", day: "numeric" })
  }

  const getAge = (birthday: string) => {
    const today = new Date()
    const birthDate = new Date(birthday)
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  }

  const getDaysUntilBirthday = (birthday: string) => {
    const today = new Date()
    const birthDate = new Date(birthday)
    const thisYear = today.getFullYear()
    let nextBirthday = new Date(thisYear, birthDate.getMonth(), birthDate.getDate())
    if (nextBirthday < today) {
      nextBirthday = new Date(thisYear + 1, birthDate.getMonth(), birthDate.getDate())
    }
    const diffTime = nextBirthday.getTime() - today.getTime()
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  }

  const handleAddFriend = (e: React.FormEvent) => {
    e.preventDefault()
    if (newFriend.name && newFriend.birthday && newFriend.phone) {
      const friend: Friend = { id: Date.now().toString(), ...newFriend }
      setFriends([...friends, friend])
      setNewFriend({ name: "", birthday: "", phone: "" })
      setShowAddForm(false)
    }
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedFriend && message) {
      alert(`🎉 Message sent to ${selectedFriend.name}!\n\n"${message}"`)
      setMessage("")
      setShowMessageModal(false)
      setSelectedFriend(null)
    }
  }

  const openMessageModal = (friend: Friend) => {
    setSelectedFriend(friend)
    setShowMessageModal(true)
  }

  const groupedFriends = groupFriendsByMonth()

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-yellow-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mb-6 shadow-2xl transform hover:scale-110 transition-transform duration-300">
            <span className="text-4xl">🎂</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
            Birthday Tracker
          </h1>
          <p className="text-xl text-gray-300 mb-8">Never miss a friend's special day! 🎉</p>

          <button
            onClick={() => setShowAddForm(true)}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-pink-500 to-violet-600 rounded-full hover:from-pink-600 hover:to-violet-700 hover:scale-105 shadow-2xl hover:shadow-pink-500/25"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-400 to-violet-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></span>
            <span className="relative flex items-center gap-3">
              <span className="text-2xl">✨</span>
              Add Friend
              <span className="text-2xl">✨</span>
            </span>
          </button>
        </div>

        {/* Add Friend Modal */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
            <div className="bg-white rounded-3xl p-8 w-full max-w-md transform animate-bounce-in shadow-2xl">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mb-4">
                  <span className="text-3xl">👥</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Add New Friend</h2>
              </div>

              <form onSubmit={handleAddFriend} className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    value={newFriend.name}
                    onChange={(e) => setNewFriend({ ...newFriend, name: e.target.value })}
                    placeholder="Friend's Name"
                    className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-pink-500 focus:bg-white transition-all duration-300 text-lg"
                    required
                  />
                  <span className="absolute right-4 top-4 text-2xl">👤</span>
                </div>

                <div className="relative">
                  <input
                    type="date"
                    value={newFriend.birthday}
                    onChange={(e) => setNewFriend({ ...newFriend, birthday: e.target.value })}
                    className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-pink-500 focus:bg-white transition-all duration-300 text-lg"
                    required
                  />
                  <span className="absolute right-4 top-4 text-2xl">🎂</span>
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    value={newFriend.phone}
                    onChange={(e) => setNewFriend({ ...newFriend, phone: e.target.value })}
                    placeholder="Phone Number"
                    className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-pink-500 focus:bg-white transition-all duration-300 text-lg"
                    required
                  />
                  <span className="absolute right-4 top-4 text-2xl">📱</span>
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    ✅ Add Friend
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105"
                  >
                    ❌ Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Message Modal */}
        {showMessageModal && selectedFriend && (
          <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl p-8 w-full max-w-md transform animate-bounce-in shadow-2xl">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mb-4">
                  <span className="text-3xl">💬</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Send Message</h2>
                <p className="text-gray-600">to {selectedFriend.name}</p>
              </div>

              <form onSubmit={handleSendMessage} className="space-y-6">
                

                <div className="relative">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your birthday message... 🎉"
                    rows={4}
                    className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 text-lg resize-none"
                    required
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    🚀 Send Message
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowMessageModal(false)
                      setSelectedFriend(null)
                      setMessage("")
                    }}
                    className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105"
                  >
                    ❌ Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Friends by Month */}
        <div className="space-y-8">
          {months.map((month, index) => {
            const monthFriends = groupedFriends[index] || []
            if (monthFriends.length === 0) return null

            return (
              <div key={month} className="group">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-[1.02]">
                  <div className={`bg-gradient-to-r ${monthColors[index]} p-6 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <span className="text-2xl">📅</span>
                        </div>
                        <h2 className="text-3xl font-bold text-white">{month}</h2>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                        <span className="text-white font-bold">
                          {monthFriends.length} {monthFriends.length === 1 ? "friend" : "friends"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                      {monthFriends.map((friend) => {
                        const daysUntil = getDaysUntilBirthday(friend.birthday)
                        const isToday = daysUntil === 0
                        const isSoon = daysUntil <= 7 && daysUntil > 0

                        return (
                          <div
                            key={friend.id}
                            className={`relative p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                              isToday
                                ? "bg-gradient-to-br from-red-400 to-pink-500 text-white shadow-2xl shadow-red-500/30 animate-pulse"
                                : isSoon
                                  ? "bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-2xl shadow-yellow-500/30"
                                  : "bg-white/80 backdrop-blur-sm text-gray-800 shadow-xl"
                            }`}
                          >
                            {isToday && (
                              <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
                                <span className="text-white text-sm">🎉</span>
                              </div>
                            )}

                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center gap-4">
                                <div
                                  className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl ${
                                    isToday || isSoon ? "bg-white/20" : "bg-gradient-to-br from-purple-400 to-pink-500"
                                  }`}
                                >
                                  <span className={isToday || isSoon ? "text-white" : "text-white"}>👤</span>
                                </div>
                                <div>
                                  <h3 className="text-xl font-bold">{friend.name}</h3>
                                  <p className={`text-sm ${isToday || isSoon ? "text-white/80" : "text-gray-600"}`}>
                                    Age {getAge(friend.birthday)}
                                  </p>
                                </div>
                              </div>

                              <button
                                onClick={() => openMessageModal(friend)}
                                className={`px-4 py-2 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-110 ${
                                  isToday || isSoon
                                    ? "bg-white/20 text-white hover:bg-white/30"
                                    : "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg"
                                }`}
                              >
                                💬 Message
                              </button>
                            </div>

                            <div className="space-y-3">
                              <p className="font-semibold text-lg">{formatBirthday(friend.birthday)}</p>

                              {isToday && (
                                <div className="bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full inline-block">
                                  <span className="font-bold">🎉 Birthday Today! 🎉</span>
                                </div>
                              )}

                              {isSoon && !isToday && (
                                <div className="bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full inline-block">
                                  <span className="font-bold">⏰ {daysUntil} days to go!</span>
                                </div>
                              )}

                              {!isToday && !isSoon && (
                                <p className="text-sm opacity-70">{daysUntil} days until birthday</p>
                              )}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Empty State */}
        {Object.keys(groupedFriends).length === 0 && (
          <div className="text-center py-20">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 max-w-md mx-auto border border-white/20">
              <div className="text-8xl mb-6">🎂</div>
              <h3 className="text-2xl font-bold text-white mb-4">No Friends Added Yet</h3>
              <p className="text-gray-300 mb-8">Start building your birthday calendar!</p>
              <button
                onClick={() => setShowAddForm(true)}
                className="bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                ✨ Add Your First Friend ✨
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes bounce-in {
          0% { transform: scale(0.3) rotate(-10deg); opacity: 0; }
          50% { transform: scale(1.05) rotate(2deg); }
          70% { transform: scale(0.9) rotate(-1deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}
