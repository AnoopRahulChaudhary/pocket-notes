import React from "react";
import getNoteGroupShortName from "../../utils/noteGroupShortName";
import { useDispatch } from "react-redux";

function NoteGroup({name, color}) {
    console.log(name);
    const dispatch = useDispatch();

    const shortName = getNoteGroupShortName(name);

    function updateSelectedGroup() {
        dispatch({
            type: 'UPDATE_SELECTION',
            payload: name
        })
    }

    return (
        <div onClick={updateSelectedGroup}>
            <span style={{backgroundColor: color}}>{shortName}</span>&nbsp;
            <span>{name}</span>
        </div>
    )
}

export default NoteGroup;