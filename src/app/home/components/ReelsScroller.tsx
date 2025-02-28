import Image from "next/image";
import React from "react";

const reelsData = [
  {
    id: 1,
    user: "Add Status",
    avatar: "https://picsum.photos/20/20",
    thumbnail: "https://talentia.co.in/add-to-story.png",
  },
  {
    id: 2,
    user: "Jane Smith",
    avatar: "https://picsum.photos/20/20",
    thumbnail: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    user: "Alex Johnson",
    avatar: "https://picsum.photos/20/20",
    thumbnail: "https://picsum.photos/200/300",
  },
  {
    id: 4,
    user: "Emily Davis",
    avatar: "https://picsum.photos/20/20",
    thumbnail: "https://picsum.photos/200/300",
  },
  {
    id: 5,
    user: "Alex Johnson",
    avatar: "https://picsum.photos/20/20",
    thumbnail: "https://picsum.photos/200/300",
  },
   
   
];

const ReelsScroller = ({size="small",limit=0}) => {
  return (
    <div className="mt-4 bg-white">
        <h3 className="text-lg font-semibold mb-2 p-2">Participations</h3>
        <div className="flex space-x-3 overflow-x-auto no-scrollbar p-2">
           
        {(limit === 0 ? reelsData : reelsData.filter((reel) => reel.id < limit))
  .map((reel, index) => (
    <div
      key={reel.id}
      className={`relative   ${
        limit !== 0 ? "h-100 w-60" : "h-40 w-24"
      } rounded-lg overflow-hidden cursor-pointer`}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <Image
        width={100}
        height={100}
        src={reel.thumbnail}
        alt={reel.user}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-2 left-2 w-8 h-8 border-2 border-blue-500 rounded-full">
        <Image
          width={100}
          height={100}
          src={reel.avatar}
          alt={reel.user}
          className="w-full h-full rounded-full"
        />
      </div>
      <div className="absolute bottom-2 left-2 text-white text-sm font-semibold">
        {reel.user} 
        {limit > 0 ? (<><p>300k Views</p>
        <p>
          #20 on Trending
        </p></>):''} 
         
      </div>
    </div>
  ))}

        </div>
      </div>
  );
};

export default ReelsScroller;
