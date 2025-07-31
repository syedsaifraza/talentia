"use client"
import Image from "next/image";

export default function NotFoundPage({user}:any) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <button onClick={()=>console.log(user)}>
            hello
          </button>
          
          <p className="text-xl text-gray-600 mt-2">Page Not Found</p>
          <Image width={300} height={100} alt="Logo" src="https://content.acetians.in/uploads/logo%20(2).png"/>
          <button
            onClick={() => window.history.back()}
            className="mt-4 px-3 py-1 text-sm text-white bg-blue-800 rounded hover:bg-blue-900 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }
  