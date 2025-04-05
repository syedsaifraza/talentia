"use client";
 
import { getPosts } from "@/utils/apis/post";
import { useEffect, useState } from "react";
import Post from "@/app/home/components/post";
export default function PostList({typeOf="all"}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await getPosts();
        console.log(res);
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
        <p>No posts yet.</p>
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
