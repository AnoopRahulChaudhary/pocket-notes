import React from "react";
import getNoteGroupShortName from "../../../utils/noteGroupShortName";
import { useDispatch } from "react-redux";
import { updateGroupSelection } from "../../../actions/selectedNoteGroup";

function NoteGroup({name, color}) {
    console.log(name);
    const dispatch = useDispatch();

    const shortName = getNoteGroupShortName(name);

    function updateSelectedGroup() {
        dispatch(updateGroupSelection(name))
    }

    return (
        <div onClick={updateSelectedGroup}>
            <span style={{backgroundColor: color}}>{shortName}</span>&nbsp;
            <span>{name}</span>
        </div>
    )
}

export default NoteGroup;