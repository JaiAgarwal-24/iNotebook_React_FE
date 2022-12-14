import React, { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {

    const url1 = "http://localhost:5000"
    const authToken = localStorage.getItem('token');

    const notesInitial = []

    const [notes, setNotes] = useState(notesInitial);

    // Get all Note
    const getNotes = async () => {
        // API call

        const response = await fetch(`${url1}/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': authToken
            },
        });
        const json = await response.json();
        console.log(json);
        setNotes(json);
    }

    // Add a Note
    const addNote = async (title, description, tag) => {
        //  API call

        const response = await fetch(`${url1}/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': authToken
            },
            body: JSON.stringify({title, description, tag})
        });

        const json = await response.json();
        const note = { json };
        setNotes(notes.concat(note));
        console.log(json);
    }
    // Delete a Note
    const deleteNote = async (id) => {
        //  API call

        const response = await fetch(`${url1}/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': authToken
            },
        });

        const json = await response.json();
        console.log(json);

        console.log("Deleting the note with id " + id);
        const newNote = notes.filter((note) => { return note._id !== id });
        setNotes(newNote);
    }
    // Edit a Note
    const editNote = async (id, title, description, tag) => {
        //API Call

        const response = await fetch(`${url1}/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': authToken
            },
            body: JSON.stringify({title, description, tag})
        });
        const json = await response.json();
        console.log(json);

        getNotes();

        // let newNotes = JSON.parse(JSON.stringify(notes))

        // //Logic to edit in client
        // for (let index = 0; index < newNotes.length; index++) {
        //     const element = newNotes[index];
        //     if (element._id === id) {
        //         newNotes[index].title = title;
        //         newNotes[index].description = description;
        //         newNotes[index].tag = tag;
        //         break;
        //     }
        // }
        // setNotes(newNotes);
    }

    return (
        <NoteContext.Provider value={{ notes, getNotes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;