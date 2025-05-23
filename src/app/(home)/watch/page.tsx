export const dynamic = 'force-dynamic';
import { getPosts } from "@/utils/apis/post";
import Post from "@/component/components/post";
import { PostType } from "@/types/PostType";
import PostSkelatal from "@/component/skelatal/PostSkelatal";
import { cookies } from "next/headers";



export default async function WatchList() {
  let posts: PostType[] = [];

  try {
     
    const cookieStore = cookies();  // Get the cookie store
    const token = (await cookieStore).get('token');
    const res = await getPosts(token?.value||"no token");
    
    if (res && res.posts) {
      posts = res.posts;
    }
  } catch (error) {
    console.error("Failed to fetch posts:", error);
  }

  return (
    <>
    
    <div className="mt-4">
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
              .map((post, id) => <Post post={post} key={id} />)}
        </ul>
      )}
    </div>
    </>
  );
}

