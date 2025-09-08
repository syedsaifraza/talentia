"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import NameAvatar from "./nameAvatar";

interface AvatarProps {
  imageUrl?: string; // Optional image URL
  size?: number; // Default size is 40px
}

const DefaultAvatar: React.FC<AvatarProps> = ({ size = 40 }) => {
  const defaultImage = "https://randomuser.me/api/portraits/men/69.jpg";
  const user = useSelector((state: any) => state.auth.user);
  const userState= useSelector((state:any)=>state.auth.userInfo);

  // Get the first letter of the user's name (if available)
  const firstLetter = user?.name ? user.name.charAt(0).toUpperCase() : "?";
  
  return (
    <>

      
      {userState==null ?<div className="w-10 h-10 bg-gray-300 rounded-full"></div>
: (userState.profilePhoto==undefined && userState.logoURL==undefined)?<NameAvatar name={userState.name} size={size} /> : 
        // <Image
        // className="rounded-full"
        // src={userState.profilePhoto||userState.logoURL} height={size} width={size} alt={userState.name}/> 


       
                    <Image
                      src={userState.profilePhoto||userState.logoURL}
                      width={size}
                      height={size}
                      alt="User Avatar"
                      className="rounded-full object-cover aspect-square"
                    />
                 
        
        
        
        }  
        
      
      
    </>
  );
};

export default DefaultAvatar;
