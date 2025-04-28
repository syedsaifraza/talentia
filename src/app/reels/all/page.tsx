"use client";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { ChevronUp, ChevronDown } from "lucide-react";
import NameAvatar from "@/component/components/nameAvatar";
import { FaVolumeOff, FaTimes } from "react-icons/fa";

export default function ReelsView() {
  const reelsState = useSelector((state: any) => state.reels.reels);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const router = useRouter();

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
  const [muted,setMuted]=useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Top right controls */}
      <div className="absolute top-4 right-4 z-30 flex items-center gap-4">
        <FaVolumeOff color="white" size={24} onClick={()=>setMuted(!muted)} />
        <FaTimes
          color="white"
          size={24}
          className="cursor-pointer"
          onClick={() => router.push("/feed")}
        />
      </div>

      {/* Reel Container */}
      <div
        ref={containerRef}
        className="h-full overflow-y-scroll scroll-smooth snap-y snap-mandatory no-scrollbar"
      >
        {reelsState.map((reel: any, index: number) => (
          <div
            key={index}
            className="h-screen w-full snap-start flex items-center justify-center relative"
          >
            <div className="w-[400px] h-full relative flex flex-col justify-center">
              <video
                ref={(el) => {
                  if (el) videoRefs.current[index] = el;
                }}
                src={reel.fileURL}
                loop
                autoPlay
                // muted={muted}
                controls={false}
                className="w-full h-full object-cover rounded-lg"
              />
              {/* Overlay Info */}
              <div className="absolute bottom-10 left-4 text-white z-10">
                <h4 className="text-xl font-semibold drop-shadow">{reel.text}</h4>
                <div className="mt-2">
                  <NameAvatar name={reel.user.name || "User"} size={35} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Vertical scroll buttons */}
      <div className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20">
        <button
          onClick={() => scrollByReel("up")}
          className="bg-white/20 hover:bg-white/30 p-2 rounded-full text-white"
        >
          <ChevronUp size={28} />
        </button>
      </div>
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20">
        <button
          onClick={() => scrollByReel("down")}
          className="bg-white/20 hover:bg-white/30 p-2 rounded-full text-white"
        >
          <ChevronDown size={28} />
        </button>
      </div>
    </div>
  );
}
