import { ADD_NOTE_GROUP } from "../actions/noteGroup";

const oldNoteGroupList = JSON.parse(localStorage.getItem("noteGroupList")|| '[]');
const initialState = {
    groups : [
        ...oldNoteGroupList
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE_GROUP: 
            const newGroup = {
                groupName : action.payload.groupName,
                color : action.payload.color
            }

            return {
                ...state,
                groups: [...state.groups, newGroup]
            }
        default :
            return state;
    }
}

export default reducer;

