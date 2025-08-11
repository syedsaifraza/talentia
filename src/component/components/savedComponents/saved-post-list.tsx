"use client";

import { PostType } from "@/types/PostType";
import Post from "@/component/components/post";
import OgImageLoader from "@/component/components/OgImageLoader";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

interface Props {
  initialPosts: PostType[];
  savedPostIds: string[];
}

export default function SavedPostList({ initialPosts, savedPostIds }: Props) {
  const params = useSearchParams();
  const tab = params.get('tab') || 'all';

  const filteredPosts = useMemo(() => {
    // पहले सेव्ड पोस्ट्स फिल्टर करें
    const savedPosts = initialPosts.filter(post => 
      savedPostIds.includes(post.id)
    );

    // टैब के अनुसार फिल्टर करें
    switch (tab) {
      case 'videos':
        return savedPosts.filter(post => 
          post.fileURL?.toLowerCase().endsWith('.mp4')
        );
      case 'images':
        return savedPosts.filter(post => {
          const url = post.fileURL?.toLowerCase();
          return url && (url.endsWith('.jpg') || 
                 url.endsWith('.jpeg') || 
                 url.endsWith('.png'));
        });
      default:
        return savedPosts;
    }
  }, [initialPosts, savedPostIds, tab]);

  return (
    <div className="flex flex-row">
      <div className="pt-2 flex justify-center items-center flex-1">
        <div className="w-[500px]">
          {filteredPosts.length === 0 ? (
            <div className="text-center">
              <div className="flex items-center justify-center bg-gray-100">
                <div className="w-full overflow-hidden rounded-lg bg-white shadow-lg">
                  <div 
                    className="relative flex h-48 items-center justify-center overflow-hidden p-4" 
                    style={{
                      backgroundImage: "url('https://content.acetians.in/uploads/Static-page-design-v0-by-Vercel-08-08-2025_12_04_PM.png')", 
                      backgroundPosition: "contain"
                    }}
                  >
                  </div>
                  
                  <div className="p-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-800">No Saved Posts</h2>
                    <p className="mt-4 text-gray-600">
                      {tab === 'all' 
                        ? "You haven't saved any posts yet."
                        : `You haven't saved any ${tab} posts yet.`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div key="posts-container">
              {filteredPosts.map((post, index) => (
                <div key={post.id}>
                  {index % 3 === 0 && (
                    <div key={`wrapper-${post.id}`}>
                      <Post 
                        post={post} 
                        ogImageLoader={<OgImageLoader text={post.text}/>} 
                      />
                    </div>
                  )}
                  <Post 
                    post={post} 
                    ogImageLoader={<OgImageLoader text={post.text}/>} 
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}