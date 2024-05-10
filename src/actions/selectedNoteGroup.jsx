const UPDATE_GROUP_SELECTION = 'UPDATE_GROUP_SELECTION';

function updateGroupSelection(nextGroupName){
    return {
        type: UPDATE_GROUP_SELECTION,
        payload: nextGroupName
    }
}

export {UPDATE_GROUP_SELECTION, updateGroupSelection}