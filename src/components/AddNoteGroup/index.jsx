import React, { useState } from "react";
import AddNoteModal from "../AddNoteModal";
import { useDispatch, useSelector } from "react-redux";
import { showNoteGroupCreator } from "../../actions/createNoteGroup";

function AddNoteGroup() {
    const showModal = useSelector(state => state.createNoteGroupReducer.show);
    const dispatch = useDispatch();

    return (
        <div>
            {showModal && <AddNoteModal />}
            <button id="addNoteGroup"
                    onClick={() => dispatch(showNoteGroupCreator())}>
                Add Note Group
            </button>
        </div>
    )
}

export default AddNoteGroup;