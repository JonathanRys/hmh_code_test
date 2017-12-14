const initialState = {
    data: {},
    history: []
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_HISTORY':
            return {
                ...state,
                history: state.history.concat(state.data),
                data: action.data
            }
        default:
            return initialState;
    }
}

export default appReducer
