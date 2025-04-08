"use client";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const WelcomeAchievements: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(true);

  if (!visible) return null;

  return (
    <div className="bg-gray-100 p-4 mb-3 rounded-lg flex justify-between items-center border">
      {/* Left Content */}
      <div>
        <h3 className="text-lg font-semibold">Welcome to Achievements , view leader-boards , perform , score and top the leaderboard to win exciting prizes </h3>
        <p className="text-sm text-gray-600">
          Add talents or complete a challege to participate.
        </p>
        <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700">
          Let's Begin
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

export default WelcomeAchievements;
