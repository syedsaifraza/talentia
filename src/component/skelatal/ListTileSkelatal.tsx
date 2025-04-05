import React from "react";

const ListTileSkelatal: React.FC = () => {
  return (
    <div className="flex items-center gap-4 px-4 py-3 rounded-lg animate-pulse bg-gray-100">
      {/* Left Icon Skeleton */}
      <div className="w-6 h-6 bg-gray-300 rounded-full" />

      {/* Text Skeleton */}
      <div className="flex flex-col space-y-1">
        <div className="w-32 h-3 bg-gray-300 rounded" />
        <div className="w-20 h-2 bg-gray-200 rounded" />
      </div>
    </div>
  );
};

export default ListTileSkelatal;
