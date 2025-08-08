"use client"
import Image from "next/image";
import Navbar from "../../component/components/navbar";
import Link from "next/link";
import Sidebar from "@/component/components/sidebar";
import { Suspense } from "react";
import SponserCard from "@/component/SponserCard";
import CompanyTile from "@/component/components/CompanyTile";


export default function Layout({ children}: { children: React.ReactNode }) {
  

  const handleScroll = (e:any)=>{
   const container = e.currentTarget;
  const videos = container.querySelectorAll('video');
  videos.forEach((video:any) => {
    const rect = video.getBoundingClientRect();
    const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
    if (isVisible) { 
      video.play(); 
    } else {
      video.pause();
    }
  });
  }

  return (
    <>
    <Suspense fallback={<h1>Loading</h1>}>
        <Navbar/>
    </Suspense>
    <div className="overflow-hidden">
      
      <div className="w-full mx-auto gap-3  flex justify-between overflow-hidden">
        {/* Left Sidebar */}

        <div 
          className="lg:w-[55vw] py-3 pl-5 pr-3 box-border  overflow-hidden h-[89vh] gap-y-2"
          aria-label="Sidebar"
        > 
         <Sidebar/>
        </div>

        {/* Centered Content */}

        <main  className=" w-full  p-2  overflow-scroll h-[89vh]"  onScroll={handleScroll}>
          <div className=" rounded-lg ">{children}</div>
        </main>

        {/* Right Sidebar */}

         <div className="relative flex-col  p-2 overflow-scroll   lg:w-[60vw] md:w-0 h-[89vh] ">

          
          
            
         {/* <h4 className=" font-bold sticky top-50">Sponsers</h4> */}
         <SponserCard image="https://content.acetians.in/uploads/itacademy.jpg"
          name="Acetians IT Academy" description="At Acetians IT Academy, you won’t just attend classes—you’ll actively build, create, and solve real-world challenges" link="https://acetiansitacademy.com/"/>
          
          
        <SponserCard image="https://content.acetians.in/uploads/1728210174960.jpg"
          name="Acetians Technologies" description="Join our dynamic hashtag#team and help shape the hashtag#future of autonomous driving, hashtag#robotics, and #AI" link="/"/>
           
        <h4 className="p-1 mt-2 mb-2 font-bold">Pages as per your interest</h4>
        
        <CompanyTile  logo={"https://content.acetians.in/uploads/concentrix_logo.jpg"} name={"Concentrix"} industry="IT Industry" link="https://acetians.com"/>

        <CompanyTile  logo={"https://content.acetians.in/uploads/deloitte_logo.jpg"} name={"Deloitte"} industry="Fintech Industry" link="https://acetians.com"/>
        
       
         
         </div>
      </div>
    </div>
    </>
  );
}
