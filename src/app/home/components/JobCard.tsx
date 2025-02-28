'use client'
import React from "react";

interface JobCardProps {
  companyLogo: string;
  jobTitle: string;
  jobDescription: string;
  tags: string[];
  onApply: () => void;
  onMessage: () => void;
}

const JobCard: React.FC<JobCardProps> = ({
  companyLogo,
  jobTitle,
  jobDescription,
  tags,
  onApply,
  onMessage,
}) => {
  return (
    <div className="max-w-sm w-1/2 p-2">
      <div className="bg-white p-4 rounded-sm shadow-md border min-h-[300px]"> 
      {/* Card Header */}
        <div className="flex items-center justify-between mb-3">
            <img src={companyLogo} alt="Company Logo" className="h-6" />
            <button className="text-gray-500">&#x22EE;</button>
        </div>

        {/* Job Title */}
        <h2 className="text-lg font-semibold">{jobTitle}</h2>

        {/* Job Description */}
        <p className="text-gray-500 text-sm mt-1">{jobDescription}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag, index) => (
            <span
                key={index}
                className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded"
            >
                {tag}
            </span>
            ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex gap-3">
            <button
            className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700"
            onClick={onApply}
            >
            Apply Now
            </button>
            <button
            className="flex-1 bg-gray-200 text-gray-600 py-2 rounded-lg text-sm font-medium cursor-not-allowed"
            onClick={onMessage}
            >
            Messages
            </button>
        </div>
        <p className="mt-4">Job Applicants : 30</p>
      </div>
    </div>
  );
};

export default JobCard;
