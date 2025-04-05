"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import useAuth from "@/hooks/useAuth";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const appState = useSelector((state: any) => state.auth);

  const [isChecking, setIsChecking] = useState(true); // Show loader while checking
  
  useEffect(() => {
    
    const timeout = setTimeout(() => {
      const protectedRoutes = ["/home", "/profile"];
      const guestRoutes = ["/auth"]; 
      if (!appState.isAuthenticated) {
        if (!guestRoutes.some(route => pathname?.includes(route))) {
           router.push("/auth/login");
        }
      } else {
        if (guestRoutes.some(route => pathname?.includes(route))) {
         
          router.push("/home/feed");
        }
      }

      setIsChecking(false); // Hide loader
    }, 100); // 1-second timeout

    return () => clearTimeout(timeout);
  }, [pathname, router, appState.isAuthenticated]);

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
