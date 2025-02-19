import Image from "next/image";
import { FaThumbsUp, FaComment, FaShare } from "react-icons/fa";

export default function VideoPost() {
    const videos = [
        "https://www.w3schools.com/html/mov_bbb.mp4",
        "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
        "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
      ];
      const thumbnail = [
        "https://picsum.photos/605/405",
        "https://picsum.photos/590/400",
        "https://picsum.photos/610/400"
      ];
      
      const getRandomVideo = () => videos[Math.floor(Math.random() * videos.length)];

      const getRandomThumbnail = () => thumbnail[Math.floor(Math.random() * thumbnail.length)];
      const getRandomNumber = () =>  Math.floor(Math.random() * (70 - 50 + 1)) + 50;
  return (
    <div className="bg-white shadow-md rounded-lg p-4 space-y-4">
      {/* Post Header */}
      <div className="flex items-center space-x-3">
        <Image
          width={40}
          height={40}
          src={`https://randomuser.me/api/portraits/men/${getRandomNumber()}.jpg`}
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h3 className="font-semibold text-gray-800">John Doe</h3>
          <p className="text-xs text-gray-500">2 hours ago</p>
        </div>
      </div>
      
      
      <p className="text-gray-700">
     Watch out this crazy video and share with your friends.
        </p>
      {/* Video Post */}
      <div className="relative h-400" >
        <video 
          controls
          className="w-full rounded-lg"
          poster={getRandomThumbnail()}
        >
          <source src={getRandomVideo()} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between text-gray-600 text-sm border-t pt-2">
        <button className="flex items-center space-x-1 hover:text-blue-500">
          <FaThumbsUp /> <span>Like</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-blue-500">
          <FaComment /> <span>Comment</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-blue-500">
          <FaShare /> <span>Share</span>
        </button>
      </div>
    </div>
  );
}
