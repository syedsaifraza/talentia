
import Navbar from "../home/components/navbar";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
         
        <div className="bg-[#ddd06a] min-h-screen h-screen overflow-y-scroll">
            <Navbar />
            <div className="w-full  flex justify-center py-1">
                
                
                {/* Centered Content */}
                <main className="w-full lg:w-4/5 px-12">
                    <div className="p-0 rounded-lg shadow">{children}</div>
                </main>
                
                {/* Right Sidebar */}
                 
            </div>
        </div>
         
    );
}
