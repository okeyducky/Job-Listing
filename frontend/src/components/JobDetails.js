import React from 'react';
import { useJobsContext } from "../hooks/useJobsContext"

import JobStatusForm from './JobStatusForm';

const JobDetails = ({id}) => {
    const { jobs } = useJobsContext();
    const job = jobs.filter(j => j._id === id)[0];

    

    return (
        <>
        <p>{job.title}</p>
        <p>{job.status}</p>
        <JobStatusForm job={job}/>    
        </>

    )
}

export default JobDetails;