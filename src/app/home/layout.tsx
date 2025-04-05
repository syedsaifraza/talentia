import Image from "next/image";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  
  return (
    <div className="bg-[#f2f4f7] h-screen overflow-scroll">
      <Navbar />
      <div className="w-full mx-auto flex justify-between">
        {/* Left Sidebar */}

        <aside
          id="default-sidebar"
          className="w-[25vw] bg-white"
          aria-label="Sidebar"
        >

          <Sidebar /> 
        </aside>

        {/* Centered Content */}
        <main className=" w-full lg:w-[50vw]   ">
          <div className="px-4 rounded-lg ">{children}</div>
        </main>

        {/* Right Sidebar */}
        <aside className="w-[25vw] bg-white  pt-2 hidden lg:flex justify-center">
          <div className="fixed flex justify-center items-center   flex-col gap-4">
            <div className="">
              
              <Image
                width={300}
                height={250}
                src="https://content.acetians.in/uploads/Screenshot%20(432).png"
                alt="Sponser Image"
              />
              <Link href="https://acetiansitacademy.com/"><h1 style={{ textDecoration: "underline" }}>
                Join Acetians IT Academy
              </h1></Link>
              
            </div>
            <div className="">
              <Image
                src="https://content.acetians.in/uploads/Screenshot%20(433).png"
                height={250}
                width={300}
                alt="Sponser Image"
              />
              <Link href="https://acetians.com/"><h1 style={{ textDecoration: "underline" }}>
                Get Top IT Services delivered 
              </h1></Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
