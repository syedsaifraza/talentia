"use client"

import { useState } from "react";
import { useSelector } from "react-redux"; 
import EditProfileFormBox from "./EditProfileFormBox";
import { addFollower } from "@/utils/apis/profile";
import { handleAccountRevalidation } from "./accountRevaliation";
import { FaMessage } from "react-icons/fa6";


export default function EditButton({userId,followers,followings}:{userId:string,followers:string[],followings:string[]}){
    const [counter,setCounter]=useState(1);
    const [sending,setSending]= useState(false);

    const followerUser = async(followerId:string)=>{
        setSending(true);
        await addFollower(followerId);
        await handleAccountRevalidation();
        setSending(false);
    }
    const appState = useSelector((state:any)=>state.auth.user);
    if(appState==null){
        return ;
    }
    if(appState.user_id!=userId){
        return  <> {followers.includes(appState.user_id!)? <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-normal">Following</button>:<button className="bg-blue-600 text-white px-4 py-2 rounded-md font-normal" onClick={()=>followerUser(userId)} disabled={sending}> {sending?"Please Wait...":"Follow"} </button>}
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md font-normal flex items-center"><FaMessage color="#000" /> Message</button>
        </> ;
    }
    return <>
    <EditProfileFormBox followers={followers} followings={followings} />
    </>
}