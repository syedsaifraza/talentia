"use client";
 
import { getPosts } from "@/utils/apis/post";
import { useEffect, useState } from "react";
import Post from "@/component/components/post";
import { PostType } from "@/types/PostType";
import PostSkelatal from "./skelatal/PostSkelatal";
import Cookies from "js-cookie";
export default function PostList({typeOf="all"}) {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = Cookies.get("token")
        const res = await getPosts(token||"");
        
        if (res && res.posts) {
          setPosts(res.posts);
        }
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-2">Recent Posts</h2>
      {posts.length === 0 ? (
      <>
        <PostSkelatal key={1}/>
        <PostSkelatal key={2}/></>
      ) : (
        <ul>
          {typeOf=="all" &&
          posts.map((post,id) => (
           <Post post={post} key={id}/>
          ))
        }

        {typeOf === "video" &&
          posts
            .filter((post) => post.fileURL && post.fileURL.includes(".mp4"))
            .map((post, id) => <Post post={post} key={id} />)}

                </ul>
              )}
    </div>
  );
}
