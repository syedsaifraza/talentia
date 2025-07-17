import Image from "next/image";
import Navbar from "../../component/components/navbar";
import Link from "next/link";
import Sidebar from "@/component/components/sidebar";
import { Suspense } from "react";
import SponserCard from "@/component/SponserCard";
import CompanyTile from "@/component/components/CompanyTile";


export default function Layout({ children}: { children: React.ReactNode }) {
  
  return (
    <>
    <Suspense fallback={<h1>Loading</h1>}>
        <Navbar/>
    </Suspense>
    <div className="bg-[#f2f4f7] h-[91vh] overflow-scroll">
      
      <div className="w-full mx-auto px-2 flex justify-between">
        {/* Left Sidebar */}

        <div
          className="lg:w-1/4  gap-y-2 px-2"
          aria-label="Sidebar"
        > 
         <Sidebar/>

        </div>

        {/* Centered Content */}
        <main className=" w-full w-[100vw] lg:w-3/4 ">
          <div className="px-2">{children}</div>
        </main>

        

          
      </div>
    </div>
    </>
  );
}
