import { GetServerSideProps } from "next";
import { db } from "../lib/firebaseService" // Import Firestore Admin
import Post from "@/app/home/components/post";

interface PostType {
  id: string;
  text: string;
  media: {
    type: "image" | "video";
    url: string;
  } | null;
  user: {
    name: string;
    avatar: string;
  };
  timestamp: string;
}

export default function FeedList({ initialPosts }: { initialPosts: any }) {
 

   

  return (
    
   
       initialPosts.map((post:any) => (
         {post.text} 
      ))); 
    
  
}
 
export const getServerSideProps: GetServerSideProps = async () => {
  try {
     const snapshot = await db.collection("posts").orderBy("createdAt", "desc").get();

    const initialPosts = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as PostType[];

    return { props: { initialPosts } };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return { props: { initialPosts: [] } }; // Return empty array on error
  }
};
