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

    const [notes, setNotes] = useState(notesInitial)

    return (
        <NoteContext.Provider value = {{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;