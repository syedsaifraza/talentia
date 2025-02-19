"use client";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const GetNotified: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(true);

  if (!visible) return null;

  return (
    <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center border">
      {/* Left Content */}
      <div>
        <h3 className="text-lg font-semibold">Get notified about jobs you&apos;re interested in</h3>
        <p className="text-sm text-gray-600">
          Create an alert for a job title, a company, or key words.
        </p>
        <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700">
          Create alert
        </button>
      </div>

      {/* Close Button */}
      <button
        onClick={() => setVisible(false)}
        className="text-gray-500 hover:text-gray-700"
        aria-label="Close notification"
      >
        <IoClose size={24} />
      </button>
    </div>
  );
};

export default GetNotified;
