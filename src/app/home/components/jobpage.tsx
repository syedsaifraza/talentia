'use client'
import JobListCardWrapper from "./jobcard_wrapper_list";
import JobList from "./joblist";
import { JobSearchComponent } from "./search_page";

const jobs2 = [
  {
    id: 1,
    title: "Deputy Manager - Two Wheeler",
    company: "Bajaj Finserv",
    location: "Purulia-I, West Bengal, India (On-site)",
    description: "Responsible for managing two-wheeler loan sales and customer relationships.",
    promoted: true,
  },
  {
    id: 2,
    title: "Software Development Engineer - IV ",
    company: "Uplers",
    location: "Bhubaneswar, Odisha, India (Remote)",
    description: "Design, develop, and optimize backend services using Java and Spring Boot.",
    promoted: true,
  },
  {
    id: 3,
    title: "Lead Backend Developer",
    company: "Uplers",
    location: "Bhubaneswar, Odisha, India (Remote)",
    salary: "₹2.5M/yr - ₹3M/yr",
    description: "Lead a team of backend developers to build scalable web applications.",
    promoted: true,
  },
  {
    id: 4,
    title: "Frontend Developer",
    company: "TechSoft",
    location: "Bangalore, India (Hybrid)",
    description: "Build and maintain user interfaces with React and Tailwind CSS.",
  },
  {
    id: 5,
    title: "UI/UX Designer",
    company: "DesignPro",
    location: "Mumbai, India (Remote)",
    description: "Create visually appealing and user-friendly designs for web and mobile apps.",
  },
  {
    id: 6,
    title: "Data Analyst",
    company: "DataCorp",
    location: "Hyderabad, India (On-site)",
    description: "Analyze large datasets to extract insights and create reports for business strategy.",
  },
  {
    id: 7,
    title: "DevOps Engineer",
    company: "CloudX",
    location: "Pune, India (Hybrid)",
    description: "Automate deployment pipelines and manage cloud infrastructure.",
  },
  {
    id: 8,
    title: "Cybersecurity Specialist",
    company: "SecureNet",
    location: "Delhi, India (On-site)",
    description: "Protect company systems from cyber threats and conduct security audits.",
  },
  {
    id: 9,
    title: "AI/ML Engineer",
    company: "NeuralTech",
    location: "Chennai, India (Remote)",
    description: "Develop machine learning models for predictive analytics and automation.",
  },
  {
    id: 10,
    title: "Product Manager",
    company: "InnovateHub",
    location: "Kolkata, India (Hybrid)",
    description: "Define product vision and collaborate with teams to deliver innovative solutions.",
  },
];

const jobs = [
  {
    id: 1,
    title: "Deputy Manager - Two Wheeler",
    company: "Bajaj Finserv",
    location: "Purulia-I, West Bengal, India (On-site)",
    promoted: true,
  },
  {
    id: 2,
    title: "Software Development Engineer - IV (Backend Engineering, Java)",
    company: "Uplers",
    location: "Bhubaneswar, Odisha, India (Remote)",
    promoted: true,
  },
  {
    id: 3,
    title: "Lead Backend Developer",
    company: "Uplers",
    location: "Bhubaneswar, Odisha, India (Remote)",
    salary: "₹2.5M/yr - ₹3M/yr",
    promoted: true,
  },
];

export default function JobsPage() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Top Job Picks for You</h2>
      <JobList jobs={jobs} />
      <JobSearchComponent/>
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
      <JobListCardWrapper jobs={jobs2} />
    </div>
  );
}
