"use client";

import Link from "next/link";
import React from "react";

interface AvatarProps {
  name: string;
  size?: number; // Default size is 50px
}

const getColor = (name: string) => {
  const colors = ["#FF5733", "#33A1FF", "#33FF57", "#FF33A1", "#A133FF", "#FFC300"];
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
};

const DefaultAvatar: React.FC<AvatarProps> = ({ name, size = 40 }) => {
  const firstLetter = name ? name.charAt(0).toUpperCase() : "?";
  const bgColor = getColor(name);

  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor: bgColor,
        backgroundImage:`url('https://randomuser.me/api/portraits/men/69.jpg')`,
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        fontSize: size / 2.5,
        fontWeight: "bold",
        textTransform: "uppercase",
      }}
    >
       <Link href="/account/profile">{firstLetter}</Link>
      
    </div>
  );
};

export default DefaultAvatar;
