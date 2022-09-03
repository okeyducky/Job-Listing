const Note = require('../models/noteModel');
const mongoose = require('mongoose');


// get notes by jobID
const getNotes = async (req, res) => {
    const { jobID } = req.params;
    try {
        const notes = await Note.find({ jobID }).sort({ createAt: -1 });
        res.status(200).json(notes);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}
// create a new note
const createNote = async (req, res) => {
    try {
        const note = await Note.create({ ...req.body });
        res.status(200).json(note);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// delete a note
const deleteNote = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id)

        //check if the id is valid
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error('No such note');
        }

        const note = await Note.findOneAndDelete({ _id: id });

        if (!note) {
            throw new Error('No such note');
        }

        res.status(200).json(note);
    }
    catch (error) {
        res.status(404).json({ error: error.message });
    }
}

// update a note
const updateNote = async (req, res) => {
    try {
        const { id } = req.params;

        //check if the id is valid
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error('No such note');
        }

        const note = await Note.findOneAndUpdate(
            { _id: id },
            { ...req.body},
            { returnOriginal: false });
            
        if (!note) {
            throw new Error('No such note');
        }

        res.status(200).json(note);
    }
    catch (error) {
        res.status(404).json({ error: error.message });
    }
}


module.exports = {
    getNotes,
    createNote,
    deleteNote,
    updateNote,
}