"use client"; // Ensure it's a client component

import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Use `next/navigation` in App Router
import { useDispatch, useSelector } from "react-redux";
import { setUser, logout, setLoading } from "@/store/slices/authSlices";
import { fetchUser } from "@/utils/apis/auth"; 
import { RootState } from "@/store";

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState ) => state.auth);

  useEffect(() => {
    const checkAuth = async () => {
      dispatch(setLoading(true)); // Show loading state

      const token = localStorage.getItem("token");
      if (!token) {
        dispatch(logout());
        router.replace("/auth/login");
        return;
      }

      try {
        const res = await fetchUser(token); // Wait for fetchUser response

        if (res.success) {
          dispatch(setUser({ user: {"name":"Syed Saif"}, token }));
          router.replace("/home/feed");
        } else {
          localStorage.removeItem("token");
          dispatch(logout());
          router.replace("/auth/login");
        }
      } catch (error) {
        console.error("Authentication error:", error);
        localStorage.removeItem("token");
        dispatch(logout());
        router.replace("/auth/login");
      } finally {
        dispatch(setLoading(false));
      }
    };

    checkAuth();
  }, [router, dispatch]);

  if (loading) return <div>Loading...</div>;

  return null;
}
