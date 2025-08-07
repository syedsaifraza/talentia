
"use client"
import { PostType } from "@/types/PostType";
import PostSkelatal from "../skelatal/PostSkelatal";
import Post from "./post";
import OgImageLoader from "./OgImageLoader"; 
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";

export default function FeedPostList({posts}:{posts:PostType[]}){
  const params = useSearchParams();
  const tab = params.get('tab') || 'all';
  const mediaType = params.get('mediaType') || 'all';
  const fromDate = params.get('fromDate');
  const toDate = params.get('toDate');
  const hashtag = params.get('hashtag');
  const sortBy = params.get('sortBy');

  // Get user connections from Redux
  const followings = useSelector((state: any) => state.auth.followings || []);
  const followers = useSelector((state: any) => state.auth.followers || []);
  const followersIds: string[] = followers.map((follower: any) => follower.uid);
  const connections = followings.filter((following: any) =>
    followersIds.includes(following.uid)
  );
  const connectionIds = connections.map((conn: any) => conn.uid);

  const filteredPosts = useMemo(() => {
    let result = [...posts];

    // First filter by tab (All, Connections, Communities, Pages)
    if (tab === 'connections') {
      result = result.filter(post => 
        post.user && connectionIds.includes(post.user.uid))
    } 

    if (tab === 'following') {
      // followings is array of objects, get their uids
      const followingIds = followings.map((f: any) => f.uid);
      result = result.filter(post => 
        post.user && followingIds.includes(post.user.uid));
    }


    // Add similar filters for communities and pages when implemented
    else if (tab === 'communities') {
      result = []; // No posts for communities yet
    } 


    else if (tab === 'pages') {
      result = []; // No posts for pages yet
    }

    // Then apply other filters
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

    if (hashtag) {
      result = result.filter(
        (post) => post.text?.includes?.(hashtag)
      );
    }

    // Sorting
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
  }, [posts, tab, mediaType, fromDate, toDate, hashtag, sortBy, connectionIds]);

  return (
    <div className="flex-1 overflow-y-auto pt-4">
      <div className="max-w-2xl mx-auto px-4 w-[20vw]">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500 dark:text-gray-400">No posts available</p>
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
              {tab === 'connections' ? "Your connections haven't posted anything yet" : 
               "Try adjusting your filters or check back later"}
            </p>
          </div>
        ) : (
          <div key={Math.random()*1000} className="space-y-6">
            {filteredPosts.map((post, idz) => 
              (idz == 0 || idz % 3 == 0) ? 
              <div key={idz}>
                <Post post={post} ogImageLoader={
                  <Suspense fallback={"Loading"}><p>l</p></Suspense>} 
                />
              </div> :   
              <div key={"as"+idz}>
                <Post post={post} ogImageLoader={
                  <Suspense fallback={"Loading"}><p>l</p></Suspense>} 
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}