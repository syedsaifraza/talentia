// Force Next.js to treat this as a dynamic server-rendered route
export const dynamic = 'force-dynamic';

import { getPosts } from "@/utils/apis/post";
import Post from "@/component/components/post";
import { PostType } from "@/types/PostType";
import PostSkelatal from "@/component/skelatal/PostSkelatal";
import { cookies } from "next/headers";
import TalentsView from "@/component/components/TalentsView";
import NotFoundPage from "@/app/not-found";
import EmptyState from "./EmptyState";
import OgImageLoader from "./OgImageLoader";
import { fetchUserProfileAndInstitute } from "@/utils/apis/auth";

export default async function UserPosts({id}:{id:string}) {
  const cookieStore = cookies();
  const token = (await cookieStore).get("token");  

  let posts: PostType[] = [];

  try {
    const res = await getPosts(token?.value || "no token");

    if (res && res.posts) {
      posts = res.posts.filter((f)=>f.user.user_id==id);
      posts = posts.filter((p)=>p.isDeleted!=true);
      
    }
  } catch (error) {
    console.error("Failed to fetch posts:", error);
  }


    const { profileData } =  await fetchUserProfileAndInstitute(token?.value ?? "")

  return (
    <>
       
      <div className="">
        {posts.length === 0 ? (
          <div className="" key={Math.random()*1000}>
             
            <EmptyState title="No Posts Found"/>
          </div>
        ) : (
          <div key={Math.random()*1000}>
            {posts.map((post, idz) => 
            <>
          
            <Post profileData={profileData} post={post} ogImageLoader={<OgImageLoader text={post.text}/>} /></>
             )}
          </div>
        )}
      </div>
    </>
  );
}
