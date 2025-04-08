"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { registerUser as signupUser } from "@/utils/apis/auth";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import LoadingSpinner from "@/component/components/LoadingSpinner";

const Register = () => {
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    setLoading(false)
  },[])
  
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState<Date | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const gender = ["Male", "Female", "Rather Not Say"];
  const [userGender, setUserGender] = useState<string>(gender[0]);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
   try{
    setLoading(true);
    const formattedDOB = dob ? format(dob, "dd/MM/yy") : "";

    const response = await signupUser({
      name: `${firstName} ${middleName} ${lastName}`,
      fullName:{
          "firstName":firstName,
          "middleName":middleName,
          "lastName":lastName
      },
      email,
      password,
      dob: formattedDOB,
      gender: userGender,
    });

    localStorage.setItem("name", firstName);
    localStorage.setItem("email", email);
    toast(response.message);
    if (response.success && response.token) {
      localStorage.setItem("token", response.token);
      router.push("/feed");
    } else {
      setError(response.message || "Signup failed. Please try again.");
    }}
    catch(e){

    }finally{
      setLoading(false)
    }
  };

  return (
    <form className="" onSubmit={handleSubmit} autoComplete="off">
      {error && <p className="text-red-500 text-center">{error}</p>}

      <input
        type="text"
        className="w-full px-4 py-1 mb-2 border rounded-md"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />

      <input
        type="text"
        className="w-full px-4 py-1 mb-2 border rounded-md"
        placeholder="Middle Name"
        value={middleName}
        onChange={(e) => setMiddleName(e.target.value)}
        
      />

      <input
        type="text"
        className="w-full px-4 py-1 mb-2 border rounded-md"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />

      <DatePicker
        selected={dob}
        onChange={(date: Date | null) => date == null ? null : setDob(date)}
        dateFormat="dd/MM/yy"
        placeholderText="DD/MM/YY"
        className="px-4 py-1 mb-2 border rounded-md"
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        required
      />

      <div className="flex justify-between mb-2">
        {gender.map((g, index) => (
          <div key={index} className={`${index == 1 ? "px-1" : ""} w-1/3`}>
            <button
              type="button"
              className={`text-xs ${
                userGender == g
                  ? "bg-blue-800 text-white"
                  : "bg-blue-100 text-blue-900"
              } rounded-md w-full p-2`}
              onClick={() => setUserGender(g)}
            >
              {g}
            </button>
          </div>
        ))}
      </div>

      <input
        type="email"
        className="w-full px-4 py-1 my-3 mb-2 border rounded-md"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        className="w-full px-4 py-1 border mb-2 rounded-md"
        placeholder="Create a password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <input
        type="password"
        className="w-full px-4 py-1 border mb-5 rounded-md"
        placeholder="Confirm your password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />

    {loading? <LoadingSpinner/> :
      <button
        type="submit"
        className="w-full py-1 bg-[#3113d6] mb-2 text-white rounded-md hover:bg-[#3113d6b8] focus:outline-none"
      >
        Submit
      </button>
}

      <p className="text-sm text-gray-600 text-center">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-600 hover:underline">
          Sign in
        </Link>
      </p>
    </form>
  );
};

export default Register;
