import Image from "next/image";
import Navbar from "../../component/components/navbar";
import Link from "next/link";
import Sidebar from "@/component/components/sidebar";
import { Suspense } from "react";
import SponserCard from "@/component/SponserCard";
import CompanyTile from "@/component/components/CompanyTile";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={<h1>Loading</h1>}>
        <Navbar />
      </Suspense>
      <div className="bg-gray-200 overflow-hidden">
        <div className="w-full mx-auto gap-3 flex justify-between">
          {/* Left Sidebar */}
          <div
            className="lg:w-[40vw] p-2 overflow-scroll h-[89vh] gap-y-2"
            aria-label="Sidebar"
          >
            <Sidebar />
          </div>

          {/* Centered Content */}
          <main className="w-full p-2 overflow-scroll h-[89vh]">
            <div className="rounded-lg">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}