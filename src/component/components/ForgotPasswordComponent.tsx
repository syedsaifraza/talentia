"use client";

import { HiOutlineMail } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import toast from "react-hot-toast";
import { useState } from "react";
import { resetPassword } from "@/utils/apis/auth"; // 🔁 You must implement this API call

export default function ForgotPasswordComponent() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await resetPassword({ email });

      if (response.message!="") {
        toast.success("Reset link sent! Check your email.", {
          position: "top-center",
        });
        setSubmitted(true);
      } else {
        toast.error(response.message || "Unable to send reset link.", {
          position: "top-center",
        });
      }
    } catch (error) {
      toast.error("Something went wrong.", {
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
          <h1>Forgot Password</h1>
          <p>Enter your email to receive a password reset link</p>
        </div>

        {!submitted ? (
          <>
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

            <button className="login-button" type="submit" disabled={loading}>
              <div className="l-button-text">
                {loading ? "Sending..." : <>Send Reset Link <FaArrowRight /></>}
              </div>
            </button>
          </>
        ) : (
          <p className="success-message">
            If the email is registered, you will receive a reset link shortly.
          </p>
        )}

        <div className="options" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <p>
            Remember your password?{" "}
            <span className="highlight-option">
              <Link href="/signin">Back to Login</Link>
            </span>
          </p>
          <p>
            Don't have an account?{" "}
            <span className="highlight-option">
              <Link href="/signup">Create one</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
