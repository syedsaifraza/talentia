export const dynamic = 'force-dynamic';
import { getPosts } from "@/utils/apis/post";
import { PostType } from "@/types/PostType";
import { cookies } from "next/headers";
import FeedPostList from "@/component/components/connectionsComponents/SocialList";
import FilterForm from "@/component/components/connectionsComponents/ConnectionSideBar";


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
    
    <div className="flex flex-row overflow-hidden h-[89.8vh]">
       <FilterForm/>
       <FeedPostList posts={posts} /> 
    </div>
  );
}