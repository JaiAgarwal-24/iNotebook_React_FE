import React, { useContext, useEffect } from 'react';
import NoteContext from '../Context/notes/noteContext';

export default function About() {
    const a = useContext(NoteContext);

    useEffect(() => {
        a.update();
    },[])

    return (
        <div>
            This is about {a.state.name} and he is in class {a.state.class}
        </div>
    )
}
