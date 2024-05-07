const initialState = {
    groups : [
        
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD': 
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

