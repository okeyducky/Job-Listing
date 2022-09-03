const Job = require('../models/jobModel');
const mongoose = require('mongoose');


// get all job
const getJobs = async (req, res) => {
    try {
        const jobs = await Job.find({}).populate('client').sort({ createAt: -1 });
        res.status(200).json(jobs);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// get a single job
const getJob = async (req, res) => {
    try {
        const { id } = req.params;

        //check if the id is valid
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error('No such job');
        }

        const job = await Job.findById(id).populate('client');

        if (!job) {
            throw new Error('No such job');
        }

        res.status(200).json(job);
    }
    catch (error) {
        res.status(404).json({ error: error.message });
    }
}

// create a new job
const createJob = async (req, res) => {
    try {
        const job = await Job.create({ ...req.body });
        res.status(200).json(job);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// delete a job
const deleteJob = async (req, res) => {
    try {
        const { id } = req.params;

        //check if the id is valid
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error('No such job');
        }

        const job = await Job.findOneAndDelete({ _id: id });

        if (!job) {
            throw new Error('No such job');
        }

        res.status(200).json(job);
    }
    catch (error) {
        res.status(404).json({ error: error.message });
    }
}

// update job 
const updateJob = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        console.log(status)

        //check if the id is valid
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error('No such job');
        }

        const doc = await Job.findOneAndUpdate(
            { _id: id },
            { ...req.body },
            { returnOriginal: false },
        );
        
      
        if (!doc) {
            throw new Error('No such job');
        }

        const job=await Job.findOne({ _id: id });
        console.log(job)
        res.status(200).json(job);
    }
    catch (error) {
        res.status(404).json({ error: error.message });
    }
}


module.exports = {
    getJobs,
    getJob,
    createJob,
    deleteJob,
    updateJob,
}