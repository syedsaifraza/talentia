"use client";


const NoPOst = ({value}) => {
  
  
  return (
            <div className="text-center ">
              <div className="flex  items-center justify-center bg-gray-100 ">
        <div className="w-full  overflow-hidden rounded-lg bg-white shadow-lg">
          {/* Illustration Header */}
          <div className="relative flex h-48 items-center justify-center overflow-hidden  p-4" style={{backgroundImage:"url('https://content.acetians.in/uploads/Static-page-design-v0-by-Vercel-08-08-2025_12_04_PM.png')", backgroundPosition:"contain"}}>
           
            
         
           {/* Heart */}
          </div>
  
          {/* Content Section */}
          <div className="p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800">No {value} available</h2>
            <p className="mt-4 text-gray-600">
              It looks like there are no posts to display at the moment. Please check back later for new content!
            </p>
          </div>
        </div>
      </div>
             
            </div>
  );
};

export default NoPOst;