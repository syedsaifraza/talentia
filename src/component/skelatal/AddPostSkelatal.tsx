import React from "react";

const AddPostSkelatal : React.FC = ()=>{
    
    return (
    <div className="bg-white p-4 shadow-sm">
     <div className="flex items-center gap-4 px-4 py-3 rounded-lg animate-pulse">
      {/* Left Icon Skeleton */}
      <div className="w-10 h-10 bg-gray-300 rounded-full" />

      {/* Text Skeleton */}
      <div className="flex flex-col space-y-1 w-full">
        <div className="w-full h-10 rounded-full bg-gray-200 rounded animate-pulse" />
      </div>
     </div>
    </div>
    )
}

export default AddPostSkelatal;