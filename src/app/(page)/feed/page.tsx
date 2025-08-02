// Force Next.js to treat this as a dynamic server-rendered route
export const dynamic = 'force-dynamic';

import { getPosts } from "@/utils/apis/post";
import { PostType } from "@/types/PostType";
import { cookies, headers } from "next/headers";
import { IoSquare, IoVideocam, IoFilter } from "react-icons/io5";
import { FiCalendar, FiHash, FiTrendingUp } from "react-icons/fi";
import FeedPostList from "@/component/components/feed-post-list";
import { Suspense } from "react";
import FilterForm from "@/component/components/FilterForm";


export default async function Feed() {
  
   
  const cookieStore = cookies();
  const token = (await cookieStore).get("token");  

  let posts: PostType[] = [];

  try {
    const res = await getPosts(token?.value || "no token");

    if (res && res.posts) {
      posts = res.posts.filter((post)=>post.isDeleted!=true);
      console.log("Fetched posts:", posts);
    }
  } catch (error) {
    console.error("Failed to fetch posts:", error);
  }

  return (
    
    <div className="flex h-full">
      {/* Feed Content - Scrollable */}
       {/* Content Here  */}
       
       <FeedPostList posts={posts} /> 
     
      {/* Filters - Fixed */}
      {/* Filter Form Here */}
      
      <FilterForm/>
    </div>
  );
}