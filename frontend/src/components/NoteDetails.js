import React,{ useState }  from 'react';
import axios from 'axios';
import { useNotesContext } from "../hooks/useNotesContext";
import EditNoteForm from './EditNoteForm';

const NoteDetails = ({ note }) => {
    const { noteDispatch } = useNotesContext();
    const [isEditing, setIsEditing]= useState(false);

    const toggleEditForm=()=>{
        setIsEditing(!isEditing)
    }


    const handleDelete = async () => {
        try {
            const response = await axios.delete(`/api/notes/${note._id}`);
            const resData = response.data;
            noteDispatch({ type: 'DELETE_NOTE', payload: resData })
        }
        catch (error) {
            console.log(error.response)
        }

    }

    return (
        <>     
            {isEditing ? <EditNoteForm noteID={note._id} toggleEditForm={toggleEditForm}/> :
                <>
                    <p>{note.title}</p>
                    <p>{note.content}</p>
                    <button onClick={toggleEditForm}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </>

            }
        </>

    )
}

export default NoteDetails;