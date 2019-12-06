const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case 'reset':
            return {count: 0};
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            return state;
    };
};

export {counterReducer, initialState};