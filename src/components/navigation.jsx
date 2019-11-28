import React, { useReducer } from 'react';
import { counterReducer, initialState } from '../reducers/counterReducer';

const Navigation = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState);

    return (
    <div>Navigation: show clicked {state.count} times</div>
    );
};

export default Navigation;