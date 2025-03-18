import { StaticImageData } from "next/image";
import JobCard from "./JobCard";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary?: string;
  promoted?: boolean;
  logo:StaticImageData;
  description: string; // Added description to match the jobs2 array
}

interface JobListProps {
  jobs: Job[];
}

export default function JobListCardWrapper({ jobs }: JobListProps) {
  return (
    <div className="space-y-4 flex flex-wrap">
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          logo={job.logo}
          company={job.company}
          location={job.location}
          jobTitle={job.title}
          jobDescription={job.description}
          tags={["Sample 1", "Sample 2", "Sample 3"]} // Static tags for now
          onApply={() => alert("Apply")}
          onMessage={() => alert("Message")}
        />
      ))}
    </div>
  );
}