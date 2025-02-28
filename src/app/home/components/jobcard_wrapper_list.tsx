import JobCard from "./JobCard";

interface Job {
  id: number;
  title: string;
  description:string;
  company: string;
  location: string;
  salary?: string; 
}

interface JobListProps {
  jobs: Job[];
}

export default function JobListCardWrapper({ jobs }: JobListProps) {
  return (
    <div className="space-y-4 flex flex-wrap">
      {jobs.map((job) => (
         
        <JobCard key={job.id}
        companyLogo="https://picsum.photos/80/80"
        jobTitle= {job.title}
        jobDescription="job description lorem23"
        tags = {["Sample 1","Sample 2","Sample 3"]}
        onApply={()=>alert("Apply")}
        onMessage={()=>alert("Apply")}   />
        
      ))}
    </div>
  );
}
