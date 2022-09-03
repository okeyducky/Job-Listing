import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useJobsContext } from '../hooks/useJobsContext'

const JobStatusForm = ({ job }) => {
    const id = job._id;
    const { jobDispatch } = useJobsContext();

    const [status, setStatus] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus(e.target.value);
    }

    useEffect(() => {
        const updateStatus= async()=>{
            try {
                const response = await axios.patch(`/api/jobs/${id}`, { status });
                const job = response.data;
                jobDispatch({ type: 'UPDATE_JOB', payload: job })
            }
            catch (error) {
                console.log(error.response)
            }
        }
        if(status){
            updateStatus();
        }
    }, [status])

    return (
        <div>
            <form onChange={handleSubmit}>
                <label>Change Status</label>
                <select name="status" value={status} >
                    <option value="scheduled">Scheduled</option>
                    <option value="active">Active</option>
                    <option value="invoicing">Invoicing</option>
                    <option value="to priced">To priced</option>
                    <option value="completed">Completed</option>
                </select>
            </form>
        </div>
    )
}

export default JobStatusForm;