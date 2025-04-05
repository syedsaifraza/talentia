"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import useAuth from "@/hooks/useAuth"; 
import { fetchUser } from "@/utils/apis/auth";
import Cookies from "js-cookie";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  useAuth();
  const router = useRouter();
  const pathname = usePathname();
  
  const [isChecking, setIsChecking] = useState(true); // Show loader while checking
  const getAppState =()=>{
    return useSelector((state: any) => state.auth);
      
  }
  const getLoggedInUser = async() =>{
     return await fetchUser(Cookies.get("token")||"");
  }  
  useEffect(() => {
    
    const timeout = setTimeout(() => {
      
      // alert(getAppState().isAuthenticated)    
      setIsChecking(false); // Hide loader
      
    }, 200); 
    // 1-second timeout
   const getU = async()=>{
    const info =await getLoggedInUser();
    const protectedRoutes = ["/home", "/profile"];
    const guestRoutes = ["/auth"]; 
   if (info.success==false) {
     if (!guestRoutes.some(route => pathname?.includes(route))) {
        router.push("/auth/login");
     }
   } else if(info.success==true)  {
     if (guestRoutes.some(route => pathname?.includes(route))) {
      
       router.push("/home/feed");
     }
   }
   }
   getU()
    
    return () => clearTimeout(timeout);
  }, [pathname, router]);

  if (isChecking) {
    return (
      <div className="fixed inset-0 bg-white flex justify-center items-center z-[2000]">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
