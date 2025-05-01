import Navbar from "@/component/components/navbar";
import Footer from "@/component/Footer";
import "../../app/talentia.css"

export default function RootLayout({
    children,
  }: Readonly<{ children: React.ReactNode }>) {

return  <>
        <Navbar/>
        {children}
        <Footer/>
        </>
  };