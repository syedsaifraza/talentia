// Force Next.js to treat this as a dynamic server-rendered route
export const dynamic = 'force-dynamic';

import { getPosts } from "@/utils/apis/post";
import Post from "@/component/components/post";
import { PostType } from "@/types/PostType";
import PostSkelatal from "@/component/skelatal/PostSkelatal";
import { cookies } from "next/headers";
import { IoSquare, IoVideocam, IoFilter } from "react-icons/io5";
import { FiCalendar, FiHash, FiTrendingUp } from "react-icons/fi";
import OgImageLoader from "@/component/components/OgImageLoader";

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
      <div className="flex-1 overflow-y-auto bg-red-400 h-[89vh]">
        <div className="max-w-2xl mx-auto px-4">
          {posts.length === 0 ? (
            <div key={Math.random()*1000}>
              <PostSkelatal key={"cas1"} />
              <PostSkelatal key={"cas2"} />
            </div>
          ) : (
            <div key={Math.random()*1000} className="space-y-6">
              {posts.map((post, idz) => 
                (idz == 0 || idz % 3 == 0) ? 
                <div key={idz}>
                  {/* <TalentsView /> */}
                  <Post post={post} ogImageLoader={<OgImageLoader text={post.text}/>} />
                </div> : 
                <Post post={post} ogImageLoader={<OgImageLoader text={post.text}/>} />
              )}
            </div>
          )}
        </div>
      </div>

      {/* Filters - Fixed */}
      <div className="hidden lg:block w-72 p-5 bg-white rounded-xl shadow-sm border border-gray-100 h-[89vh] sticky top-20 overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold text-gray-800">Filters</h1>
          <IoFilter className="text-gray-500" />
        </div>

        {/* Media Type */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">Media Type</h2>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 bg-blue-50 text-blue-600 py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-100 transition-all">
              <IoSquare size={16} />
              All
            </button>
            <button className="flex items-center gap-2 bg-gray-50 text-gray-600 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-100 transition-all">
              <IoVideocam size={16} />
              Videos
            </button>
          </div>
        </div>

        {/* Date Range */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider flex items-center gap-2">
            <FiCalendar size={14} />
            Date Range
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-gray-500 mb-1">From</label>
              <input 
                type="date" 
                className="w-full p-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-500" 
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">To</label>
              <input 
                type="date" 
                className="w-full p-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-500" 
              />
            </div>
          </div>
        </div>

        {/* Hashtag */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider flex items-center gap-2">
            <FiHash size={14} />
            Hashtag
          </h2>
          <input 
            type="text" 
            placeholder="#keyword" 
            className="w-full p-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-500" 
          />
        </div>
        
        {/* Sort */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider flex items-center gap-2">
            <FiTrendingUp size={14} />
            Sort By
          </h2>
          <select className="w-full p-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-500">
            <option value="newest">Newest First</option>
            <option value="popular">Most Liked</option>
            <option value="comments">Most Commented</option>
          </select>
        </div>

        {/* Apply Filters Button */}
        <button className="w-full bg-blue-600 text-white p-2.5 rounded-lg font-medium hover:bg-blue-700 transition-all shadow-sm">
          Apply Filters
        </button>
      </div>
    </div>
  );
}