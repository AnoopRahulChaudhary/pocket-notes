import { SHOW_NOTE_GROUP_CREATOR, HIDE_NOTE_GROUP_CREATOR } from "../actions/createNoteGroup"

const initialState = {
    show : false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SHOW_NOTE_GROUP_CREATOR: 
            return {
                ...state,
                show : true
            }
        
        case HIDE_NOTE_GROUP_CREATOR: 
        return {
            ...state,
            show : false
        }
        
        default : 
            return state;
    }
}

export default reducer;