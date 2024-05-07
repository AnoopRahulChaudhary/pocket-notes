import React from "react";
import Note from "./Note";
import { useSelector } from "react-redux";

function Notes({noteGroup}) {
    console.log('noteGroup in notes ' + noteGroup)
    const notes = useSelector(state => state.notesReducer.notes[noteGroup]);
    console.log(notes);

    return (
        <div>
            {notes && notes.map(note => <Note content={note.content} createDate={note.createDate} createTime={note.createTime}/>)}
        </div>
    )
}

export default Notes;