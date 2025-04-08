"use client";
import React, { useState } from "react";
import JobListCardWrapper from "./jobcard_wrapper_list";
import JobList from "./joblist";
import { JobSearchComponent } from "./search_page";
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

const jobs: Job[] = [];

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
