"use client"
export const dynamic = 'force-dynamic';
import { PostType } from "@/types/PostType";
import Post from "@/component/components/post";
import OgImageLoader from "@/component/components/OgImageLoader";
import { fetchUserProfileAndInstitute } from "@/utils/apis/auth";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";

export default  function PostList({posts}:any) {
 




  const params = useSearchParams();
  const tab = params.get('tab') || 'videos';

  // Fetch user profile data

  let savedPostIds =[];

  // Filter posts to only include saved ones
  const savedPosts = posts.filter((post:any) => savedPostIds.includes(post.id));



    const filteredPosts = useMemo(() => {
    switch (tab) {
      case 'videos':
        return savedPosts.filter(post => 
          post.fileURL && post.fileURL.toLowerCase().endsWith('.mp4')
        );
      case 'images':
        return savedPosts.filter(post => 
          post.fileURL && 
          (post.fileURL.toLowerCase().endsWith('.jpg') || 
           post.fileURL.toLowerCase().endsWith('.jpeg') || 
           post.fileURL.toLowerCase().endsWith('.png') ||
           post.fileURL.toLowerCase().endsWith('.gif'))
        );
      case 'reels':
        // Assuming reels are also MP4 files - adjust as needed
        return [];
      case 'text':
        return savedPosts.filter(post => 
          !post.fileURL || post.fileURL === null || post.fileURL === ''
        );
      default:
        return savedPosts;
    }
  },[posts,tab]);


  return (
    <div className="flex flex-row">
      <div className="pt-2 flex justify-center items-center flex-1">
        <div className="w-[500px]">
          {filteredPosts.length === 0 ? (
            <div className="text-center ">
              <div className="flex items-center justify-center bg-gray-100">
                <div className="w-full overflow-hidden rounded-lg bg-white shadow-lg">
                  {/* Illustration Header */}
                  <div 
                    className="relative flex h-48 items-center justify-center overflow-hidden p-4" 
                    style={{
                      backgroundImage: "url('https://content.acetians.in/uploads/Static-page-design-v0-by-Vercel-08-08-2025_12_04_PM.png')", 
                      backgroundPosition: "contain"
                    }}
                  >
                    {/* Heart */}
                  </div>
  
                  {/* Content Section */}
                  
                  <div className="p-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-800">No Saved available</h2>
                    <p className="mt-4 text-gray-600">
                      It looks like there are no posts to display at the moment. Please check back later for new content!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div key="posts-container">
              {filteredPosts.map((post, idz) => (
                <div key={post.id}>
                  {(idz === 0 || idz % 3 === 0) ? (
                    <div key={`wrapper-${post.id}`}>
                      <Post post={post} ogImageLoader={<OgImageLoader text={post.text}/>} />
                    </div>
                  ) : (
                    <Post post={post} ogImageLoader={<OgImageLoader text={post.text}/>} />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
     
      
    </div>
  );
}






// Force Next.js to treat this as a dynamic server-rendered route
// export const dynamic = 'force-dynamic';
// import { getPosts } from "@/utils/apis/post";
// import { PostType } from "@/types/PostType";
// import { cookies, headers } from "next/headers";
// import { IoSquare, IoVideocam, IoFilter } from "react-icons/io5";
// import { FiCalendar, FiHash, FiTrendingUp } from "react-icons/fi";
// import FeedPostList from "@/component/components/feed-post-list";
// import { Suspense } from "react";
// import FilterForm from "@/component/components/savedComponents/FilterForm";
// import SavedPostList from "@/component/components/savedComponents/saved-post-list"


// export default async function Saved() {
  
   
//   const cookieStore = cookies();
//   const token = (await cookieStore).get("token");  

//   let posts: PostType[] = [];


//   try {
//     const res = await getPosts(token?.value || "no token");

//     if (res && res.posts) {
//       posts = res.posts.filter((post)=>post.isDeleted!=true);
//       console.log("Fetched posts:", posts);
//     }
//   } catch (error) {
//     console.error("Failed to fetch posts:", error);
//   }



//   return (
    
//     <div className="flex flex-row overflow-hidden h-[89.8vh]">
//        <FilterForm/>
//        <SavedPostList posts={posts} /> 
//     </div>
//   );
// }