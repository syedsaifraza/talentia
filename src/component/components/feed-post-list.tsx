
"use client"
import { PostType } from "@/types/PostType";
import PostSkelatal from "../skelatal/PostSkelatal";
import Post from "./post";
import OgImageLoader from "./OgImageLoader"; 
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import NoPOst from "@/component/components/NoPost"
export default function FeedPostList({posts}:{posts:PostType[]}){
  const params = useSearchParams();
  const tab = params.get('tab') || 'all';




  // Get user connections from Redux
  const followings = useSelector((state: any) => state.auth.followings || []);
  const followers = useSelector((state: any) => state.auth.followers || []);
  const followersIds: string[] = followers.map((follower: any) => follower.uid);
  const connections = followings.filter((following: any) =>
    followersIds.includes(following.uid)
  );
  const connectionIds = connections.map((conn: any) => conn.uid);

  const filteredPosts = useMemo(() => {
    let result = [...posts];

    // First filter by tab (All, Connections, Communities, Pages)
    if (tab === 'connections') {
      result = result.filter(post => 
        post.user && connectionIds.includes(post.user.uid))
    } 

    if (tab === 'following') {
     
      const followingIds = followings.map((f: any) => f.uid);
      result = result.filter(post => 
        post.user && followingIds.includes(post.user.uid));
    }


    else if (tab === 'communities') {
      result = []; 
    } 


    else if (tab === 'pages') {
      result = [];
    }
    return result;
  }, [posts, tab, connectionIds]);

  return (
    <div className="flex-1 overflow-y-auto pt-4">
      <div className="max-w-2xl mx-auto px-4 w-[20vw]">
        <div className="w-[500px]">
  {filteredPosts.length === 0 ? (
          <div>
            <NoPOst value={`${tab} Post`}/>
          </div>
        ) : (
          <div key={Math.random()*1000} className="space-y-6">
            {filteredPosts.map((post, idz) => 
              (idz == 0 || idz % 3 == 0) ? 
              <div key={idz}>

                {/* <button onClick={()=>console.log(tab)}>hello</button> */}
                <Post post={post} ogImageLoader={
                  <Suspense fallback={"Loading"}></Suspense>} 
                />
              </div> :   
              <div key={"as"+idz}>
                <Post post={post} ogImageLoader={
                  <Suspense fallback={"Loading"}></Suspense>} 
                />
              </div>
            )}
          </div>
        )}
        </div>
      
      </div>
    </div>
  );
}