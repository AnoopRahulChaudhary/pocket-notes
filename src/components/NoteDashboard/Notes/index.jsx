import React from "react";
import Note from "../Note";
import { useSelector } from "react-redux";
import styles from './index.module.css'

function Notes({noteGroup}) {
    const notes = useSelector(state => state.notesReducer.notes[noteGroup.name]);
    console.log(notes);

    return (
        <div className={styles.note_group_container}>
            {notes && notes.map(note => <Note content={note.content} createDate={note.createDate} createTime={note.createTime}/>)}
        </div>
    )
}

export default Notes;