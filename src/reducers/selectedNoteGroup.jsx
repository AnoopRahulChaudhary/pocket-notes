import { UPDATE_GROUP_SELECTION } from "../actions/selectedNoteGroup";

const initialState = {
    name : '' 
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_GROUP_SELECTION: 
            return {
                ...state,
                name : action.payload
            }
        default :
            return state;
    }
}

export default reducer;