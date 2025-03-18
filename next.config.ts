import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['talentia.co.in','randomuser.me','via.placeholder.com','picsum.photos','source.unsplash.com','media.flaticon.com','cdn-icons-png.flaticon.com'],
  },
  eslint:{
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
