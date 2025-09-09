"use client"
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import PostAllInOne from "./PostAllInOne";
import DefaultAvatar from "./defaultAvatar";
import { IoMdPhotos, IoMdVideocam } from "react-icons/io";
import { MdEmojiEmotions } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";


import Photo from "../../assets/Add-Reels-Photo.png"
import Smile from "../../assets/Add-Reels-Smile.png"
import Video from "../../assets/Add-Reels-Video.png"
import Talents  from "../../assets/Add-Reels-Talent.png";


export default function AddPost(){
const [postModal,setPostModal]=useState(false);
     return (
         <>
      <div  className="rounded-[5px] p-4 flex flex-col gap-5" style={{backgroundColor:"#fefefe",boxShadow: "0px 2px 3px 1px rgba(0, 0, 0, 0.1)"}}>
      <div className="flex flex-col justify-center " >
       <div className="flex items-center justify-center space-x-3 ">
       <DefaultAvatar size={50}/>
         <input
          type="text"
          placeholder="What's on your mind?"
          style={{color:"#65686c",fontSize:"17px"}}
          className="w-full border-none focus:ring-0 bg-[#f0f2f5] rounded-full px-5 py-4 text-sm"
            
          onClick={() => setPostModal(true)}
        />
      </div> 
      </div>
      <div className="flex justify-between items-center">
        <button className="flex items-center p-3 justify-center  rounded-md space-x-2 hover:bg-gray-100" onClick={() => setPostModal(true)}>
         <Image className="object-contain" width={20} height={20} alt="Photo Icon"
         src={Photo}/>
 
          <span className="text-sm text-gray-600 font-bold">Photo</span>
        </button>

        <button className="flex items-center p-3 justify-center  rounded-md space-x-2 hover:bg-gray-100" onClick={() => setPostModal(true)}>
          <Image width={20} height={20} src={Video} alt="Video Icon" />
          <span className="text-sm text-gray-600 font-bold">Video</span>
        </button>

        <button className="flex items-center p-3 justify-center rounded-md space-x-2 hover:bg-gray-100" onClick={() => setPostModal(true)}>
          <Image  alt="Feel Icon" width={20} height={20} src={Smile}/>
          <span className="text-sm text-gray-600 font-bold">Feeling/Activity</span>
        </button>

        <Link href={"/reels/add-reels"} className="flex items-center p-3 justify-center  rounded-md space-x-2 hover:bg-gray-100"
        //  onClick={() => window.location.href="/reels/add-reels"  }
         >
         <Image width={20} height={20} alt="Reels Icon"
         src={Talents}/>
 
          <span className="text-sm text-gray-600 font-bold">Talent</span>
        </Link>
      </div>

      </div>
         
        {postModal==true?
        <PostAllInOne postModal={postModal} close={()=>setPostModal(false)} />
        :""}
        
        </>
     );
}
