import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../../../actions/notes";
import styles from "./index.module.css"

function Footer({noteGroup}) {
    const [newNoteContent, setNewNoteContent] = useState('');
    const dispatch = useDispatch();

    function addNewNote() {
        const now = new Date();
        const newNote = {
            content : newNoteContent,
            createDate : now.getTime(),
            createTime : now.getDate()
        }
        console.debug(newNote);

        let allNotes = JSON.parse(localStorage.getItem('notes')) || {};
        let groupNotes = allNotes[noteGroup.name] || [];
        console.debug(allNotes);
        console.debug(groupNotes);
        const updatedNotes = {...allNotes, [noteGroup.name]: [...groupNotes, newNote]};
        console.debug(`updatedNotes - ${JSON.stringify(updatedNotes)}`);
        localStorage.setItem('notes', JSON.stringify(updatedNotes));

        const notePayload = {
            noteGroupName : noteGroup.name,
            newNote: newNote
        }
        dispatch(addNote(notePayload))
    }

    return (
        <div className={styles.footer_container}>
            <div className={styles.note_input_area}>
                <textarea 
                        className={styles.note_input_area}
                        onChange={(e) => setNewNoteContent(e.target.value)} 
                        placeholder="Enter your text here..........."
                        name="newNote" 
                        id="newNote" 
                >
                    {newNoteContent}
                </textarea>
            </div>
            <div className={styles.add_note_button}>
                {newNoteContent && <button onClick={addNewNote}>Add Note</button>}
                {!newNoteContent && <button onClick={addNewNote} disabled>Add Note</button>}
            </div>
        </div>
    )

}

export default Footer;