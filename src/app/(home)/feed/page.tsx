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

export default async function PostList() {
  const cookieStore = cookies();
  const token = (await cookieStore).get("token");  

  let posts: PostType[] = [];

  try {
    const res = await getPosts(token?.value || "no token");

    if (res && res.posts) {
      posts = res.posts;
    }
  } catch (error) {
    console.error("Failed to fetch posts:", error);
  }

  return (
    <>
      <br />
      <AddPost />
      <div className="mt-2 mb-2">
        <ReelsScroller limit={6} size="large" />
      </div>

      <div className="mt-1">
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
            <Post post={post}  />
            </div>:<Post post={post}/>
             )}
          </div>
        )}
      </div>
    </>
  );
}
