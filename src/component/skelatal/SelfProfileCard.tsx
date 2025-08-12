import React from "react";

const SelfProfileSkelatal: React.FC = () => {
  return (
    <div className="max-w-sm w-full mx-auto bg-white shadow-md rounded-lg p-6 animate-pulse">
      <div className="flex flex-col items-center space-y-4">
        {/* Avatar */}
        <div className="w-24 h-24 bg-gray-300 rounded-full"></div>

        {/* Name */}
        <div className="w-32 h-4 bg-gray-300 rounded"></div>

        {/* Subtitle */}
        <div className="w-24 h-3 bg-gray-200 rounded"></div>

        {/* Bio */}
        <div className="w-full space-y-2 mt-4">
          <div className="h-3 w-3/4 bg-gray-200 rounded"></div>
          <div className="h-3 w-2/3 bg-gray-200 rounded"></div>
          <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <div className="h-8 w-20 bg-gray-300 rounded-lg"></div>
          <div className="h-8 w-20 bg-gray-300 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default SelfProfileSkelatal;
