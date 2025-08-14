"use client"

import { AdComponents } from "@/component/components/adComponents"
import NameAvatar from "@/component/components/nameAvatar"
import { getNotifications } from "@/utils/apis/notification"
import { useEffect, useState } from "react"
import Image from "next/image"
import moment from "moment"
import useSocket from "@/hooks/useSocket"

interface Notification {
  id: string
  type: "like" | "comment" | "follow" | "mention" | "share"
  user: {
    name: string
    username: string
    avatar: string
  }
  content?: string
  post?: {
    id: string
    content: string
    image?: string
  }
  timestamp: string
  isRead: boolean
}

interface NotificationHeaderProps {
  unreadCount: number
  filter: "all" | "unread"
  onFilterChange: (filter: "all" | "unread") => void
  onMarkAllAsRead: () => void
  onClearAll: () => void
}

interface NotificationItemProps {
  notification: Notification
  onMarkAsRead: (id: string) => void
}

interface NotificationHeaderProps {
  unreadCount: number
  filter: "all" | "unread"
  onFilterChange: (filter: "all" | "unread") => void
  onMarkAllAsRead: () => void
  onClearAll: () => void
}


// Notification Header Component
function NotificationHeader({
  unreadCount,
  filter,
  onFilterChange,
  onMarkAllAsRead,
  onClearAll,
}: NotificationHeaderProps) {
  return (
    <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold text-gray-900">Notifications</h1>
          <div className="flex items-center space-x-3">
            {unreadCount > 0 && (
              <button onClick={onMarkAllAsRead} className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                Mark all read
              </button>
            )}
            <button onClick={onClearAll} className="text-sm text-gray-500 hover:text-gray-700 font-medium">
              Clear all
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-1">
          <button
            onClick={() => onFilterChange("all")}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              filter === "all" ? "bg-gray-900 text-white" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            }`}
          >
            All
          </button>
          <button
            onClick={() => onFilterChange("unread")}
            className={`px-4 py-2 text-sm font-medium rounded-md flex items-center space-x-2 ${
              filter === "unread" ? "bg-gray-900 text-white" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            }`}
          >
            <span>Unread</span>
            {unreadCount > 0 && (
              <span className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5 min-w-[18px] text-center">
                {unreadCount > 99 ? "99+" : unreadCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

// Notification Item Component
function NotificationItem({ notification, onMarkAsRead }: any) {
  const getNotificationIcon = (type: string) => {
    const iconClasses = "w-4 h-4 text-gray-600"

    switch (true) {
      case type.includes("like"):
        return (
          <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
            <svg className={iconClasses} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        )
      case type.includes("comment"):
        return (
          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
            <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </div>
        )
      case type.includes("follow"):
        return (
          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
            <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
        )
      case type.includes("mention"):
        return (
          <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
            <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </div>
        )
      case type.includes("share"):
        return (
          <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
            <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
              />
            </svg>
          </div>
        )
      default:
        return null
    }
  }

  

  const handleClick = () => {
    if (!notification.isRead) {
      onMarkAsRead(notification.id)
    }
  }

  return (
    <div
      onClick={handleClick}
      className={`p-4 hover:bg-gray-50 cursor-pointer ${
        !notification.isRead ? "bg-blue-50 border-l-2 border-blue-500" : ""
      }`}
    >
      <div className="flex items-start space-x-3">
        <div className="relative">
         {notification.notificationImageUrl.toString().includes("https")? <>
                                <Image
                                              src={notification.notificationImageUrl.toString()}
                                              width={40}
                                              height={40}
                                              alt={"a"}
                                              className="rounded-full object-cover aspect-square"
                                            />
                                </>:<NameAvatar size={30} name={notification.notificationImageUrl} />
 } 
          <div className="absolute -bottom-1 -right-1">{getNotificationIcon(notification.notificationDescription)}</div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">{notification.notificationTitle}</p>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-500"> {moment(notification.createdAt._seconds * 1000).fromNow()}</span>
              {!notification.isRead && <div className="w-2 h-2 bg-blue-600 rounded-full"></div>}
            </div>
          </div>
           
          

          {notification.notificationDescription && <p className="text-sm text-gray-700 mt-2">{notification.notificationDescription}</p>}

           
        </div>
      </div>
    </div>
  )
}

// Mock Data
const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "like",
    user: {
      name: "Sarah Johnson",
      username: "sarahj",
      avatar: "/placeholder.svg?height=40&width=40&text=SJ",
    },
    post: {
      id: "1",
      content: "Just finished my morning workout! 💪 #fitness #motivation",
      image: "/placeholder.svg?height=200&width=300&text=Workout",
    },
    timestamp: "2 minutes ago",
    isRead: false,
  },
  {
    id: "2",
    type: "comment",
    user: {
      name: "Mike Chen",
      username: "mikechen",
      avatar: "/placeholder.svg?height=40&width=40&text=MC",
    },
    content: "Great shot! What camera did you use? The lighting is perfect 📸",
    post: {
      id: "2",
      content: "Sunset at the beach 🌅 #photography #nature",
    },
    timestamp: "5 minutes ago",
    isRead: false,
  },
  {
    id: "3",
    type: "follow",
    user: {
      name: "Emma Wilson",
      username: "emmaw",
      avatar: "/placeholder.svg?height=40&width=40&text=EW",
    },
    timestamp: "10 minutes ago",
    isRead: false,
  },
  {
    id: "4",
    type: "mention",
    user: {
      name: "Alex Rodriguez",
      username: "alexr",
      avatar: "/placeholder.svg?height=40&width=40&text=AR",
    },
    content: "Thanks for the recommendation @you! Just tried that new restaurant and it was amazing 🍕",
    timestamp: "1 hour ago",
    isRead: true,
  },
  {
    id: "5",
    type: "share",
    user: {
      name: "Lisa Park",
      username: "lisap",
      avatar: "/placeholder.svg?height=40&width=40&text=LP",
    },
    post: {
      id: "3",
      content: "10 Tips for better productivity while working from home 💻",
    },
    timestamp: "2 hours ago",
    isRead: true,
  },
  {
    id: "6",
    type: "like",
    user: {
      name: "David Kim",
      username: "davidk",
      avatar: "/placeholder.svg?height=40&width=40&text=DK",
    },
    post: {
      id: "4",
      content: "Coffee and code - perfect Sunday morning ☕️ #developer #weekend",
    },
    timestamp: "3 hours ago",
    isRead: true,
  },
  {
    id: "7",
    type: "comment",
    user: {
      name: "Jessica Martinez",
      username: "jessicam",
      avatar: "/placeholder.svg?height=40&width=40&text=JM",
    },
    content: "This is so inspiring! I need to start my fitness journey too 💪",
    post: {
      id: "1",
      content: "Just finished my morning workout! 💪 #fitness #motivation",
    },
    timestamp: "4 hours ago",
    isRead: false,
  },
  {
    id: "8",
    type: "follow",
    user: {
      name: "Ryan Thompson",
      username: "ryant",
      avatar: "/placeholder.svg?height=40&width=40&text=RT",
    },
    timestamp: "5 hours ago",
    isRead: true,
  },
  {
    id: "9",
    type: "like",
    user: {
      name: "Sophia Lee",
      username: "sophial",
      avatar: "/placeholder.svg?height=40&width=40&text=SL",
    },
    post: {
      id: "5",
      content: "Beautiful sunset from my balcony tonight 🌇 #citylife #evening",
      image: "/placeholder.svg?height=200&width=300&text=Sunset",
    },
    timestamp: "6 hours ago",
    isRead: true,
  },
  {
    id: "10",
    type: "mention",
    user: {
      name: "Carlos Mendez",
      username: "carlosm",
      avatar: "/placeholder.svg?height=40&width=40&text=CM",
    },
    content: "Hey @you, check out this new project I'm working on! Would love your feedback 🚀",
    timestamp: "8 hours ago",
    isRead: false,
  },
  {
    id: "11",
    type: "share",
    user: {
      name: "Amanda Foster",
      username: "amandaf",
      avatar: "/placeholder.svg?height=40&width=40&text=AF",
    },
    post: {
      id: "6",
      content: "The importance of mental health in the workplace 🧠💼",
    },
    timestamp: "12 hours ago",
    isRead: true,
  },
  {
    id: "12",
    type: "comment",
    user: {
      name: "James Wilson",
      username: "jamesw",
      avatar: "/placeholder.svg?height=40&width=40&text=JW",
    },
    content: "Totally agree with your points! This should be required reading for all managers.",
    post: {
      id: "6",
      content: "The importance of mental health in the workplace 🧠💼",
    },
    timestamp: "1 day ago",
    isRead: true,
  },
  {
    id: "13",
    type: "like",
    user: {
      name: "Maria Garcia",
      username: "mariag",
      avatar: "/placeholder.svg?height=40&width=40&text=MG",
    },
    post: {
      id: "7",
      content: "Weekend hiking adventure! Nature is the best therapy 🥾🌲",
      image: "/placeholder.svg?height=200&width=300&text=Hiking",
    },
    timestamp: "1 day ago",
    isRead: true,
  },
  {
    id: "14",
    type: "follow",
    user: {
      name: "Kevin Chang",
      username: "kevinc",
      avatar: "/placeholder.svg?height=40&width=40&text=KC",
    },
    timestamp: "2 days ago",
    isRead: true,
  },
  {
    id: "15",
    type: "comment",
    user: {
      name: "Rachel Green",
      username: "rachelg",
      avatar: "/placeholder.svg?height=40&width=40&text=RG",
    },
    content: "Your photography skills are incredible! Do you offer workshops? 📷✨",
    post: {
      id: "2",
      content: "Sunset at the beach 🌅 #photography #nature",
    },
    timestamp: "2 days ago",
    isRead: true,
  },
  {
    id: "16",
    type: "mention",
    user: {
      name: "Tom Anderson",
      username: "toma",
      avatar: "/placeholder.svg?height=40&width=40&text=TA",
    },
    content: "@you Thanks for connecting me with Sarah! The collaboration is going great 🤝",
    timestamp: "3 days ago",
    isRead: true,
  },
  {
    id: "17",
    type: "like",
    user: {
      name: "Nina Patel",
      username: "ninap",
      avatar: "/placeholder.svg?height=40&width=40&text=NP",
    },
    post: {
      id: "8",
      content: "Homemade pasta night! Nothing beats fresh ingredients 🍝👨‍🍳",
      image: "/placeholder.svg?height=200&width=300&text=Pasta",
    },
    timestamp: "3 days ago",
    isRead: true,
  },
  {
    id: "18",
    type: "share",
    user: {
      name: "Daniel Brown",
      username: "danielb",
      avatar: "/placeholder.svg?height=40&width=40&text=DB",
    },
    post: {
      id: "9",
      content: "5 books that changed my perspective on leadership 📚💡",
    },
    timestamp: "4 days ago",
    isRead: true,
  },
]

// Main Page Component
export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications)
  const [filter, setFilter] = useState<"all" | "unread">("all")

  const unreadCount = notifications.filter((n) => !n.isRead).length

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((notification) => (notification.id === id ? { ...notification, isRead: true } : notification)),
    )
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notification) => ({ ...notification, isRead: true })))
  }

  const clearAllNotifications = () => {
    setNotifications([])
  }

  const filteredNotifications = filter === "unread" ? notifications.filter((n) => !n.isRead) : notifications
   const [alerts,setAlerts]=useState<any[]>([]);
const loadNotifications = async () => {
  const notification = await getNotifications();
  setAlerts(notification || []); // fallback to empty array if null/undefined
};
const socketRef = useSocket("https://talentia.co.in");
    useEffect(() => {
      loadNotifications()
    if (!socketRef.current) return;

        socketRef.current.on('connect', () => {
            console.log('Connected to socket server');
        });

        socketRef.current.on('notification', (msg:any) => {
            setAlerts((prev)=>[...prev,msg])
        });

        return () => {
            if (socketRef.current) {
                socketRef.current.off('random:number');
            }
        };

    })  
  return (
    <div className="flex flex-row  justify-around ">

      <div className="min-h-screen bg-gray-50" style={{ width: "570px" }}>
      <div className="max-w-2xl mx-auto bg-white min-h-screen">
        <NotificationHeader
          unreadCount={unreadCount}
          filter={filter}
          onFilterChange={setFilter}
          onMarkAllAsRead={markAllAsRead}
          onClearAll={clearAllNotifications}
        />

        <div className="divide-y divide-gray-200">
          {filteredNotifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 px-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-5 5-5-5h5v-12h5v12z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No notifications</h3>
              <p className="text-gray-500 text-center">
                {filter === "unread"
                  ? "You're all caught up! No unread notifications."
                  : "When you get notifications, they'll show up here."}
              </p>
            </div>
          ) : (
           alerts.reverse().map((notification) => (
              <NotificationItem key={notification.id} notification={notification} onMarkAsRead={markAsRead} />
            ))
          )}
        </div>
      </div>
    </div>

   <div className="w-[300px]">
           <AdComponents />
         </div>

    </div>
    
  )
}
