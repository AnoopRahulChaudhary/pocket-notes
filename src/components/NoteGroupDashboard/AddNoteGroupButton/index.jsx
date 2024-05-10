import React from "react";
import CreateNoteGroup from "../CreateNoteGroup";
import { useDispatch, useSelector } from "react-redux";
import { showNoteGroupCreator } from "../../../actions/createNoteGroup";

function AddNoteGroupButton() {
    const showModal = useSelector(state => state.createNoteGroupReducer.show);
    const dispatch = useDispatch();

    return (
        <div>
            {showModal && <CreateNoteGroup />}
            <button id="addNoteGroup"
                    onClick={() => dispatch(showNoteGroupCreator())}>
                Add Note Group
            </button>
        </div>
    )
}

export default AddNoteGroupButton;