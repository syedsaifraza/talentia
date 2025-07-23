"use client"
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import PostAllInOne from "./PostAllInOne";
import DefaultAvatar from "./defaultAvatar";
import { IoMdPhotos, IoMdVideocam } from "react-icons/io";
import { MdEmojiEmotions } from "react-icons/md";
import Image from "next/image";


export default function AddPost(){
const [postModal,setPostModal]=useState(false);
     return (
         <>
      <div className="bg-white  rounded-[5px] p-4 flex flex-col gap-5">
      <div className="flex flex-col justify-center " >
       <div className="flex items-center justify-center space-x-3 ">
       <DefaultAvatar size={40}/>
         <input
          type="text"
          placeholder="What's on your mind?"
          className="w-full border-none focus:ring-0 bg-gray-100 rounded-full px-2 py-2 text-sm"
            
          onClick={() => setPostModal(true)}
        />
      </div> 
      </div>
      <div className="flex justify-between items-center">
        <button className="flex items-center p-3 justify-center  rounded-md space-x-2 hover:bg-gray-100" onClick={() => setPostModal(true)}>
         <Image width={20} height={20} alt="Photo Icon"
         src="https://static.xx.fbcdn.net/rsrc.php/v4/y7/r/Ivw7nhRtXyo.png"/>
 
          <span className="text-sm text-gray-600 font-bold">Photo</span>
        </button>

        <button className="flex items-center p-3 justify-center  rounded-md space-x-2 hover:bg-gray-100" onClick={() => setPostModal(true)}>
          <Image width={20} height={20} src="https://static.xx.fbcdn.net/rsrc.php/v4/yr/r/c0dWho49-X3.png" alt="Video Icon" />
          <span className="text-sm text-gray-600 font-bold">Video</span>
        </button>

        <button className="flex items-center p-3 justify-center rounded-md space-x-2 hover:bg-gray-100" onClick={() => setPostModal(true)}>
          <MdEmojiEmotions />
          <span className="text-sm text-gray-600 font-bold">Feeling/Activity</span>
        </button>

        <button className="flex items-center p-3 justify-center  rounded-md space-x-2 hover:bg-gray-100" onClick={() => window.location.href="/reels"  }>
         <Image width={20} height={20} alt="Reels Icon"
         src="https://content.acetians.in/uploads/reels.png"/>
 
          <span className="text-sm text-gray-600 font-bold">Talent</span>
        </button>
      </div>

      </div>
         
        {postModal==true?
        <PostAllInOne postModal={postModal} close={()=>setPostModal(false)} />
        :""}
        
        </>
     );
}
