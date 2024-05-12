import { ADD_NOTE } from "../actions/notes";
import { updateNotes } from "../utils/updateNotes";

const initialState = {
    notes : {...JSON.parse(localStorage.getItem("notes"))}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE :
            const updatedNotes = 
                updateNotes(state.notes, action.payload.newNote, action.payload.noteGroupName);
            return {
                notes : {
                    ...updatedNotes
                }
            };
        default :
            return state;
    }
}

export default reducer;