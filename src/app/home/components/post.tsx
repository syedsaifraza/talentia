import Image from "next/image";

export default function Post() {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 space-y-4">
        {/* Post Header */}
        <div className="flex items-center space-x-3">
          <Image
            src="https://randomuser.me/api/portraits/men/47.jpg"
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-gray-800">John Doe</h3>
            <p className="text-xs text-gray-500">2 hours ago</p>
          </div>
        </div>
  
        {/* Post Content */}
        <p className="text-gray-700">
        On this Republic Day, let us remember and honor the sacrifices of our brave patriots and martyrs who laid down their lives for India’s freedom and sovereignty. Their courage, dedication, and unwavering spirit continue to inspire us. It is our duty to uphold the values of justice, unity, and progress they fought for. Let’s pledge to contribute towards a stronger, prosperous, and harmonious India. Their sacrifices will never be forgotten. Jai Hind! 🇮🇳 #RepublicDay #SaluteToMartyrs
        </p>
  
        {/* Post Image (Optional) */}
        <Image
          src="https://talentia.co.in/post.jpg"
          alt="Post"
          className="rounded-lg w-full"
        />
  
        {/* Action Buttons */}
        <div className="flex justify-between text-gray-600 text-sm border-t pt-2">
          <button className="flex items-center space-x-1 hover:text-blue-500">
            👍 <span>Like</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-blue-500">
            💬 <span>Comment</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-blue-500">
            🔄 <span>Share</span>
          </button>
        </div>
      </div>
    );
  }
  