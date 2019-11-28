const initialState = {count: 0};

function counterReducer(state, action) {
    switch (action.type) {
        case 'reset':
            return {count: 0};
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            throw new Error();
    };
};

export {counterReducer, initialState};