"use client";

import Post from "@/app/home/components/post";
import { useState } from "react";

export default function FeedPage() {

  // Sample post data
  const samplePost = {
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
  };

  return (
    <div className="bg-white p-6 mx-auto rounded shadow-lg flex flex-row gap-2">
      <div className="flex flex-1 bg-slate-500">
        <Post post={samplePost} />
      </div>
    </div>
  );
}
