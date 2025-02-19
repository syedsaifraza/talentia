"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface AvatarProps {
  imageUrl?: string; // Optional image URL
  size?: number; // Default size is 40px
}

const DefaultAvatar: React.FC<AvatarProps> = ({ imageUrl, size = 40 }) => {
  const defaultImage = "https://randomuser.me/api/portraits/men/69.jpg";

  return (
    <Link href="/account/profile">
      <Image
        src={imageUrl || defaultImage} // Use provided image or fallback
        alt="User Avatar"
        width={size}
        height={size}
        style={{
          borderRadius: "50%",
          objectFit: "cover",
          cursor: "pointer",
        }}
      />
    </Link>
  );
};

export default DefaultAvatar;
