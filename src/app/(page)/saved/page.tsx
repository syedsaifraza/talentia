export const dynamic = 'force-dynamic';

import { getPosts } from "@/utils/apis/post";
import Post from "@/component/components/post";
import { PostType } from "@/types/PostType";
import PostSkelatal from "@/component/skelatal/PostSkelatal";
import { cookies } from "next/headers";
import TalentsView from "@/component/components/TalentsView";
import OgImageLoader from "@/component/components/OgImageLoader";
import { fetchUserProfileAndInstitute } from "@/utils/apis/auth";

export default async function PostList() {
  const cookieStore = cookies();
const token = (await cookieStore).get("token");  

  let savedPostIds: string[] = [];
  try {
    const { profileData } = await fetchUserProfileAndInstitute(token?.value ?? "");
    savedPostIds = profileData?.data?.savedPosts ?? [];
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
  const savedPosts = posts.filter((post:any) => savedPostIds.includes(post.id));

  return (
    <div className="flex flex-row">
      <div className="border-l-2 border-gray-600">
        {savedPosts.length === 0 ? (
          <div key="skeleton-container">
            <PostSkelatal key="cas1" />
            <PostSkelatal key="cas2" />
          </div>
        ) : (
          <div key="posts-container">
            {savedPosts.map((post, idz) => 
              (idz === 0 || idz % 3 === 0) ? 
                <div key={`wrapper-${post.id}`}>
                  <Post post={post} ogImageLoader={<OgImageLoader text={post.text}/>} />
                </div> : 
                <Post key={post.id} post={post} ogImageLoader={<OgImageLoader text={post.text}/>} />
            )}
          </div>
        )}
      </div>
      <div className="w-[400px] border-l-2 border-gray-600">
        {/* Content for the right sidebar */}
      </div>
    </div>
  );
}