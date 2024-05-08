const initialState = {
    show : false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SHOW_CREATE_NOTE_GROUP_CONTAINER': 
            return {
                ...state,
                show : true
            }
        
        case 'HIDE_CREATE_NOTE_GROUP_CONTAINER': 
        return {
            ...state,
            show : false
        }
        
        default : 
            return state;
    }
}

export default reducer;