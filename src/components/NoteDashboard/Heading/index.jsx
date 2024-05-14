import React from "react";
import getNoteGroupShortName from "../../../utils/noteGroupShortName";
import styles from './index.module.css';
import { useMediaQuery } from 'react-responsive';
import { useDispatch } from "react-redux";
import { updateGroupSelection } from "../../../actions/selectedNoteGroup";


function Heading({noteGroup}) {
    const isMobileView = useMediaQuery({ maxWidth: 576 });
    const shortName = getNoteGroupShortName(noteGroup.name);
    const dispatch = useDispatch();

    function removeSelectedGroup() {
        console.log('called removeSelectedGroup');
        dispatch(updateGroupSelection(''))
    }

    return (
        <div className={styles.heading_container}>
            {isMobileView &&
                <button 
                    className={styles.back_symbol} 
                    onClick={removeSelectedGroup}>
                        <span>&lt;-</span>
                </button>
            }

            <div
                className={styles.short_name} 
                style={{backgroundColor: noteGroup.color}}>
                <span>{shortName}</span>
            </div>

            <div className={styles.full_name}><span>{noteGroup.name}</span></div>
        </div>
    )
}

export default Heading;