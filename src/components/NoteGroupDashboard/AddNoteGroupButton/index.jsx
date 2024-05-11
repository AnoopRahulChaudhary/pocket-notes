import React from "react";
import CreateNoteGroup from "../CreateNoteGroup";
import { useDispatch, useSelector } from "react-redux";
import { showNoteGroupCreator } from "../../../actions/createNoteGroup";
import styles from './index.module.css'
import pluslogo from '../../../assets/plus-lg.svg';

function AddNoteGroupButton() {
    const showModal = useSelector(state => state.createNoteGroupReducer.show);
    const dispatch = useDispatch();

    return (
        <div>
            {showModal && <CreateNoteGroup />}
            <button className={styles.add_note_group_button} id="addNoteGroup"
                    onClick={() => dispatch(showNoteGroupCreator())}>   
                <img src={pluslogo} alt="plus-logo"/>
            </button>
        </div>
    )
}

export default AddNoteGroupButton;