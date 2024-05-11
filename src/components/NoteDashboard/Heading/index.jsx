import React from "react";
import getNoteGroupShortName from "../../../utils/noteGroupShortName";
import Note from "../Note";
import NoteGroup from "../../NoteGroupDashboard/NoteGroup";
import styles from './index.module.css';


function Heading({noteGroup}) {
    const shortName = getNoteGroupShortName(noteGroup.name);

    return (
        <div className={styles.heading_container}>
            <div 
                className={styles.short_name} 
                style={{backgroundColor: noteGroup.color}} >
                <span>{shortName}</span>
            </div>

            <div className={styles.full_name}><span>{noteGroup.name}</span></div>
        </div>
    )
}

export default Heading;