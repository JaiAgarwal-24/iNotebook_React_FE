import React, { useContext } from 'react';
import NoteContext from '../Context/notes/noteContext';
import Addnote from './Addnote';
import Noteitem from './Noteitem';


const Notes = (props) => {

    const context = useContext(NoteContext);
    const { notes, addNote } = context;

    return (
        <>
            <Addnote />
            <div className="row my-3">
                <h2>Your Notes</h2>
                {notes.map((note) => {
                    return <Noteitem key={note._id} note={note} />
                })}
            </div>
        </>
    )
}

export default Notes
