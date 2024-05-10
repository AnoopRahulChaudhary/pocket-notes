const ADD_NOTE_GROUP = 'ADD_NOTE_GROUP';

function addNoteGroup(noteGroup){
    return {
        type : ADD_NOTE_GROUP,
        payload : noteGroup
    }
}

export {ADD_NOTE_GROUP, addNoteGroup}