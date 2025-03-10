import Image from "next/image";
import Navbar from "../home/components/navbar";
import Sidebar from "../home/components/BlogSidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#f2f4f7] h-screen overflow-scroll">
      <Navbar />
      <div className="w-full">
        {/* Centered Content */}
        <main className="w-full  mt-4 px-4">
          <div className="">{children}</div>
        </main>
      </div>
    </div>
  );
}
