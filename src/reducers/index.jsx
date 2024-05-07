import { combineReducers } from "redux";
import NoteGroupReducer from "./NoteGroups";
import notesReducer from './notes';
import selectedNoteGroupReducer from './selectedNoteGroup'

const reducer = combineReducers({
    NoteGroupReducer,
    notesReducer,
    selectedNoteGroupReducer
})

export default reducer;