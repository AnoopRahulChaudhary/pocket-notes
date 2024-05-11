import React from "react";
import {useSelector} from 'react-redux';
import NoteGroup from "../NoteGroup";
import styles from './index.module.css';

function NoteGroups() {
    const groups = useSelector(state => state.NoteGroupReducer.groups);
    console.debug(JSON.stringify(groups));

    return (
        <div className={styles.note_groups_container}>
            {groups.map((group, index) => <NoteGroup key={index} name={group.groupName} color={group.color}/>)}
        </div>
    );
}

export default NoteGroups;