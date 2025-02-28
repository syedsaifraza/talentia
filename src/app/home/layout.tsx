import Image from "next/image";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
         
        <div className="bg-blue-50 h-screen overflow-scroll">
            <Navbar />
            <div className="w-full mx-auto flex py-1">
                {/* Left Sidebar */}
                <Sidebar/>
                
                {/* Centered Content */}
                <main className=" w-full lg:w-2/3 px-12">
                    <div className="p-0 rounded-lg shadow">{children}</div>
                </main>
                
                {/* Right Sidebar */}
                <aside className="w-1/4 p-0 hidden lg:block">
                    <div className="fixed right-10 z-40">
                    <div className=" p-2  ">
                        <Image width={300} height={200}src="https://talentia.co.in/byjus.png"    alt="Sponser Image"/>
                        <h1 style={{textDecoration:'underline'}}>Join Byjus Upto 50% Scholarship</h1>
                    </div>
                    <div className=" p-2 ">
                        <Image  src="https://talentia.co.in/physics-wallah.png" height={200} width={300} alt="Sponser Image"/>
                        <h1 style={{textDecoration:'underline'}}>Physics Wallah in Kanpur Now</h1>
                    </div>
                    </div>
                     

                </aside>
            </div>
        </div>
         
    );
}
