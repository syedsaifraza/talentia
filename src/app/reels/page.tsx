"use client";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { ChevronUp, ChevronDown } from "lucide-react";
import NameAvatar from "@/component/components/nameAvatar";
import { FaVolumeOff, FaTimes } from "react-icons/fa";
import Page from "../page";
import { IoClose } from "react-icons/io5";
import { FaVolumeXmark } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";

type Creator = {
  id: string;
  name: string;
  image: string;
  gradient: string;
};

type TrendingItem = {
  id: string;
  title: string;
  subtitle: string;
  type: 'music' | 'video';
};

export default function ReelsView() {
  const reelsState = useSelector((state: any) => state.reels.reels);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const router = useRouter();
  const [mutedState, setMutedState] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Scroll vertically by one reel
  const scrollByReel = (direction: "up" | "down") => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = container.clientHeight;
      container.scrollBy({
        top: direction === "up" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Play video in view, pause others
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.7 }
    );

    const timeout = setTimeout(() => {
      videoRefs.current.forEach((video) => {
        if (video) observer.observe(video);
      });
    }, 300);

    return () => {
      clearTimeout(timeout);
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, [reelsState]);

  // Clear refs before setting new ones
  videoRefs.current = [];

  const trendingTags = ['#viral', '#trending', '#dance', '#comedy', '#challenge', '#fyp'];

  const trendingItems: TrendingItem[] = [
    { id: '1', title: 'Popular Song', subtitle: 'Artist Name', type: 'music' },
    { id: '2', title: 'Hit Track', subtitle: 'Famous Singer', type: 'music' },
    { id: '3', title: 'Funny Moment', subtitle: '1.2M views', type: 'video' },
    { id: '4', title: 'Dance Challenge', subtitle: '850K views', type: 'video' },
  ];

  const trendingCreators: Creator[] = [
    { id: '1', name: 'CreatorOne', image: '/women-44.jpg', gradient: 'from-pink-500 to-purple-600' },
    { id: '2', name: 'TrendMaster', image: '/men-32.jpg', gradient: 'from-amber-500 to-red-600' },
    { id: '3', name: 'ViralQueen', image: '/women-68.jpg', gradient: 'from-blue-400 to-emerald-400' },
  ];

  const filteredCreators = trendingCreators.filter(creator =>
    creator.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 flex bg-black overflow-hidden ">
      {/* Close Button */}
      <button
        onClick={() => (window.location.href = "/home")}
        className="flex hover:bg-gray-200 items-center justify-center rounded-full p-2 bg-gray-100 absolute top-4 left-4 z-50 cursor-pointer"
      >
        <IoClose size={35} className="text-gray-600" />
      </button>

      {/* Mute Button */}
      <div 
        onClick={() => setMutedState(!mutedState)} 
        className="flex hover:bg-gray-200 items-center justify-center rounded-full p-2 bg-gray-400 absolute top-4 left-[930px] z-50 cursor-pointer"
      >
        {mutedState ? (
          <FaVolumeXmark color="black" size={24} />
        ) : (
          <FaVolumeOff color="black" size={24} />
        )}
      </div>

      {/* Reels Container - Scrollable Vertical */}
      <div
        ref={containerRef}
        className="flex-1 h-full  overflow-y-auto snap-y snap-mandatory no-scrollbar bg-black border-3 border-white"
      >
        {reelsState.map((reel: any, index: number) => (
          <div
            key={index}
            className="h-screen w-full p-2 rounded-lg snap-start flex items-center justify-center relative border-3 border-white"
          >
            <div className="w-full rounded-lg max-w-[400px]  h-full relative flex flex-col justify-center">
              <video
                ref={(el) => {
                  if (el) videoRefs.current[index] = el;
                }}
                src={reel.fileURL}
                loop
                autoPlay
                muted={mutedState}
                controls={false}
                className="w-full h-full object-cover border-[1px] border-white"
              />
              {/* Overlay Info */}
              <div className="absolute bottom-4 left-4 text-white z-10">
                <h4 className="text-[12px] drop-shadow">
                  {reel.text}
                </h4>
                <div className="mt-2 flex flex-row gap-2 items-center">
                  <NameAvatar name={reel.user.name || "User"} size={35} />
                  <p>{reel.user.name}</p>
                  {/* <button onClick={()=>console.log(reel.user.name)}>Hlel</button> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sidebar - Scrollable if content overflows */}
      <div className="hidden lg:flex flex-col w-[380px] h-full bg-white overflow-hidden">
        <div className="flex flex-col h-full w-full bg-white text-black p-5 overflow-y-auto">
          {/* Trending Creators Section */}
          <div className="mb-6">
            <div className="flex flex-row justify-between items-center">
              <h3 className="text-lg font-bold mb-3">Trending Creators</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search creators..."
                  className="w-full bg-gray-100 rounded-full py-2 px-4 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <HiMagnifyingGlass className="absolute left-3 top-2.5 text-gray-400" />
              </div>
            </div>
          
            <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-hide">
              {filteredCreators.map(creator => (
                <div key={creator.id} className="flex flex-col items-center shrink-0">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${creator.gradient} p-0.5 mb-1`}>
                    <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden">
                      <img
                        src={creator.image}
                        alt={creator.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <span className="text-xs font-medium text-black">{creator.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trending Hashtags */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-3">Trending Tags</h3>
            <div className="flex flex-wrap gap-2">
              {trendingTags.map(tag => (
                <a
                  key={tag}
                  href="#"
                  className="inline-block bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm transition-colors text-black"
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>

          {/* Trending Music */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-3">Trending Music</h3>
            <div className="space-y-2">
              {trendingItems
                .filter(item => item.type === 'music')
                .map(item => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-xs text-white">
                      ▶
                    </div>
                    <div className="text-sm">
                      <p className="font-medium text-black">{item.title}</p>
                      <p className="text-gray-600 text-xs">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
            
          {/* Trending Videos */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-3">Trending Videos</h3>
            <div className="space-y-2">
              {trendingItems
                .filter(item => item.type === 'video')
                .map(item => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors"
                  >
                    <div className="w-8 h-8 rounded bg-gradient-to-r from-amber-500 to-pink-500 flex items-center justify-center text-xs text-white">
                      📹
                    </div>
                    <div className="text-sm">
                      <p className="font-medium text-black">{item.title}</p>
                      <p className="text-gray-600 text-xs">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Create Reels Button */}
          <button className="mt-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-4 rounded-full flex items-center justify-center gap-2 transition-all">
            <span className="text-xl">🎬</span>
            <span>Create Reel</span>
          </button>
        </div>
      </div>

      {/* Optional: Vertical scroll buttons */}
      <div className="absolute  left-[230px] top-1/2 transform -translate-y-1/2 z-20">
        <button
          onClick={() => scrollByReel("up")}
          className="bg-white/20 hover:bg-white/30 p-2 rounded-full text-white"
        >
          <ChevronUp size={28} color="white" />
        </button>
      </div>
      <div className="absolute left-[710px] top-1/2 transform -translate-y-1/2 z-20">
        <button
          onClick={() => scrollByReel("down")}
          className="bg-white/20 hover:bg-white/30 p-2 rounded-full text-white"
        >
          
          <ChevronDown size={28} color="white"/>
        </button>
      </div>
    </div>
  );
}