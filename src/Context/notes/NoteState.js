import React, { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {

    const [state, setState] = useState({
        "name": "Jai",
        "class": "5b"
    });

    const update = () => {
        setTimeout(() => {
            setState({
                "name": "Jai Agarwal",
                "class": "Working"
            })
        }, 1000);
    }

    return (
        <NoteContext.Provider value = {{state, update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;