import React, { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {

    const url = "http://localhost:5000"
    const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0ZDA0YjA2YmEzNGMzOTRjYjQxZDYzIn0sImlhdCI6MTY2NjM0MDQ3NX0.2J4V4qhI0WI2mGIU-D84WZxm5mjudXU6zpfoUNsjw7g";

    const notesInitial = []

    const [notes, setNotes] = useState(notesInitial);

    // Get all Note
    const getNotes = async () => {
        // API call

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
        //  API call

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
    const deleteNote = async (id) => {
        //  API call

        const response = await fetch(`${url}/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': authToken
            },
        });

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