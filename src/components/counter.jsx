import React, { useEffect } from 'react';
import { useStore } from '../store/store';

const Counter = () => {
    /* useStatet = this.state */
    // const initialState = 0;
    // const [count, setCount] = useState(initialState);
    const { state, dispatch } = useStore();

    // const [state, dispatch] = useReducer(counterReducer, initialState);
    useEffect(() => {
        document.title = `You clicked ${state.count} times`;
    });
    console.log(state)
    return (
        <div>
            <div>You clicked {state.count} times</div>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
            <button onClick={() => dispatch({type: 'increment'})}>Increase</button>
            <button onClick={() => dispatch({type: 'decrement'})}>Decrease</button>
            <button onClick={() => dispatch({type: 'add'})}>Add</button>
        </div>
    );
};

export default Counter;