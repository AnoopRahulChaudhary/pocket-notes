const SHOW_NOTE_GROUP_CREATOR = 'SHOW_CREATE_NOTE_GROUP_CONTAINER';
const HIDE_NOTE_GROUP_CREATOR = 'HIDE_CREATE_NOTE_GROUP_CONTAINER';

function showNoteGroupCreator(){
    return {
        type : SHOW_NOTE_GROUP_CREATOR
    }
}

function hideNoteGroupCreator() {
    return {
        type : HIDE_NOTE_GROUP_CREATOR
    }
}

export {showNoteGroupCreator, hideNoteGroupCreator};