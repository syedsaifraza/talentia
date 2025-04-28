"use client"
import Navbar from "@/component/components/navbar";
import Footer from "@/component/Footer";
import Main from "@/component/Main";
import NavbarWebsite from "@/component/NavbarWebsite"; 

import Image from "next/image";
import { useEffect, useState } from "react";
export default function Home(){
  const [hide, setHide] = useState("");
  useEffect(()=>{
    // window.location.href="/login";
  },[])
 return <>
  <Navbar/>
  <Main/>
  <Footer />
  </>;
}