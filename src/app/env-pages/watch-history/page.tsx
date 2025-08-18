export const dynamic = 'force-dynamic';

import { getPosts } from "@/utils/apis/post";
import Post from "@/component/components/post";
import { PostType } from "@/types/PostType";
import PostSkelatal from "@/component/skelatal/PostSkelatal";
import TalentsView from "@/component/components/TalentsView";
import OgImageLoader from "@/component/components/OgImageLoader";
import { fetchUserProfileAndInstitute } from "@/utils/apis/auth";
import { FaLayerGroup } from "react-icons/fa6";
import { BiImages, BiSolidVideos } from "react-icons/bi";
import { RiFilmAiFill } from "react-icons/ri";
import { cookies } from "next/headers";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import NoPOst from "@/component/components/NoPost";




export default async function PostList({ searchParams }: { searchParams?: { filter?: string } }) {


    const activeFilter = searchParams?.filter || 'all';
    const cookieStore = cookies();
    const token = (await cookieStore).get("token");
  
    // Fetch user profile data
    let videosWatchIds: string[] = [];
    try {
      const { profileData } = await fetchUserProfileAndInstitute(token?.value ?? "");
      console.log(profileData)
      videosWatchIds = profileData?.data?.videosWatch
 ?? [];
    } catch (error) {
      console.error("Failed to fetch user profile:", error);
    }
  
    // Fetch all posts
    let posts: PostType[] = [];
    try {
      const res = await getPosts(token?.value ?? "");
      if (res?.posts) {
        posts = res.posts.filter((post): post is PostType => post.isDeleted !== true);
      }
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }

      // Filter posts to only include saved ones
  const videosWatch = posts.filter((post:any) => videosWatchIds.includes(post.id));


  const filterPosts = (type: string) => {
    switch (type) {
      case 'videos':
        return videosWatch.filter(post => 
          post.fileURL && post.fileURL.toLowerCase().endsWith('.mp4')
        );
      
      case 'reels':
        // Assuming reels are also MP4 files - adjust as needed
        return [];
      
      default:
        return videosWatch;
    }
  };

  
    // Function to filter posts by typ
  
    const menuItems = [
      {
        id: "all",
        label: "All",
        icon:<FaLayerGroup />
      },
      {
        id: "videos",
        label: "Videos",
        icon:<BiSolidVideos />
      },
      {
        id: "reels",
        label: "Reels",
        icon:<RiFilmAiFill />
      },
    ];
  

  const filteredPosts = filterPosts(activeFilter);


  return (
    <div className="flex flex-row">
      <div className="pt-2 flex justify-center items-center flex-1">

         <div className="w-[500px]">
        {filteredPosts.length === 0 ? (
          <div key="skeleton-container">
            <NoPOst value={activeFilter}/>
          </div>
        ) : (
          <div key="posts-container">
            {filteredPosts.map((post, idz) => 
              (idz === 0 || idz % 3 === 0) ? 
                <div key={`wrapper-${post.id}`}>
                  <Post post={post} ogImageLoader={<OgImageLoader text={post.text}/>} />
                </div> : 
                <Post key={post.id} post={post} ogImageLoader={<OgImageLoader text={post.text}/>} />
            )}
          </div>
        )}
        </div>
      </div>
         <div className="w-[300px] h-full">
        <div className="fixed bg-white right-0 w-[300px] flex flex-col h-screen overflow-y-auto">
          <div className="flex items-center p-4 border-b border-gray-200 justify-between sticky top-0 bg-white z-10">
            <h2 className="text-xl font-semibold text-gray-800">Watch</h2>
            <Link href="/home" className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 mr-2">
              <IoClose size={24} className="text-gray-600" />
            </Link>
          </div>

          <aside className="space-y-2 w-[300px] p-[1rem]">
            {menuItems.map((filter) => (
              <Link
                key={filter.id}
                
                className={`flex items-center text-white p-3 rounded-lg cursor-pointer transition-colors duration-200 ${
                  activeFilter === filter.id 
                    ? "bg-blue-50 border border-blue-100"
                    : "hover:bg-gray-50"
                }`}
                href={`?filter=${filter.id}`}
              >
                <div className={`p-2 rounded-full mr-3 ${
              activeFilter === filter.id ? "bg-blue-500" : "bg-gray-200"
            }`}>

              <div className={`${
              activeFilter === filter.id ? "text-white" : "text-black"
            }`} >
                {filter.icon}
              </div>
              </div>

               <span className={`font-medium ${
              activeFilter === filter.id  ? "text-blue-600" : "text-gray-700"
            }`}>
              {filter.label}
            </span>
                
              </Link>
            ))}
          </aside>
        </div>
      </div>
    </div>
  );
}