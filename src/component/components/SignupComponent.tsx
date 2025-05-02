"use client";
import { FiLock, FiUnlock } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { loginUser, registerUser } from "@/utils/apis/auth";

const SignUpComponent = () => {
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
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match", { position: "top-center" });
      return;
    }

    setLoading(true);
    try {
      const response = await registerUser({
        name: form.firstName,
        email: form.email,
        password: form.password,
        dob: formatDate(form.dob),
        fullName: {
          firstName: form.firstName,
          middleName: form.middleName,
          lastName: form.lastName,
        },
        gender: form.gender,
      });

      if (response.success) {
        toast.success("Account created successfully!", {
          position: "top-center",
          style: { backgroundColor: "#8e44ad", color: "white" },
        });

        const loginResponse = await loginUser({
          email: form.email,
          password: form.password,
        });

        if (loginResponse.success) {
          toast.success("Login successful!", { position: "top-center" });
          Cookies.set("token", loginResponse.token!);
          window.location.href = "/feed";
        } else {
          toast.error(loginResponse.message || "Login failed", {
            position: "top-center",
          });
        }
      } else {
        toast.error(response.message || "Registration failed", {
          position: "top-center",
        });
      }
    } catch (err) {
      toast.error("Something went wrong!", { position: "top-center" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="R-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-title">
          <h1>Create an Account</h1>
        </div>
        <div className="name-fields">
          <div className="name-field">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="name-field">
            <label htmlFor="middleName">Middle Name</label>
            <input
              type="text"
              id="middleName"
              placeholder="Middle Name"
              value={form.middleName}
              onChange={handleChange}
            />
          </div>
          <div className="name-field">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="r-dob-gen ">
          <div className="rdob rform-group">
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              value={form.dob}
              onChange={handleChange}
              required
            />
          </div>
          <div className="rgen rform-group">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              value={form.gender}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select your gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Rather Not Say">Other</option>
              <option value="Rather Not Say">Prefer not to say</option>
            </select>
          </div>
        </div>
        <div className="form-group rform-group">
          <label htmlFor="email">Email</label>
          <div className="input-icon">
            <HiOutlineMail size={25} color={" rgb(71, 71, 71)"} />
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="register-password">
          <div className="rpassword">
            <label htmlFor="password">Password</label>
            <div className="input-icon">
              <FiUnlock size={21} color={" rgb(71, 71, 71)"} />
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="cpassword">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="input-icon ">
              <FiLock size={21} color={" rgb(71, 71, 71)"} />
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <button className="login-button" type="submit" disabled={loading}>
          <div className="l-button-text">
            {loading ? "Registering..." : "Register"} <FaArrowRight />
          </div>
        </button>
        <div className="option">
          <p>
            Already have an account?{" "}
            <span className="highlight-option">
              <Link href="/signin" style={{ textDecoration: "none", color: "inherit" }}>
                Login Here
              </Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpComponent;
