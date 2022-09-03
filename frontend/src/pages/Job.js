import React from 'react';
import { useParams } from "react-router-dom";


import JobDetails from '../components/JobDetails';
import NoteLists from '../components/NoteLists';

const Job = () => {
    const { id } = useParams();
    return (
        <>
            <JobDetails id={id} />
            <NoteLists jobID={id} />
        </>

    )
}

export default Job