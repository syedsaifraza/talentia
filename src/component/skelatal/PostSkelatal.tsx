import React from "react";

const PostSkelatal: React.FC = () => {
  return (
    <div className="w-full  mx-auto p-4 mb-4 bg-white rounded-xl shadow animate-pulse space-y-4">
      {/* Header: Avatar + Username */}
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-gray-300 rounded-full" />
        <div className="flex flex-col space-y-1">
          <div className="w-32 h-3 bg-gray-300 rounded" />
          <div className="w-20 h-2 bg-gray-200 rounded" />
        </div>
      </div>

      {/* Title */}
      <div className="h-4 w-3/4 bg-gray-300 rounded" />

      {/* Body Text */}
      <div className="space-y-2">
        <div className="w-full h-3 bg-gray-200 rounded" />
        <div className="w-5/6 h-3 bg-gray-200 rounded" />
        <div className="w-2/3 h-3 bg-gray-200 rounded" />
      </div>

      {/* Media Image */}
      <div className="w-full h-48 bg-gray-300 rounded-lg" />
    </div>
  );
};

export default PostSkelatal;
