import { combineReducers } from "redux";
import NoteGroupReducer from "./noteGroup";
import notesReducer from './notes';
import selectedNoteGroupReducer from './selectedNoteGroup'
import createNoteGroupReducer from './createNoteGroup'

const reducer = combineReducers({
    NoteGroupReducer,
    notesReducer,
    selectedNoteGroupReducer,
    createNoteGroupReducer
})

export default reducer;