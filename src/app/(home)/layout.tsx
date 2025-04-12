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
      
      <div className="w-full mx-auto flex justify-between">
        {/* Left Sidebar */}

        <aside 
          className="lg:w-1/4  gap-y-2 px-2"
          aria-label="Sidebar"
        > 
         <Sidebar/>

        </aside>

        {/* Centered Content */}
        <main className=" w-full w-[100vw] lg:w-[40vw]   ">
          <div className="px-4 rounded-lg ">{children}</div>
        </main>

        {/* Right Sidebar */}

         <div className="relative flex-col w-1/4 max-h-screen">
         <div className="gap-y-2 px-2 fixed top-20">
         
         <h4 className="p-1 font-bold">Sponsers</h4>
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
    </div>
    </>
  );
}
