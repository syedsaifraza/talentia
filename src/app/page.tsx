"use client"
import Image from "next/image";
import { useEffect } from "react";
export default function Home(){
  useEffect(()=>{
    window.location.href="/login";
  },[])
  return <div style={{height:'100vh',width:'100vw',display:'flex',justifyContent:'center',alignItems:'center'}}><Image width={300} height={100} alt="Logo" src="https://content.acetians.in/uploads/logo%20(2).png"/></div>;
}