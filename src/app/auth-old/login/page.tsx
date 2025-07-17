"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import LogoFile from "@/component/components/LogoFile";
import { loginUser } from "@/utils/apis/auth";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await loginUser({ email, password });
      localStorage.setItem("email", email);

      if (response.success && response.token) {
        Cookies.set("token", response.token);
        toast.success("Login successful!", {
          position: "top-center",
          autoClose: 2000,
          theme: "colored",
          style: { backgroundColor: "#8e44ad", color: "white" },
        });
        setTimeout(() => {
          window.location.href = "/home";
        }, 100);
      } else {
        setError(response.message || "Invalid credentials");
        toast.error("Invalid credentials", {
          position: "top-center",
          autoClose: 3000,
        });
      }
    } catch (e) {
      toast.error("Something went wrong!", {
        position: "top-center",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
          <div className="h-12 w-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <div className="max-w-md w-full backdrop-blur-md bg-white/30 border border-white/60 shadow-xl rounded-2xl px-8 py-10 space-y-6 relative z-10">
        <div className="text-center">
          <span className="m-auto"><LogoFile /></span>
          <h2 className="mt-4 text-3xl font-bold text-gray-800">Welcome Back</h2>
          <p className="mt-2 text-sm text-gray-600">Login to your Talentia account</p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full px-4 py-2 bg-white/70 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 w-full px-4 py-2 bg-white/70 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-md transition duration-200 flex items-center justify-center"
          >
            {loading ? (
              <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Login →"
            )}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="/signup" className="text-indigo-600 hover:underline font-medium">
            Create one
          </a>
        </p>
      </div>
    </>
  );
}
