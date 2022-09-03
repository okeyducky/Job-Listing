import { useEffect, useState } from "react";
import axios from 'axios';
import { useJobsContext } from "../hooks/useJobsContext"


import JobCard from '../components/JobCard'
import JobFilter from "../components/JobFilter";

const Home = () => {
  const { jobs, jobDispatch } = useJobsContext();
  const [filteredJob, setFilteredJob] = useState();

  const handleSubmit = (e) => {
    const condition = e.target.value;
    if (condition === "all") {
      setFilteredJob(jobs);
    }
    else {
      const filter = jobs.filter(j => j.status === condition);
      setFilteredJob(filter);
    }

  }


  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('/api/jobs');
        const jobs = response.data;
        jobDispatch({ type: 'SET_JOBS', payload: jobs })
      }
      catch (error) {
        console.log(error.response)
      }
    }
    fetchJobs();

  }, [jobDispatch])

  return (
    <div className="home">
      <h1>Home</h1>
      <JobFilter handleSubmit={handleSubmit} />
      {filteredJob ? (filteredJob.map(job => (
        <JobCard job={job} key={job._id} />
      ))) : (jobs && jobs.map(job => (
        <JobCard job={job} key={job._id} />
      )))
      }
    </div>
  )
}

export default Home