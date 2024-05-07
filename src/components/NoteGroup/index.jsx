import React from "react";

function NoteGroup({name, color}) {

    const nameArray = name.split(" ");
    const firstCharOfFirstLetter = nameArray[0].trim().slice(0, 1);
    let firstCharOfSecondLetter = '';
    if (nameArray.length > 1) {
        firstCharOfSecondLetter = nameArray[1].slice(0, 1);
    }

    return (
        <div>
            <span style={{backgroundColor: color}}>{firstCharOfFirstLetter}{firstCharOfSecondLetter}</span>&nbsp;
            <span>{name}</span>
        </div>
    )
}

export default NoteGroup;