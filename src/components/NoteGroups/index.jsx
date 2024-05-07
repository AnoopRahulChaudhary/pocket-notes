import React from "react";
import {useSelector} from 'react-redux' 
import NoteGroup from "../NoteGroup";

function NoteGroups() {
    const groups = useSelector(state => state.NoteGroupReducer.groups);
    console.debug(groups);

    return (
        <div>
            {groups.map(group => <NoteGroup name={group.groupName} color={group.color}/>)}
        </div>
    );
}

export default NoteGroups;