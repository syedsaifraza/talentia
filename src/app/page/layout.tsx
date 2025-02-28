import Image from "next/image";
import Navbar from "../home/components/navbar";
import Sidebar from "../home/components/sidebar";
 

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
         
        <div className="bg-blue-50 h-screen overflow-scroll">
            <Navbar />
            <div className="w-full mx-auto flex py-1">
                {/* Left Sidebar */}
                <Sidebar />
                
                {/* Centered Content */}
                <main className="w-full lg:w-3/4 px-12">
                    <div className="p-0 rounded-lg shadow">{children}</div>
                </main>
                
                 
            </div>
        </div>
         
    );
}
