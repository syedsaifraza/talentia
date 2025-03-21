"use client";
import React, { useState } from "react";
import JobListCardWrapper from "./jobcard_wrapper_list";
import JobList from "./joblist";
import { JobSearchComponent } from "./search_page"; 
import Img1 from "../Company_Logos/Google.png";
import Img2 from "../Company_Logos/Facebook.png";
import Img3 from "../Company_Logos/Microsoft.png";
import Img4 from "../Company_Logos/Apple.png";
import Img5 from "../Company_Logos/Atlassian.png";
import Img6 from "../Company_Logos/Amazone.png"
import Img7 from "../Company_Logos/JaneStreet.png";
import Img8 from "../Company_Logos/Amazone.png";
import Img9 from "../Company_Logos/Nvidia.png";
import Img10 from "../Company_Logos/Snapchat.webp";
import { StaticImageData } from "next/image";

// Job interface with optional salary
interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  promoted?: boolean;
  salary?: string;
  logo: StaticImageData;
  description: string;
}

const jobs: Job[] = [
  {
    id: 1,
    title: "Deputy Manager - Two Wheeler",
    company: "Google",
    location: "Purulia-I, West Bengal, India (On-site)",
    description:
      "Responsible for managing two-wheeler loan sales and customer relationships.",
    promoted: true,
    logo: Img1,
  },
  {
    id: 2,
    title: "Software Development Engineer - IV",
    company: "Facebook",
    location: "Bhubaneswar, Odisha, India (Remote)",
    description:
      "Design, develop, and optimize backend services using Java and Spring Boot.",
    promoted: true,
    logo: Img2,
  },
  {
    id: 3,
    title: "Lead Backend Developer",
    company: "Microsoft",
    location: "Bhubaneswar, Odisha, India (Remote)",
    salary: "₹2.5M/yr - ₹3M/yr",
    description:
      "Lead a team of backend developers to build scalable web applications.",
    promoted: true,
    logo: Img3,
  },
  {
    id: 4,
    title: "Frontend Developer",
    company: "Apple",
    location: "Bangalore, India (Hybrid)",
    description: "Build and maintain user interfaces with React and Tailwind CSS.",
    logo: Img4,
  },
  {
    id: 5,
    title: "UI/UX Designer",
    company: "Atlassian",
    location: "Mumbai, India (Remote)",
    description:
      "Create visually appealing and user-friendly designs for web and mobile apps.",
    logo: Img5,
  },
  {
    id: 6,
    title: "Data Analyst",
    company: "Amazon",
    location: "Hyderabad, India (On-site)",
    description:
      "Analyze large datasets to extract insights and create reports for business strategy.",
    logo: Img6,
  },
  {
    id: 7,
    title: "DevOps Engineer",
    company: "JaneStreet",
    location: "Pune, India (Hybrid)",
    description:
      "Automate deployment pipelines and manage cloud infrastructure.",
    logo: Img7,
  },
  {
    id: 8,
    title: "Cybersecurity Specialist",
    company: "LinkedIn",
    location: "Delhi, India (On-site)",
    description:
      "Protect company systems from cyber threats and conduct security audits.",
    logo: Img8,
  },
  {
    id: 9,
    title: "AI/ML Engineer",
    company: "Nvidia",
    location: "Chennai, India (Remote)",
    description:
      "Develop machine learning models for predictive analytics and automation.",
    logo: Img9,
  },
  {
    id: 10,
    title: "Product Manager",
    company: "Snapchat",
    location: "Kolkata, India (Hybrid)",
    description:
      "Define product vision and collaborate with teams to deliver innovative solutions.",
    logo: Img10,
  },
];

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter jobs based on the search query
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Top Job Picks for You</h2>
      <JobList jobs={filteredJobs} />
      <JobSearchComponent onSearch={(query:any) => setSearchQuery(query)} />
      <div className="flex gap-2 px-2">
        <div className="rounded-md bg-slate-800 py-0.5 px-2.5 border border-transparent text-sm text-white transition-all shadow-sm">
          3-5 years
        </div>
        <div className="rounded-md bg-gradient-to-tr from-slate-800 to-slate-700 py-0.5 px-2.5 border border-transparent text-sm text-white transition-all shadow-sm">
          Full time
        </div>
        <div className="rounded-md border border-slate-300 py-0.5 px-2.5 text-center text-sm transition-all shadow-sm text-slate-600">
          Remote
        </div>
        <div className="rounded-md bg-slate-100 py-0.5 px-2.5 border border-transparent text-sm text-slate-600 transition-all shadow-sm">
          +1000 employees
        </div>
      </div>
      <JobListCardWrapper jobs={filteredJobs} />
    </div>
  );
}
