"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

interface AvatarProps {
  imageUrl?: string; // Optional image URL
  size?: number; // Default size is 40px
}

const DefaultAvatar: React.FC<AvatarProps> = ({ imageUrl, size = 40 }) => {
  const defaultImage = "https://randomuser.me/api/portraits/men/69.jpg";
  const user = useSelector((state: any) => state.auth.user);
  const userInfo = useSelector((state:any)=>state.auth.userInfo);

  // Get the first letter of the user's name (if available)
  const firstLetter = user?.name ? user.name.charAt(0).toUpperCase() : "?";
  
  return (
    <>
      {imageUrl ? (
        <Image
          src={imageUrl || defaultImage}
          alt="User Avatar"
          width={size}
          height={size}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            cursor: "pointer",
          }}
        />
      ) : (
        
        <div
          style={{
            width: size,
            height: size,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#3498db",
            color: "#fff",
            fontSize: size * 0.5,
            fontWeight: "bold",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        >
          {firstLetter}
        </div>
      )}
      
    </>
  );
};

export default DefaultAvatar;
