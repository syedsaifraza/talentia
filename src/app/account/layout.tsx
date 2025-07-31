
import Navbar from "@/component/components/navbar";

export default function ReelsLayout({children}:{children:React.ReactNode}){
    return <>
    <Navbar/>
    <div className="max-w-6xl mx-auto">{children}</div>
    </>
    ;
}