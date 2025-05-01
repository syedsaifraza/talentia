"use client";

import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function FormHeader() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const location = useSearchParams();
   
  const instituteType = location.get("type")??"";

  const handleConfirm = () => {
    setShowModal(false);
    router.push("/page/create");
  };

  return (
    <>
      {/* Header with Close Button */}
      <h1 className="text-2xl font-normal mb-4 flex items-center">
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-500 text-gray-900 p-1 rounded-full mr-2"
        >
          <FaTimes color="#fff" />
        </button>
        Create  <span style={{textTransform:'capitalize',marginInline:'10px'}}> {instituteType}</span>  Page
      </h1>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-1000" style={{zIndex:10001}}>
          <div className="bg-white rounded-lg shadow-xl p-6 w-[90%] max-w-md">
            <h2 className="text-lg font-semibold mb-4">Close Form?</h2>
            <p className="mb-6">Are you sure you want to close this form? Unsaved changes will be lost.</p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-2 rounded bg-gray-900 text-white hover:bg-red-600"
              >
                Yes, Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
