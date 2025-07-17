// Force Next.js to treat this as a dynamic server-rendered route
export const dynamic = 'force-dynamic';

import { getPosts } from "@/utils/apis/post";
import Post from "@/component/components/post";
import { PostType } from "@/types/PostType";
import PostSkelatal from "@/component/skelatal/PostSkelatal";
import { cookies } from "next/headers";
import AddPost from "@/component/components/AddPost";
import ReelsScroller from "@/component/components/ReelsScroller";
import TalentsView from "@/component/components/TalentsView";
import OgImageLoader from "@/component/components/OgImageLoader";
import { IoSquare, IoVideocam } from "react-icons/io5";

export default async function Feed() {
  const cookieStore = cookies();
  const token = (await cookieStore).get("token");  

  let posts: PostType[] = [];

  try {
    const res = await getPosts(token?.value || "no token");

    if (res && res.posts) {
      posts = res.posts.filter((post)=>post.isDeleted!=true);
      
    }
  } catch (error) {
    console.error("Failed to fetch posts:", error);
  }

  return (
    <> 
       <div className="flex justify-end"> 
          <div className="w-3/5 lg:w-[40vw]">
            {posts.length === 0 ? (
              <div className="" key={Math.random()*1000}>
                <PostSkelatal key={"cas1"} />
                <PostSkelatal key={"cas2"} />
              </div>
            ) : (
              <div key={Math.random()*1000}>
                {posts.map((post, idz) => 
                (idz==0 || idz%3==0)? <div  key={idz} >
                  <TalentsView />
                <Post post={post} ogImageLoader={<OgImageLoader text={post.text}/>} />
                </div>:<Post post={post}  ogImageLoader={<OgImageLoader text={post.text}/>} />
                )}
              </div>
            )}
          </div>

          <div className="w-2/5 mx-2 p-5 bg-white rounded-xl shadow-md">
              <h1 className="text-xl font-semibold mb-4">Filters for Posts </h1>

              {/* Media Type */}
              <div className="mb-4">
                <ul className="flex">
                  <li className="bg-blue-100 py-2 px-4 border-blue-200 mx-1 rounded-lg text-sm hover:cursor-pointer hover:bg-blue-300 flex items-center" style={{fontWeight:500}}>
                   <IoSquare   size={20} className="mr-2"/> All
                  </li>
                  

                  <li className="bg-blue-100 py-2 px-4 border-blue-200 mx-1 rounded-lg text-sm hover:cursor-pointer hover:bg-blue-300 flex items-center" style={{fontWeight:500}}>
                   <IoVideocam   size={20} className="mr-2"/> Videos
                  </li>
                    
                </ul>
                 
              </div>

              {/* Date Range */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
                <div className="flex"> 
                <input type="date" className="w-full p-2 border rounded mb-2" />
                <input type="date" className="w-full p-2 border rounded" />
                </div>
              </div>

              {/* Hashtag */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Hashtag</label>
                <input type="text" placeholder="#keyword" className="w-full p-2 border rounded" />
              </div>

              
              {/* Sort */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
                <select className="w-full p-2 border rounded">
                  <option value="newest">Newest First</option>
                  <option value="popular">Most Liked</option>
                  <option value="comments">Most Commented</option>
                </select>
              </div>

              {/* Apply Filters Button */}
              <button className="mt-2 w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">
                Apply Filters
              </button>
            </div>


       </div>
    </>
  );
}
