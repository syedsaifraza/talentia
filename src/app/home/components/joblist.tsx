import { JobItem } from "./jobitem";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary?: string;
  promoted: boolean;
}

interface JobListProps {
  jobs: Job[];
}

export default function JobList({ jobs }: JobListProps) {
  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <JobItem key={job.id}
        logo="https://picsum.photos/80/80"
        title= {job.title}
        company= {job.company}
        location= {job.location}
        salary= {"12LPA"}   />
      ))}
    </div>
  );
}
