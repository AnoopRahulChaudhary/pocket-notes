import { ADD_NOTE } from "../actions/notes";

const initialState = {
    notes : {...JSON.parse(localStorage.getItem("notes"))}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE :
            const noteGroup = action.payload.noteGroup;
            let oldNotesOfGroup = state.notes[noteGroup] || [];
            console.debug(oldNotesOfGroup)
            
            return {
                notes : {
                    ...state.notes,
                    [noteGroup] : [...oldNotesOfGroup, action.payload.newNote] 
                }
            };
        default :
            return state;
    }
}

export default reducer;