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
  
  const getLoggedInUser = async() =>{
    const token = Cookies.get('token'); 
        if (token!=undefined) {
     return await fetchUser(token||"");
        }
  }  
  

  
  return <>{children}</>;
};

export default ProtectedRoute;
