import React from "react";
import getNoteGroupShortName from "../../utils/noteGroupShortName";

function Heading({noteGroup}) {
    const shortNameForNoteGroup = getNoteGroupShortName(noteGroup);

    return (
        <div>
            <span>{shortNameForNoteGroup}</span>&nbsp;
            <span>{noteGroup}</span>
        </div>
    )
}

export default Heading;