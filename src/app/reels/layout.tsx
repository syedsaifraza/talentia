import Image from "next/image";
import Navbar from "../../component/components/navbar";
import Link from "next/link";
import Sidebar from "@/component/components/sidebar";
import { Suspense } from "react";
import SponserCard from "@/component/SponserCard";
import CompanyTile from "@/component/components/CompanyTile";
import FeedSideBar from "../(page)/FeedSideBar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={<h1>Loading</h1>}>
        <Navbar />
      </Suspense>
      <div className="bg-gradient-to-br  from-purple-50 via-white to-pink-50 overflow-hidden">
        <div className="w-full mx-auto  flex justify-between">
        
          {/* <div
            className="lg:w-[470px] py-3 pl-5 pr-3 box-border shadow-[1px_0px_1px_1px_#00000024] bg-white overflow-scroll h-[89vh] gap-y-2"
            aria-label="Sidebar"
          >
             <Sidebar />
           <FeedSideBar/>
          </div> */}

          {/* Centered Content */}
          <main className="w-full overflow-scroll">
            <div className="rounded-lg">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}