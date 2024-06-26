import React from "react";
import getNoteGroupShortName from "../../../utils/noteGroupShortName";
import { useDispatch, useSelector } from "react-redux";
import { updateGroupSelection } from "../../../actions/selectedNoteGroup";
import styles from './index.module.css';

function NoteGroup({name, color}) {
    const selectedNotesGroup = useSelector(state => state.selectedNoteGroupReducer.selectedNoteGroup);
    const dispatch = useDispatch();

    const shortName = getNoteGroupShortName(name);

    function updateSelectedGroup() {
        const groupPayLaod = {
            name: name,
            color: color
        }
        dispatch(updateGroupSelection(groupPayLaod))
    }

    return (
        <div 
            onClick={updateSelectedGroup} 
            className={styles.note_group_container}
            style={{backgroundColor: selectedNotesGroup.name === name && 'rgb(47, 47, 47, 0.17)'}}
         >
            <div 
                className={styles.short_name} 
                style={{backgroundColor: color}} >
                <span>{shortName}</span>
            </div>

            <div className={styles.full_name}><span>{name}</span></div>
        </div>
    )
}

export default NoteGroup;