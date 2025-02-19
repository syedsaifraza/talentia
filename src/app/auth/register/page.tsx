"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { registerUser as signupUser } from "@/utils/apis/auth";
import toast from "react-hot-toast";
 

const Register = () => {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
 
  const [error, setError] = useState<string | null>(null);
  
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    
     

     

    const response = await signupUser({ name, email, password });
    toast(response.message)
    if (response.success && response.token) {
      localStorage.setItem("token", response.token);
      router.push("/home/feed"); // Redirect after successful signup
    } else {
      setError(response.message || "Signup failed. Please try again.");
    }
  };

  return (
    <form className="space-y-2" onSubmit={handleSubmit} autoComplete="off" autoCorrect="off">
      {error && <p className="text-red-500 text-center">{error}</p>}

      <div>
         
      </div>

       
      <input
            type="text"
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
      <input
        type="email"
        className="w-full px-4 py-2 border rounded-md"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        className="w-full px-4 py-2 border rounded-md"
        placeholder="Create a password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        type="password"
        className="w-full px-4 py-2 border rounded-md"
        placeholder="Confirm your password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />

      <button
        type="submit"
        className="w-full py-3 bg-[#3113d6] text-white rounded-md hover:bg-[#3113d6b8] focus:outline-none"
      >
        Submit
      </button>

      <p className="text-sm text-gray-600 text-center">
        Already have an account?{" "}
        <Link href="/auth/login" className="text-blue-600 hover:underline">
          Sign in
        </Link>
      </p>
    </form>
  );
};

export default Register;
