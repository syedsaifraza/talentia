"use client";
import { useState } from "react";
import AddPost from "../components/AddPost"; 
import ReelsScroller from "../components/ReelsScroller"; 
import PostList from "@/component/FeedList";
import { useSelector } from "react-redux";

interface PostType {
  id: number;
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

export default function Feed() {
  
  const [posts, setPosts] = useState<PostType[]>([]);


  const addPost = (newPost: Omit<PostType, "id">) => {
   
    const postWithId: PostType = { ...newPost, id: Date.now() };
    setPosts([postWithId, ...posts]);
  };

  
  const samplePosts: PostType[] = [
    {
      id: 1,
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      media: {
        type: "image",
        url: "https://picsum.photos/500/500.jpg?random=1",
      },
      user: {
        name: "John Doe",
        avatar: "https://randomuser.me/api/portraits/men/69.jpg",
      },
      timestamp: "2023-10-01T12:00:00Z",
    },
    {
      id: 2,
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      media: {
        type: "image",
        url: "https://picsum.photos/500/500.jpg?random=2",
      },
      user: {
        name: "Jane Doe",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      },
      timestamp: "2023-10-02T12:00:00Z",
    },
    {
      id: 3,
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      media: {
        type: "image",
        url: "https://picsum.photos/500/500.jpg?random=3",
      },
      user: {
        name: "Alice",
        avatar: "https://randomuser.me/api/portraits/women/67.jpg",
      },
      timestamp: "2023-10-03T12:00:00Z",
    },
  ];

  const appState = useSelector((state:any)=>state.auth);
  return (
    <div className="flex flex-col gap-4 mt-2">
      <AddPost addPost={addPost} />
      <ReelsScroller />
      {appState.isAuthenticated==true && <PostList/> }
      

      
     
  
      
    </div>
  );
}