import React from "react";
import Note from "../Note";
import { useSelector } from "react-redux";

function Notes({noteGroup}) {
    const notes = useSelector(state => state.notesReducer.notes[noteGroup.name]);
    console.log(notes);

    return (
        <div>
            {notes && notes.map(note => <Note content={note.content} createDate={note.createDate} createTime={note.createTime}/>)}
        </div>
    )
}

export default Notes;