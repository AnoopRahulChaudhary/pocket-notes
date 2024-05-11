const UPDATE_GROUP_SELECTION = 'UPDATE_GROUP_SELECTION';

function updateGroupSelection(groupPayload){
    return {
        type: UPDATE_GROUP_SELECTION,
        payload: groupPayload
    }
}

export {UPDATE_GROUP_SELECTION, updateGroupSelection}