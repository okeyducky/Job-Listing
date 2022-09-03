import React from 'react';
import { Link } from "react-router-dom";

const JobCard = ({job}) => {
    return (
        <>
          <Link to={`/job/${job._id}`}>
            <li>{job.title}</li>
          </Link>
          <li>{job.location}</li>
          <li>${job.pay} Per hour</li>
          <li>{job.client.name}</li>
        </>

    )
}

export default JobCard;