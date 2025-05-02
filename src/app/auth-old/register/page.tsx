"use client"
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginUser, registerUser } from "@/utils/apis/auth";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import LogoFile from "@/component/components/LogoFile";

export default function Signup() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const formatDate = (date: string): string => {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`; // Format as DD/MM/YYYY
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match", { position: "top-center" });
      return;
    }

    setLoading(true);
    try {
      // Register the user
      const response = await registerUser({
        name: form.firstName,
        email: form.email,
        password: form.password,
        dob: formatDate(form.dob),
        fullName: { firstName: form.firstName, middleName: form.middleName, lastName: form.lastName },
        gender: form.gender,
      });

      if (response.success) {
        toast.success("Account created successfully!", {
          position: "top-center",
          autoClose: 2000,
          theme: "colored",
          style: { backgroundColor: "#8e44ad", color: "white" },
        });

        // Now log the user in
        const loginResponse = await loginUser({ email: form.email, password: form.password });
        
        if (loginResponse.success) {
          toast.success("Login successful!", { position: "top-center" });
          Cookies.set("token", loginResponse.token!);
          window.location.href="/feed"
        } else {
          toast.error(loginResponse.message || "Login failed", { position: "top-center" });
        }
      } else {
        toast.error(response.message || "Registration failed", { position: "top-center" });
      }
    } catch (err) {
      toast.error("Something went wrong!", { position: "top-center" });
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

      <div className="max-w-2xl w-full backdrop-blur-md bg-white/30 border border-white/60 shadow-xl rounded-2xl px-8 py-4 space-y-2">
        <div className="text-center">
          <LogoFile />
          <h2 className="mt-2 text-3xl font-bold text-gray-800">Create an Account</h2>
          <p className="mt-1 text-sm text-gray-600">Your Talent journey begins here</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Row with First, Middle, Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            <input
              id="firstName"
              type="text"
              value={form.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
              className="mt-1 w-full px-4 py-2 bg-white/70 text-gray-800 border border-gray-300 rounded-md"
            />
            <input
              id="middleName"
              type="text"
              value={form.middleName}
              onChange={handleChange}
              placeholder="Middle Name"
              className="mt-1 w-full px-4 py-2 bg-white/70 text-gray-800 border border-gray-300 rounded-md"
            />
            <input
              id="lastName"
              type="text"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
              className="mt-1 w-full px-4 py-2 bg-white/70 text-gray-800 border border-gray-300 rounded-md"
            />
          </div>

          {/* DOB and Gender */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              id="dob"
              type="date"
              value={form.dob}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 bg-white/70 text-gray-800 border border-gray-300 rounded-md"
            />
            <select
              id="gender"
              value={form.gender}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 bg-white/70 text-gray-800 border border-gray-300 rounded-md"
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
              <option>Prefer Not to Say</option>
            </select>
          </div>

          {/* Email */}
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
            className="mt-1 w-full px-4 py-2 bg-white/70 text-gray-800 border border-gray-300 rounded-md"
          />

          {/* Password and Confirm */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              id="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="mt-1 w-full px-4 py-2 bg-white/70 text-gray-800 border border-gray-300 rounded-md"
            />
            <input
              id="confirmPassword"
              type="password"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="mt-1 w-full px-4 py-2 bg-white/70 text-gray-800 border border-gray-300 rounded-md"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-md flex items-center justify-center"
          >
            {loading ? (
              <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Register →"
            )}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-600 hover:underline font-medium">
            Login Here
          </a>
        </p>
      </div>
    </>
  );
}
