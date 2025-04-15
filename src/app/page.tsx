"use client"
import Footer from "@/component/Footer";
import Main from "@/component/Main";
import Topbar from "@/component/Topnavbar";

import Image from "next/image";
import { useEffect } from "react";
export default function Home(){
  useEffect(()=>{
    // window.location.href="/login";
  },[])
 return <>
  <Topbar />
  <Main/>
  <Footer />
  </>;
}