import { GetServerSideProps } from "next";

import { PostType } from "@/types/PostType";
import FeedList from "@/component/FeedList";
import { Suspense } from "react";
import PostSkelatal from "@/component/skelatal/PostSkelatal";

interface FeedPageProps {
  posts: PostType[];
}

const Feed: React.FC<FeedPageProps> = ({ posts }) => {
  return (
    <div className="flex flex-col gap-4 mt-2">
      <h1>Feed</h1>
      <Suspense fallback={<PostSkelatal/> }>
      <FeedList />
      </Suspense>
      
    </div>
  );
};

// ✅ Fetch data on the server before rendering
export const getServerSideProps: GetServerSideProps = async () => {
  try { 
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    const data = await response.json();

    // 🟢 Transform API data to match PostType
    const posts: PostType[] = data.map((post: any) => ({
      id: post.id,
      text: post.body,
      media: null, // No media in placeholder API
      user: {
        name: `User ${post.userId}`,
        avatar: `https://randomuser.me/api/portraits/men/${post.userId}.jpg`,
      },
      timestamp: new Date().toISOString(),
    }));

    return { props: { posts } };
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return { props: { posts: [] } }; // Fallback to an empty list if error occurs
  }
};

export default Feed;
