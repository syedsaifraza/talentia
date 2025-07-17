'use client';

import React from 'react';

interface EmptyStateProps {
  title: string;
  onRefresh?: () => void;
}

const EmptyState: React.FC<EmptyStateProps> = ({ title, onRefresh }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 text-center text-gray-700">
      <img
        src="https://content.acetians.in/uploads/no-documentts-removebg-preview.png"
        alt="Empty state"
        className="w-64 h-64 object-contain mb-4"
      />
      <h2 className="text-lg font-medium mb-3">{title}</h2>

      {onRefresh && (
        <button
          onClick={onRefresh}
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 4v5h.582M20 20v-5h-.581m.581-4a8.003 8.003 0 00-15.163-1.912M4.582 9H9m6 6h4.418M4.582 9A8.003 8.003 0 0119.163 7.088"
            />
          </svg>
          Refresh
        </button>
      )}
    </div>
  );
};

export default EmptyState;
