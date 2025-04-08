import { getPosts } from "@/utils/apis/post";
import Post from "@/component/components/post";
import { PostType } from "@/types/PostType";
import PostSkelatal from "@/component/skelatal/PostSkelatal";
import { cookies } from "next/headers";
import AddPost from "@/component/components/AddPost";
import ReelsScroller from "@/component/components/ReelsScroller";
interface PostListProps {
  typeOf?: "all" | "video";
}

export default async function PostList() {
  let posts: PostType[] = [];

  try {
    const cookieStore = cookies();
    const token = (await cookieStore).get("token")?.value;
     
    const res = await getPosts(token||"");
    
    if (res && res.posts) {
      posts = res.posts;
    }
  } catch (error) {
    console.error("Failed to fetch posts:", error);
  }

  return (
    <>
    <br/>
    <AddPost/>
    <div className="mt-2 mb-2">
    <ReelsScroller limit={6} size="large" />
    </div>
    
    <div className="mt-1">
      

      {posts.length === 0 ? (
        <>
          <PostSkelatal key={1} />
          <PostSkelatal key={2} />
        </>
      ) : (
        <ul>
          {
            posts.map((post, id) => <Post post={post} key={id} />)}

          
        </ul>
      )}
    </div>
    </>
  );
}
