const appReducer = (state = {}, action) => {
    switch(action.type) {
        case 'UPDATE_HISTORY':
        return Object.assign({}, state, {
            history: state.history.concat(state.data),
            data: action.data,
          })
        default:
            return state;
    }
}

export default appReducer
