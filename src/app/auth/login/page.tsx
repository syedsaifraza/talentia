"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { loginUser } from "../../../utils/apis/auth"

const Login = () => {
  const [email, setEmail] = useState("surajkabir@gmail.com");
  const [password, setPassword] = useState("surajkabir");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const response = await loginUser({ email, password });
    localStorage.setItem("email", email);
    if (response.success && response.token) {
      localStorage.setItem("token", response.token);
      router.push("/home/feed"); // Redirect to dashboard
    } else {
      setError(response.message || "Invalid credentials");
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {error && <p className="text-red-500 text-center">{error}</p>}

      <div>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <input
          type="password"
          id="password"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-[#3113d6] text-white rounded-md hover:bg-[#3113d6b8] focus:outline-none my-8 font-bold"
      >
        Sign In
      </button>

      <p className="text-[15px] text-gray-600 text-center">
        <Link href="/auth/forgot-password" className="text-blue-600 hover:underline">
          Forgotten Password?
        </Link>
      </p>
      <hr />
      <div className="text-center">
        <Link href="/auth/register">
          <button
            type="button"
            className="w-auto px-4 py-4 bg-green-500 text-white rounded-md focus:outline-none font-bold align-center"
          >
            Create An Account
          </button>
        </Link>
      </div>
    </form>
  );
};

export default Login;
