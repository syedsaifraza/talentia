'use client';

import Image from "next/image";
import { useState } from "react";

interface GalleryGridProps {
  images: string[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [selected, setSelected] = useState<string | null>(null);

  // Simple helper to check if it's a video
  const isVideo = (url: string) =>
    url.toLowerCase().endsWith(".mp4") || url.toLowerCase().endsWith(".mov");

  return (
    <>
      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, idx) => (
            <div
              key={idx}
              onClick={() => setSelected(src)}
              className="relative w-full h-64 rounded-lg overflow-hidden shadow cursor-pointer hover:scale-105 transition-transform"
              title="Click to view full"
            >  
              {isVideo(src) ? (
                <video
                  src={src}
                  className="w-full h-full object-cover"
                  muted
                  preload="metadata"
                  playsInline
                />
              ) : (
                <Image
                  src={src}
                  alt={`Gallery ${idx}`}
                  fill
                  className="object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-[90vw] max-w-3xl max-h-[90vh] bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-2 bg-white p-1 rounded-full shadow px-2 py-1"
            >
              ✕
            </button>

            <div className="max-h-[80vh] overflow-auto">
              {isVideo(selected) ? (
                <video
                  src={selected}
                  className="w-full max-h-[80vh]"
                  controls
                  autoPlay
                />
              ) : (
                <Image
                  src={selected}
                  alt="Full"
                  width={1000}
                  height={1000}
                  className="w-full h-auto object-contain"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
