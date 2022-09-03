import React, { useState } from 'react';
import axios from 'axios';
import { useNotesContext } from '../hooks/useNotesContext'

const NoteForm=({jobID})=> {
    const { noteDispatch } = useNotesContext();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const reset=()=>{
        setTitle('');
        setContent('');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('/api/notes', {title,content,jobID});
            const note=response.data;
            noteDispatch({type: 'CREATE_NOTE', payload: note})
            reset();
        }
        catch(error){
            console.log(error.response)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Add a new note</h3>
                <label>Note Title</label>
                <input
                    name="title"
                    value={title}
                    type="text"
                    onChange={e => { setTitle(e.target.value) }}
                />
                <input
                    name="content"
                    placeholder='Please write down your note'
                    value={content}
                    type="text"
                    onChange={e => { setContent(e.target.value) }}
                />
                <button>Add a note</button>
            </form>
        </div>
    )
}

export default NoteForm;