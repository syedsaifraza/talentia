import Image from "next/image";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

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
                src="https://talentia.co.in/byjus.png"
                alt="Sponser Image"
              />
              <h1 style={{ textDecoration: "underline" }}>
                Join Byjus Upto 50% Scholarship
              </h1>
            </div>
            <div className="">
              <Image
                src="https://talentia.co.in/physics-wallah.png"
                height={300}
                width={250}
                alt="Sponser Image"
              />
              <h1 style={{ textDecoration: "underline" }}>
                Physics Wallah in Kanpur Now
              </h1>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
