import React from 'react';
import { useEffect } from "react";
import axios from 'axios';
import { useNotesContext } from "../hooks/useNotesContext";
import NoteForm from "./NoteForm";
import NoteDetails from "./NoteDetails";

const Note = ({ jobID }) => {
    const { notes, noteDispatch } = useNotesContext();

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await axios.get(`/api/notes/${jobID}`);
                const resData = response.data;
                noteDispatch({ type: 'SET_NOTES', payload:  resData })
            }
            catch (error) {
                console.log(error.response)
            }

        }
        fetchNotes();
    },[noteDispatch,jobID])

    return (
        <>
            <div>Note</div>
            <NoteForm jobID={jobID} />
            {notes && notes.map(note => (
                <NoteDetails key={note._id} note={note}/>
            ))}
        </>

    )
}

export default Note;