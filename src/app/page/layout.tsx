import Image from "next/image";
import Navbar from "@/app/home/components/navbar";
import Sidebar from "./FeedSideBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#f2f4f7] h-screen overflow-scroll">
      <Navbar />
      <div className="w-full mx-auto flex justify-between gap-2 ">
        {/* Left Sidebar */}

        <aside
          id="default-sidebar"
          className="w-[25vw] bg-white"
          aria-label="Sidebar"
        >
          <Sidebar />
        </aside>

        {/* Centered Content */}
        <main className=" w-full lg:w-[75vw]    ">
          <div className=" rounded-lg ">{children}</div>
        </main>

       
      </div>
    </div>
  );
}
