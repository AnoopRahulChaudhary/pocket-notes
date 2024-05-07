const initialState = {
    notes : {...JSON.parse(localStorage.getItem("notes"))}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NEW_NOTE' :
            const noteGroup = action.payload.noteGroup;
            let oldNotesOfGroup = state.notes[noteGroup] || [];
            console.log(oldNotesOfGroup)
            
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