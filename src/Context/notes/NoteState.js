import React, { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {

    const notesInitial = [
        {
          "_id": "634e6c1b672400aab9f55cc6",
          "user": "634d04b06ba34c394cb41d63",
          "title": "My Title",
          "description": "Please wake me up early",
          "tag": "Personal",
          "date": "2022-10-18T09:04:27.873Z",
          "__v": 0
        },
        {
          "_id": "634e6c1b672400aab9f555cc6",
          "user": "634d04b06ba34c394cb41d63",
          "title": "My Title",
          "description": "Please wake me up early",
          "tag": "Personal",
          "date": "2022-10-18T09:04:27.873Z",
          "__v": 0
        },
        {
          "_id": "634e6c1b672400aab9655cc6",
          "user": "634d04b06ba34c394cb41d63",
          "title": "My Title",
          "description": "Please wake me up early",
          "tag": "Personal",
          "date": "2022-10-18T09:04:27.873Z",
          "__v": 0
        },
        {
          "_id": "634e6c1b672400aab9f755cc6",
          "user": "634d04b06ba34c394cb41d63",
          "title": "My Title",
          "description": "Please wake me up early",
          "tag": "Personal",
          "date": "2022-10-18T09:04:27.873Z",
          "__v": 0
        },
        {
          "_id": "634e6c1b672400aab89f55cc6",
          "user": "634d04b06ba34c394cb41d63",
          "title": "My Title",
          "description": "Please wake me up early",
          "tag": "Personal",
          "date": "2022-10-18T09:04:27.873Z",
          "__v": 0
        },
        {
          "_id": "634e6c1b672400aa9b9f55cc6",
          "user": "634d04b06ba34c394cb41d63",
          "title": "My Title",
          "description": "Please wake me up early",
          "tag": "Personal",
          "date": "2022-10-18T09:04:27.873Z",
          "__v": 0
        },
        {
          "_id": "634e6c1b672400aab9f558cc6",
          "user": "634d04b06ba34c394cb41d63",
          "title": "My Title",
          "description": "Please wake me up early",
          "tag": "Personal",
          "date": "2022-10-18T09:04:27.873Z",
          "__v": 0
        }
      ]

    const [notes, setNotes] = useState(notesInitial);

    // Add a Note
    const addNote = (title, description, tag) => {
        // TODO: API call
        console.log("Adding a new note");
        const note = {"title" : title, "description" : description, "tag": tag};
        setNotes(notes.concat(note))
    }
    // Delete a Note
    const deleteNote = (id) =>{

    }
    // Edit a Note
    const editNote = () => {

    }

    return (
        <NoteContext.Provider value = {{notes, setNotes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;