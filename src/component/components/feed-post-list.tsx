"use client"
import { PostType } from "@/types/PostType";
import PostSkelatal from "../skelatal/PostSkelatal";
import Post from "./post";
import OgImageLoader from "./OgImageLoader"; 
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo } from "react";

export default function FeedPostList({posts}:{posts:PostType[]}){

  const params = useSearchParams();

  const mediaType = params.get('mediaType') || 'all';
  const fromDate = params.get('fromDate');
  const toDate = params.get('toDate');
  const hashtag = params.get('hashtag');
  const sortBy = params.get('sortBy');

  const filteredPosts = useMemo(() => {
    let result = [...posts]; // avoid mutating props directly

    if (mediaType === 'video') {
      result = result.filter(
        (post) => post.fileURL && post.fileURL.toString().endsWith('.mp4')
      );
    }

    

    if (fromDate && toDate) {
       
      
      const from = new Date(fromDate);
      const to = new Date(toDate);
     
      result = result.filter((post) => {
        const ts = post.createdAt;
         const created = ts?._seconds ? new Date(post.createdAt?._seconds * 1000) : null;
         
        return created! >= from && created! <= to;
      });
    }

    // Optional: filter by hashtag
    if (hashtag) {
      result = result.filter(
        (post) => post.text?.includes?.(hashtag)
      );
    }

    // Optional: sort
    if (sortBy === 'latest') {
      result.sort(
        (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      );
    }
    if (sortBy === 'popular') {
      result.sort(
        (a, b) => (b.likes?.length||0) - (a.likes?.length||0)
      );
    }
    if (sortBy === 'comments') {
      result.sort(
        (a, b) => (b.comments?.length||0) - (a.comments?.length||0)
      );
    }

    return result;
  }, [posts, mediaType, fromDate, toDate, hashtag, sortBy]);
 
  
   return <>
    {/* <p>URL PArsms is {JSON.stringify(headersList)}</p> */}
          <div className="flex-1 overflow-y-auto pt-4 ">
            <div className="max-w-2xl mx-auto px-4  w-[50vh]">
              {filteredPosts.length === 0 ? (
                <div key={Math.random()*1000}>
                  <PostSkelatal key={"cas1"} />
                  <PostSkelatal key={"cas2"} />
                </div>
              ) : (
                <div key={Math.random()*1000} className="space-y-6">
                  {filteredPosts.map((post, idz) => 
                    (idz == 0 || idz % 3 == 0) ? 
                    <div key={idz}>
                      
                      {/* <TalentsView /> */}
                      <Post post={post} ogImageLoader={<Suspense fallback={"Loading"}><p>l</p></Suspense> } />
                    </div> :   
                    <Post post={post} key={"as"+idz} ogImageLoader={<Suspense fallback={"Loading"}><p>l</p></Suspense>} />
                  )}
                </div>
              )}
            </div>
          </div>
    </>
}