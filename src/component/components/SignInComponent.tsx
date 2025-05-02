"use client";

import { HiOutlineMail } from "react-icons/hi";
import { FiLock } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import toast from "react-hot-toast";
import { useState } from "react";
import { loginUser } from "@/utils/apis/auth";
import Cookies from "js-cookie";

export default function SignInComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

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
          style: { backgroundColor: "#8e44ad", color: "white" },
        });
        setTimeout(() => {
          window.location.href = "/feed";
        }, 100);
      } else {
        setError(response.message || "Invalid credentials");
        toast.error("Invalid credentials", {
          position: "top-center",
        });
      }
    } catch (e) {
      toast.error("Something went wrong!", {
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="L-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-title">
          <h1>Welcome Back</h1>
          <p>Enter your credentials to access your account</p>
        </div>

        <div className="form-group rform-group">
          <label htmlFor="email">Email</label>
          <div className="input-icon">
            <HiOutlineMail size={25} color={"rgb(71, 71, 71)"} />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="input-icon">
            <FiLock size={21} color={"rgb(71, 71, 71)"} />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <button className="login-button" type="submit" disabled={loading}>
          <div className="l-button-text">
            {loading ? "Logging in..." : <>Login <FaArrowRight /></>}
          </div>
        </button>

        <div className="option">
          <p>
            Don't have an account?{" "}
            <span className="highlight-option">
              <Link
                href="/signup"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Create one
              </Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
