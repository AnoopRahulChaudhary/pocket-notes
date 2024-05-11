import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../../../actions/notes";

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
        <div>
            <textarea 
                    onChange={(e) => setNewNoteContent(e.target.value)} 
                    name="newNote" 
                    id="newNote" 
                    cols="30" 
                    rows="10">
                {newNoteContent}
            </textarea>
            <div>
                {newNoteContent && <button onClick={addNewNote}>Add Note</button>}
                {!newNoteContent && <button onClick={addNewNote} disabled>Add Note</button>}
            </div>
            
        </div>
    )

}

export default Footer;