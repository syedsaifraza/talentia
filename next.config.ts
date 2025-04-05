import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['flowbite.s3.amazonaws.com', 'storage.googleapis.com','content.acetians.in','talentia.co.in','randomuser.me','via.placeholder.com','picsum.photos','source.unsplash.com','media.flaticon.com','cdn-icons-png.flaticon.com','images.unsplash.com','static.xx.fbcdn.net','cdn3d.iconscout.com'],
  },
  eslint:{
    ignoreDuringBuilds: true,
  },
  fs: 'empty',
  child_process: 'empty',
  
};

export default nextConfig;
