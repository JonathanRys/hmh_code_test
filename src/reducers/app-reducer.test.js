import appReducer from './app-reducer'

const initialState = {
    data: {},
    history: []
}

const returnedState = {
    data: {
        firstName: "",
        lastName: "",
        startDate: ""
    },
    history: [{}]
}

const updatedState = {
    data: {
        firstName: "Lester",
        lastName: "Tester",
        startDate: "Today"
    },
    history: [{}]
}

const mockData = () => {
    return {
        firstName: "Lester",
        lastName: "Tester",
        startDate: "Today"
    }
}

const mockAction = (action = undefined, data) => {
    return {
        type: action,
        data: data
    }
}

describe('Test app-reducer', () => {
    it("should handle undefined action types", () => {
        expect(appReducer(initialState, mockAction(undefined))).toEqual(initialState)
    });

    it("should handle the UPDATE_HISTORY action type", () => {
        expect(appReducer(initialState, mockAction('UPDATE_HISTORY', mockData()))).toEqual(updatedState)
    });
})