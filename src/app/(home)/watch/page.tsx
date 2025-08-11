export const dynamic = 'force-dynamic';
import { getPosts } from "@/utils/apis/post";
import Post from "@/component/components/post";
import OgImageLoader from "@/component/components/OgImageLoader";
import { PostType } from "@/types/PostType";
import PostSkelatal from "@/component/skelatal/PostSkelatal";
import { cookies } from "next/headers";
import { fetchUserProfileAndInstitute } from "@/utils/apis/auth";
import { AdComponents } from "@/component/components/adComponents";



export default async function WatchList() {
  let posts: PostType[] = [];

    const cookieStore = cookies();  // Get the cookie store
    const token = (await cookieStore).get('token');
  

  try {
     
  
    const res = await getPosts(token?.value||"no token");
    
    if (res && res.posts) {
      posts = res.posts;
    }
  } catch (error) {
    console.error("Failed to fetch posts:", error);
  }
//  const handleScroll = (e:any) => {
// 		 alert("I am scrolling")
// 	};

  const { profileData } =  await fetchUserProfileAndInstitute(token?.value ?? "")
  return (
      <div className="flex flex-row  justify-around ">
    
    <div id="default-sidebar" className="" style={{width:"570px"}}>


      <h2 className="text-xl font-bold mb-2">Recent Watches</h2>

      {posts.length === 0 ? (
        <>
          <PostSkelatal key={1} />
          <PostSkelatal key={2} />
        </>
      ) : (
        <ul>
          

          {
            posts
              .filter((post) => post.fileURL && post.fileURL.includes(".mp4"))
              .map((post, id) => (
                <Post post={post} profileData={profileData} ogImageLoader={<OgImageLoader text={post.text} />} key={id} />
              ))}
        </ul>
      )}
    </div>

     <div className="w-[300px]">
          <AdComponents/>
        </div>
    </div>
  );
}

