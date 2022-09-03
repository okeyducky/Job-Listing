import React,{ useState }  from 'react';
import axios from 'axios';
import { useNotesContext } from '../hooks/useNotesContext'

const EditNoteForm = ({noteID,toggleEditForm}) => {
    const { noteDispatch } = useNotesContext();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.patch(`/api/notes/${noteID}`,{title,content});
            const note=response.data;
            noteDispatch({type: 'UPDATE_NOTE', payload: note});
            toggleEditForm();
        }
        catch(error){
            console.log(error.response)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                <button>Update</button>
            </form>
        </div>
    )
}

export default EditNoteForm;