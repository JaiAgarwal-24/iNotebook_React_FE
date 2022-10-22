import React, { useContext, useState } from 'react';
import NoteContext from '../Context/notes/noteContext';

const Addnote = () => {

    const context = useContext(NoteContext);
    const { addNote } = context;
    
    const [note, setNote] = useState({title: "", description: "", tag: "default"})

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
    }

    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <div className="container my-3">

                <h2>Add a Note</h2>
                <form className='my-3'>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" name='description' onChange={onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" id="tag" name='tag' onChange={onChange}/>
                    </div>
                    <button type="submit" onClick = {handleClick} className="btn btn-primary">Add Note</button>
                </form>
            </div>
        </div>
    )
}

export default Addnote;
