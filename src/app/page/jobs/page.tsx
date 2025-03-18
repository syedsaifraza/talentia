"use client";

import Image from "next/image";
import { useState } from "react";
 

// Job data
const jobs = [
  {
    id: 1,
    title: "Front-End Developer ",
    company: "DPS Kanpur Up",
    salary: "₹720K/yr - ₹1.2M/yr",
    location: "New York, USA",
    image: "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059445135!2d-74.25986613799748!3d40.69714941774136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1698765432100!5m2!1sen!2sin",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Code Masters",
    salary: "₹800K/yr - ₹1.5M/yr",
    location: "San Francisco, USA",
    image: "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.14245968247!2d-122.43759999999999!3d37.75769999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1698765467890!5m2!1sen!2sin",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "Dev Solutions",
    salary: "₹900K/yr - ₹1.8M/yr",
    location: "London, UK",
    image: "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317715.7119263355!2d-0.38178406999999996!3d51.5287352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1698765491234!5m2!1sen!2sin",
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "Design Hub",
    salary: "₹600K/yr - ₹1.1M/yr",
    location: "Berlin, Germany",
    image: "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.409223179199!2d13.374837699999999!3d52.5072119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e3739e8a7a9%3A0x6d5b3b7d1a0b0b0b!2sBerlin%2C%20Germany!5e0!3m2!1sen!2sin!4v1698765512345!5m2!1sen!2sin",
  },
  {
    id: 5,
    title: "Data Scientist",
    company: "AI Innovations",
    salary: "₹1M/yr - ₹2M/yr",
    location: "Bangalore, India",
    image: "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497699.9973874094!2d77.35073221953124!3d12.953847713761278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sin!4v1698765534567!5m2!1sen!2sin",
  },
  {
    id: 6,
    title: "DevOps Engineer",
    company: "Cloudify",
    salary: "₹1.2M/yr - ₹2.2M/yr",
    location: "Sydney, Australia",
    image: "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424146.102672726!2d150.65178959999998!3d-33.8473567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sin!4v1698765556789!5m2!1sen!2sin",
  },
  {
    id: 7,
    title: "Mobile App Developer",
    company: "App Creators",
    salary: "₹800K/yr - ₹1.5M/yr",
    location: "Toronto, Canada",
    image: "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184551.808583833!2d-79.51841499999999!3d43.7181557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sin!4v1698765578901!5m2!1sen!2sin",
  },
  {
    id: 8,
    title: "Product Manager",
    company: "Innovate Inc",
    salary: "₹1.5M/yr - ₹2.5M/yr",
    location: "Paris, France",
    image: "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.75769330476!2d2.2770197499999997!3d48.8589501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sin!4v1698765601234!5m2!1sen!2sin",
  },
  {
    id: 9,
    title: "QA Engineer",
    company: "Testify",
    salary: "₹700K/yr - ₹1.3M/yr",
    location: "Tokyo, Japan",
    image: "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207446.248098927!2d139.60078099999998!3d35.6681625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b857628235d%3A0xcdd8aef709a2b520!2sTokyo%2C%20Japan!5e0!3m2!1sen!2sin!4v1698765623456!5m2!1sen!2sin",
  },
  {
    id: 10,
    title: "Cloud Architect",
    company: "SkyNet",
    salary: "₹1.8M/yr - ₹3M/yr",
    location: "Dubai, UAE",
    image: "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462562.6103875134!2d54.947554499999996!3d25.07575955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1698765645678!5m2!1sen!2sin",
  },
];

export default function JobsPage() {
  const [selectedJob, setSelectedJob] = useState(jobs[0]); // Default to the first job

  return (
    <div className="flex h-screen">


      {/* Job Details Section */}
      <div className="w-2/3 p-2">
        <h2 className="text-xl font-bold mb-4">Job Details</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">{selectedJob.company}</h3>
          <p className="mt-2 text-gray-700">📢 WE ARE HIRING</p>
          <p className="mt-2 text-gray-700">Delhi Public  School is looking for passionate and qualified educators to join our team. If you have a strong academic background and love teaching, apply now!
          </p>
          <p className="mt-2 text-gray-700">{selectedJob.salary}</p>
          <p className="mt-2 text-gray-700">{selectedJob.location}</p>
          <div className="flex flex-row justify-evenly pt-4 pb-4  ">
            <li className="list-none">
              <h2 className="font-semibold">Postison</h2>
              <p>PRT All Subjects</p>
              <p>TGT English</p>
              <p>PGT Physics</p>

            </li>
            <li className="list-none">
              <h2 className="font-semibold">Qualifications</h2>
              <p>Garaducation , B.ED , CTET</p>
              <p>B.A , B.Ed</p>
              <p> M.Sc (Physics),B.ED </p>
            </li>
          </div>

          <p>
            📅 <strong> Walk-in Interview:</strong>
            25 February 2025 (10 AM - 2 PM)


          </p>
          <p>
            📍<strong>Location:</strong>  Lucknow, Uttar Pradesh
          </p>
          <p>
            📩<strong> Contact: </strong>+91-9876543210 | careers@springfield.edu.in
          </p>
        </div>

      </div>


      {/* Job List Section */}
      <div className="w-2/5 bg-gray-100 p-2 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Job List</h2>
        <ul>
          {jobs.map((job) => (
            <li
              key={job.id}
              onClick={() => setSelectedJob(job)}
              className={`p-2 mb-2 cursor-pointer rounded-lg ${selectedJob.id === job.id
                ? "bg-[#6366f1] text-white"
                : "bg-white hover:bg-gray-200"
                }`}
            >
              <div className="flex items-center">
                <Image
                
                    height={10}
                    width={10}
                  src={job.image}
                  alt={job.title}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{job.company}</h3>
                  <p className="text-sm text-gray-600">{job.company}</p>
                  <p className="text-sm text-gray-600">{job.salary}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

