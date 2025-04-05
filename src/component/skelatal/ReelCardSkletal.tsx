"use client";
import React from "react";

const ReelCardSkeletal = ({ size = "small" }) => {
  const cardSize = size === "small" ? "h-40 w-24" : "h-100 w-60";

  return (
    <div
      className={`relative ${cardSize} rounded-lg overflow-hidden animate-pulse bg-gray-300`}
    >
      <div className="absolute inset-0 bg-gray-200 opacity-30"></div>
      <div className="absolute top-2 left-2 w-8 h-8 bg-gray-400 rounded-full border-2 border-blue-500"></div>
      <div className="absolute bottom-2 left-2 text-white text-sm font-semibold space-y-1">
        <div className="bg-gray-400 h-3 w-16 rounded"></div>
        {size !== "small" && (
          <>
            <div className="bg-gray-400 h-2 w-20 rounded"></div>
            <div className="bg-gray-400 h-2 w-24 rounded"></div>
          </>
        )}
      </div>
    </div>
  );
};

export default ReelCardSkeletal;
