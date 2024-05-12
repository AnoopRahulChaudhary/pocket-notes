import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../../../actions/notes";
import styles from "./index.module.css"
import add_note_button_logo from '../../../assets/add_note_button.png'
import add_note_disabled_button_logo from '../../../assets/add_note_disabled_button.png'
import moment from 'moment';

function Footer({noteGroup}) {
    const [newNoteContent, setNewNoteContent] = useState('');
    const dispatch = useDispatch();

    function prepareNewNoteObject() {
        const now = new Date();
        return {
            content : newNoteContent,
            dateTimeInMilliSecond : now.getMilliseconds,
            createDate : moment(now).format('D MMMM YYYY'),
            createTime : moment(now).format('h:mm a'),
        }
    }

    function saveNewNoteToLocalStarage(newNote) {
        let allNotes = JSON.parse(localStorage.getItem('notes')) || {};
        let groupNotes = allNotes[noteGroup.name] || [];
        console.debug(`old notes in localstorage ${JSON.stringify(allNotes)}`);
        console.debug(`old group notes in localstorage for group ${noteGroup.name} : ${groupNotes}`);
        const updatedNotes = {...allNotes, [noteGroup.name]: [...groupNotes, newNote]};
        console.debug(`updatedNotes - ${JSON.stringify(updatedNotes)}`);
        localStorage.setItem('notes', JSON.stringify(updatedNotes));
    }

    function addNewNote() {
        const newNote = prepareNewNoteObject();
        console.debug(`new note - groupName ${noteGroup.name} : ${JSON.stringify(newNote)}`);

        saveNewNoteToLocalStarage(newNote);

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
                
                <div className={styles.add_note_button_container}>
                    {newNoteContent && 
                         <button 
                            className={styles.add_note_button} 
                            onClick={addNewNote}>
                                <img 
                                    src={add_note_button_logo} 
                                    alt="add_note_button_logo"
                                />
                        </button>
                    }

                    {!newNoteContent && 
                        <button 
                            className={styles.add_note_button_disabled}
                            onClick={addNewNote} disabled>
                                <img 
                                    src={add_note_disabled_button_logo} alt="add_note_disabled_button_logo"
                                />
                        </button>
                    }
                </div>
            </div>
        </div>
    )

}

export default Footer;