import React, { useContext } from 'react';
import NoteContext from '../Context/notes/noteContext';
import Noteitem from './Noteitem';


const Notes = (props) => {

    const context = useContext(NoteContext);
    const {notes, setNotes} = context;

  return (
    <div className="row my-3">
            <h2>Your Notes</h2>
            {notes.map ((note) => {
                return <Noteitem note= {note}/>
            })}
            </div>
  )
}

export default Notes
