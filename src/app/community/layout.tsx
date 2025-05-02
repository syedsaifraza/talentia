import Navbar from "@/component/components/navbar";
import Footer from "@/component/Footer";
import "../../app/talentia.css"
import NavbarAlt from "@/component/components/NavbarAlt";


export default function RootLayout({
    children,
  }: Readonly<{ children: React.ReactNode }>) {
 

return  <>
        <NavbarAlt />
        {children}
        <Footer/>
        </>
  };