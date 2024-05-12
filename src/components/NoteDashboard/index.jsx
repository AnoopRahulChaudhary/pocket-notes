import React from "react";
import Heading from "./Heading";
import Notes from "./Notes";
import NoteInputArea from "./NoteInputArea";
import styles from './index.module.css'

function NoteDashboard({noteGroup}) {
    return (
        <div className={styles.note_dashboard_container}>
            <Heading noteGroup={noteGroup}/>
            <Notes noteGroup={noteGroup}/>
            <NoteInputArea noteGroup={noteGroup}/>
        </div>
    );
}

export default NoteDashboard;