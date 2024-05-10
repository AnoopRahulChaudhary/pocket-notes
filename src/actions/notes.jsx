const ADD_NOTE = 'ADD_NOTE';

function addNote(notePayload) {
    return {
        type: ADD_NOTE,
        payload: notePayload
    }
}

export {ADD_NOTE, addNote}