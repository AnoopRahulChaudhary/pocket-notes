import React, { useState } from "react";
import AddNoteModal from "../AddNoteModal";
import { useDispatch, useSelector } from "react-redux";

function AddNoteGroup() {
    const showModal = useSelector(state => state.createNoteGroupReducer.show);
    const dispatch = useDispatch();

    return (
        <div>
            {showModal && <AddNoteModal />}
            <button 
                    onClick={() => dispatch({type: 'SHOW_CREATE_NOTE_GROUP_CONTAINER'})}>
                Add Note Group
            </button>
        </div>
    )
}

export default AddNoteGroup;