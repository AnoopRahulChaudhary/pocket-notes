function updateNotes(oldNotes, newNote, groupName) {
    console.debug(`notes before update : ${JSON.stringify(oldNotes)}`)

    const groupNotes = oldNotes[groupName] || [];
    const updatedNotes = {...oldNotes, [groupName]: [...groupNotes, newNote]};

    console.debug(`notes after update for group ${groupName} and newNote ${JSON.stringify(newNote)}: ${JSON.stringify(groupNotes)}`);

    return updatedNotes;
}

export {updateNotes};