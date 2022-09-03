const express = require('express');
const {
    getNotes,
    createNote,
    deleteNote,
    updateNote,
} = require('../controllers/noteController');

const router = express.Router();


//Get all notes
router.get('/:jobID', getNotes);

// Post a new note
router.post('/', createNote);

//Delete a note
router.delete('/:id', deleteNote);

// Update note
router.patch('/:id', updateNote)

module.exports = router;