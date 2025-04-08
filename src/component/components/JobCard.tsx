"use client";
import React from "react";
import Image, { StaticImageData } from "next/image"; 
 

interface JobCardProps {
  logo: StaticImageData;
  jobTitle: string;
  location:string;
  jobDescription: string;
  tags: string[];
  company: string;
  onApply: () => void;
  onMessage: () => void;
}

const JobCard: React.FC<JobCardProps> = ({
  logo,
  jobTitle,
  jobDescription,
  company,
  location,
   
}) => {
  //const [issave, setissave] = useState(false);

  return (
    // <div className="mt-6 w-full p-2">
    //   <div className="group hover:shadow-lg bg-white shadow hover:shadow-lg p-4 transition-all border duration-300 lg:p-6">
    //     <div className="mb-3 text-right">
    //       <button
    //         onClick={() => setissave(!issave)}
    //         className="text-gray-50 transition-all duration-300 hover:scale-110 hover:text-red-600"
    //       >
    //         {issave ? <FaHeart /> : <FaHeart className="text-white" />}
    //       </button>
    //     </div>
    //     <div className="flex items-center gap-x-2">
    //       <Image
    //         className=" rounded-full w-[10%]"
    //         src={logo}
    //         alt="Company Logo"
    //       />
    //       <div>
    //         <h1 className="text-[20px] text-bold text-gray-600">{company}</h1>
    //       </div>
    //     </div>
    //     <div className="my-4">
    //       <h1  className="mb-3 overflow-hidden pr-7 text-lg font-semibold">
    //         {jobTitle}
    //       </h1>
    //       <h3 className="overflow-hidden pr-7 mb-3 text-sm">
    //         {jobDescription}
    //       </h3>
    //       <div className=" rounded-full   text-blue-900">
    //         $60K - $100K per year
    //       </div>
    //     </div>
    //     <div className="flex items-center justify-between">
    //       <span className="overflow-hidden pr-7 mb-3 text-sm">Full Time</span>
    //       <a
    //         className="font-medium text-blue-500 transition-all duration-300 group-hover:text-blue-500/80 cursor-pointer"
    //         onClick={onApply}
    //       >
    //         Apply Now
    //       </a>
    //     </div>
    //   </div>
    // </div>
    <div className="">
      <div className="group mx-2 mt-5 grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">
        <a
          href="#"
          className="order-2 col-span-1  -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4"
        >
          <div className="group  relative h-13 w-12 overflow-hidden rounded-lg">
            <Image
              src={logo}
              alt="logo"
              width={64}
              height={64}
              className="h-full w-full object-cover text-gray-700"
            />
          </div>
        </a>
        <div className="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
          <h2 className="text-[20px] text-bold text-gray-600">{company}</h2>
          <a
            href="#"
            className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl"
          >
             {jobTitle}
          </a>
          <p className="overflow-hidden pr-7 mb-3 text-sm">
           {jobDescription}
          </p>
          <p className="overflow-hidden pr-7 text-sm">
            {company} - {location}
          </p>
          <div className="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
            <div>
              Experience:
              <span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
                2 Years
              </span>
            </div>
            <div>
              Salary:
              <span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
              $60K - $100K per year
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;





















