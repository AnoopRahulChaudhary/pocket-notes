import { UPDATE_GROUP_SELECTION } from "../actions/selectedNoteGroup";

const initialState = {
    selectedNoteGroup : ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_GROUP_SELECTION: 
            return {
                ...state,
                selectedNoteGroup: action.payload
            }
        default :
            return state;
    }
}

export default reducer;