function updateNotes(oldNotes, newNote, groupName) {
    console.log(`notes before update : ${JSON.stringify(oldNotes)}`)

    const groupNotes = oldNotes[groupName] || [];
    const updatedNotes = {...oldNotes, [groupName]: [...groupNotes, newNote]};

    console.log(`notes after update for group ${groupName} and newNote ${JSON.stringify(newNote)}: ${JSON.stringify(groupNotes)}`);

    return updatedNotes;
}

export {updateNotes};