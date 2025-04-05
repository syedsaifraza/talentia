"use client"; // Ensure it's a client component

import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Use `next/navigation` in App Router
import { useDispatch, useSelector } from "react-redux";
// import { setUser, logout, setLoading } from "@/store/slices/authSlices";
import { fetchUser } from "@/utils/apis/auth"; 
import { RootState } from "@/store";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState ) => state.auth);

 

  if (loading) return <div style={{height:'100vh',width:'100vw',display:'flex',justifyContent:'center',alignItems:'center'}}><Image width={300} height={100} alt="Logo" src="https://content.acetians.in/uploads/logo%20(2).png"/></div>;

  return null;
}
