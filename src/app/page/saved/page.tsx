"use client";

 
import Post from "@/app/home/components/post";

export default function SavedPage() {
  const samplePosts = [
    {
      id: 1,
      text: "Enjoying a beautiful sunset at the beach! 🌅 #NatureLover",
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
      text: "Just finished a 10k run! Feeling amazing. 🏃‍♂️ #FitnessGoals",
    
      user: {
        name: "Jane Doe",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      },
      timestamp: "2023-10-02T12:00:00Z",
    },
    {
      id: 3,
      text: "Exploring the mountains today. The view is breathtaking! 🏔️ #AdventureTime",
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
    {
      id: 4,
      text: "Cooking up a storm in the kitchen today. Who's hungry? 🍳 #Foodie",
      media: {
        type: "image",
        url: "https://picsum.photos/500/500.jpg?random=4",
      },
      user: {
        name: "Bob",
        avatar: "https://randomuser.me/api/portraits/men/70.jpg",
      },
      timestamp: "2023-10-04T12:00:00Z",
    },
    {
      id: 5,
      text: "Check out this amazing street art I found downtown! 🎨 #UrbanArt",
      media: {
        type: "image",
        url: "https://picsum.photos/500/500.jpg?random=5",
      },
      user: {
        name: "Charlie",
        avatar: "https://randomuser.me/api/portraits/men/71.jpg",
      },
      timestamp: "2023-10-05T12:00:00Z",
    },
    {
      id: 6,
      text: "Weekend vibes with my favorite playlist. 🎶 #MusicLover",
      media: {
        type: "video",
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
      },
      user: {
        name: "Diana",
        avatar: "https://randomuser.me/api/portraits/women/72.jpg",
      },
      timestamp: "2023-10-06T12:00:00Z",
    },
    {
      id: 7,
      text: "Morning coffee and a good book. Perfect start to the day. ☕📚 #Relaxation",
      media: {
        type: "image",
        url: "https://picsum.photos/500/500.jpg?random=7",
      },
      user: {
        name: "Eve",
        avatar: "https://randomuser.me/api/portraits/women/73.jpg",
      },
      timestamp: "2023-10-07T12:00:00Z",
    },
    {
      id: 8,
      text: "Throwback to my last vacation. Can't wait to travel again! ✈️ #Wanderlust",
      media: {
        type: "image",
        url: "https://picsum.photos/500/500.jpg?random=8",
      },
      user: {
        name: "Frank",
        avatar: "https://randomuser.me/api/portraits/men/74.jpg",
      },
      timestamp: "2023-10-08T12:00:00Z",
    },
    {
      id: 9,
      text: "Game night with friends! 🎲 #FunTimes",
      media: {
        type: "image",
        url: "https://picsum.photos/500/500.jpg?random=9",
      },
      user: {
        name: "Grace",
        avatar: "https://randomuser.me/api/portraits/women/75.jpg",
      },
      timestamp: "2023-10-09T12:00:00Z",
    },
    {
      id: 10,
      text: " Just adopted a new puppy! Meet Max. 🐶 #DogLoverJust adopted a new puppy! Meet Max. 🐶 #DogLoverJust adopted a new puppy! Meet Max. 🐶 #DogLoverJust adopted a new puppy! Meet Max. 🐶 #DogLoverJust adopted a new puppy! Meet Max. 🐶 #DogLoverJust adopted a new puppy! Meet Max. 🐶 #DogLoverJust adopted a new puppy! Meet Max. 🐶 #DogLoverJust adopted a new puppy! Meet Max. 🐶 #DogLoverJust adopted a new puppy! Meet Max. 🐶 #DogLoverJust adopted a new puppy! Meet Max. 🐶 #DogLoverJust adopted a new puppy! Meet Max. 🐶 #DogLoverJust adopted a new puppy! Meet Max. 🐶 #DogLover",
    
      user: {
        name: "Hank",
        avatar: "https://randomuser.me/api/portraits/men/76.jpg",
      },
      timestamp: "2023-10-10T12:00:00Z",
    },
  ];

  return (
    <div className=" flex flex-row gap-10 mt-2 justify-center items-center w-[75vw]">
      <div className="flex flex-1 flex-col gap-4 justify-center items-center ">
        <h1 className="bg-white p-2 rounded-[10px] font-bold w-[60vw]">Saved</h1>
        {samplePosts.map((post,index) => (
          <div key={index} className=" w-[60vw]">
            {/* <Post key={post.id} post={post} /> */}
          </div>
        ))}
      </div>
    </div>
  );
}
