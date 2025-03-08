import { JobItem } from "./jobitem";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary?: string;
  promoted: boolean;
  logo: string;
}

interface JobListProps {
  jobs: Job[];
}

export default function JobList({ jobs }: JobListProps) {
  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <JobItem
          key={job.id}
          logo={job.logo}
          title={job.title}
          company={job.company}
          location={job.location}
          salary={job.salary || "12LPA"} // Default salary if not provided
        />
      ))}
    </div>
  );
}