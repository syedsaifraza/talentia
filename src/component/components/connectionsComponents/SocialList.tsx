"use client";
import { PostType } from "@/types/PostType";
import PostSkelatal from "../../skelatal/PostSkelatal";
import Post from "../post";
import OgImageLoader from "../OgImageLoader";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import NoPOst from "@/component/components/NoPost";
import NoData from "../NoData";
import ProfileCards from "../ProfileCards";
export default function FeedPostList() {
  const params = useSearchParams();
  const tab = params.get("tab") || "connections";
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(tab);

  // Get user connections from Redux
  const followings = useSelector((state: any) => state.auth.followings || []);
  const followers = useSelector((state: any) => state.auth.followers || []);
  const followersIds: string[] = followers.map((follower: any) => follower.uid);
  const connections = followings.filter((following: any) =>
    followersIds.includes(following.uid)
  );
   const appState = useSelector((state:any)=>state.auth.user);

  // const followRequest = [];


  // Show loading spinner for 1s when tab changes
  useEffect(() => {
    if (tab !== activeTab || tab==="connections") {
      setLoading(true);
      setActiveTab(tab);
      const timer = setTimeout(() => setLoading(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [tab]);
 

  return (
    <div className="flex-1 overflow-y-auto">
      <div className=" w-[20vw]">
        <div className="">
          {loading ? (
            <div className="absolute top-20 left-20 w-full flex justify-center ">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : connections.length === 0 ? (
            <div>
              <div className="flex absolute top-20 left-20 w-full justify-center  h-[100vh]">
                <div className=" animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            </div>
          ) : (
            <div key={Math.random() * 1000} className="space-y-6">
              {tab === "connections" && (
                <ProfileCards tab={tab} data={connections} />
              )}
              {tab === "following" && (
                <div>
                  {followings.length < 0 && <NoData />}
                  <ProfileCards tab={tab} data={followings} />
                </div>
              )}
              {tab === "followers" && (
                <div>
                  <div>
                    {followers.length < 1 && <NoData />}
                    <ProfileCards
                    followings={followings}
                     appState={appState} followers={followers} tab={tab} data={followers} />
                  </div>
                </div>
              )}
              {tab === "request" && (
                <div className="p-4 flex  flex-1">
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden w-48">
                    <div className="relative">
                      <img
                        src={
                          "https://content.acetians.in/uploads/d%20u%20m%20m%20y%20-%20u%20s%20er%20-%20male.jpg"
                        }
                        alt={"ProfileImage"}
                        className="w-full h-40 object-cover"
                      />
                    </div>

                    {/* Card Content */}
                    <div className="p-3">
                      {/* Name */}
                      <h3 className="font-semibold text-base text-gray-900 mb-4 leading-tight">
                        {" "}
                        Suraj Kabir
                      </h3>

                      {/* Action Buttons */}
                      <div className="space-y-2">
                        <button className="w-full bg-blue-700 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 text-sm mb-3">
                          Confirm
                        </button>
                      </div>
                      <div className="space-y-2">
                        <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors duration-200 text-sm">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
