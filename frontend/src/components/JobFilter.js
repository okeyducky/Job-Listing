import React from 'react'


const JobFilter = ({handleSubmit}) => {
    return (
        <div>
            <form onChange={handleSubmit}>
                <label>Filter</label>
                <select name="Filter" >
                    <option value="all">All</option>
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

export default JobFilter;