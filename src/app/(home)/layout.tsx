"use client"
import Image from "next/image";
import Navbar from "../../component/components/navbar";
import Link from "next/link";
import Sidebar from "@/component/components/sidebar";
import { Suspense } from "react";
import SponserCard from "@/component/SponserCard";
import CompanyTile from "@/component/components/CompanyTile";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";


export default function Layout({ children}: { children: React.ReactNode }) {
  const currentPath = usePathname();

    const appState = useSelector((state: any) => state.auth);
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
    <div className="overflow-hidden ">
      
      <div id="default-sidebar"  className="w-full mx-auto gap-3   flex " >
        {/* Left Sidebar */}

        <div 
          className="lg:w-[330px]  box-border  overflow-hidden h-[90vh] gap-y-2"
          aria-label="Sidebar"
        > 
         <Sidebar currentPath={currentPath} appState={appState}/>
        </div>

        {/* Centered Content */}

        <main   className=" p-2 flex-1 overflow-y-scroll h-[90vh] pl-[40px]"  onScroll={handleScroll}>
          <div className=" rounded-lg ">{children}</div>
        </main>

        {/* Right Sidebar */}

     
      </div>
    </div>
    </>
  );
}
