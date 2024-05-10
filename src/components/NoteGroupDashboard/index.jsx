import React from "react";
import NoteGroups from "./NoteGroups";
import AddNoteGroupButton from "./AddNoteGroupButton";

function NoteGroupDashboard() {
    return(
        <div>
            <NoteGroups />
            <AddNoteGroupButton />
        </div>
    )
}

export default NoteGroupDashboard;