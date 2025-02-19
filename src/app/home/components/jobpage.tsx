import JobList from "./joblist";

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
    </div>
  );
}
