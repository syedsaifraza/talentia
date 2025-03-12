import Image from "next/image";
import Navbar from "../home/components/navbar";
import Sidebar from "./FeedSideBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#f2f4f7] h-screen overflow-scroll">
      <Navbar />
      <div className="w-full mx-auto flex justify-around py-1">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Centered Content */}
        <main className="w-full lg:w-3/4 mt-4 px-8">
          <div className="">{children}</div>
        </main>
      </div>
    </div>
  );
}
