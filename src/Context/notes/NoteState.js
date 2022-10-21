import React, { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {

    const url = "http://localhost:5000"
    const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0ZDA0YjA2YmEzNGMzOTRjYjQxZDYzIn0sImlhdCI6MTY2NjMzNjYwNX0.Pu-VJv_ADC1TMYJfKmIAdS801Mizmk-FwBeLnOrNvaw";

    const notesInitial = []

    const [notes, setNotes] = useState(notesInitial);

    // Get all Note
    const getNotes = async () => {
        // TODO: API call

        const response = await fetch(`${url}/notes/fetchallnotes`, {
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
        // TODO: API call

        const response = await fetch(`${url}/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': authToken
            },
            body: JSON.stringify({title, description, tag})
        });

        console.log("Adding a new note");
        const note = { "title": title, "description": description, "tag": tag };
        setNotes(notes.concat(note))
    }
    // Delete a Note
    const deleteNote = (id) => {
        // TODO: API call
        console.log("Deleting the note with id " + id);
        const newNote = notes.filter((note) => { return note._id !== id });
        setNotes(newNote);
    }
    // Edit a Note
    const editNote = async (id, title, description, tag) => {
        //API Call

        const response = await fetch(`${url}/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': authToken
            },
            body: JSON.stringify({title, description, tag})
        });
        const json = response.json();

        //Logic to edit in client
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }

        }
    }

    return (
        <NoteContext.Provider value={{ notes, getNotes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;