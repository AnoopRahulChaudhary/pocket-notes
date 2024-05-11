import { ADD_NOTE } from "../actions/notes";

const initialState = {
    notes : {...JSON.parse(localStorage.getItem("notes"))}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE :
            const noteGroupName = action.payload.noteGroupName;
            let oldNotesOfGroup = state.notes[noteGroupName] || [];
            console.debug(oldNotesOfGroup)
            
            return {
                notes : {
                    ...state.notes,
                    [noteGroupName] : [...oldNotesOfGroup, action.payload.newNote] 
                }
            };
        default :
            return state;
    }
}

export default reducer;