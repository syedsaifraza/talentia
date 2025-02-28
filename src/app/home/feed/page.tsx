import AddPost from "../components/AddPost";
import Post from "../components/post";
import ReelsScroller from "../components/ReelsScroller";

export default function Feed() {
  return (
     
    <div className="">
      <AddPost/>
      <ReelsScroller  />
       
      <Post />
      <Post />
      <Post />
    </div>
     
  );
}
