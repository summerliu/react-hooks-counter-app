import React, { useState, useEffect } from 'react';

const Counter = () => {
    const initialState = 0;
    const [count, setCount] = useState(initialState);

    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <div>You clicked {count} times</div>
            <button onClick={() => setCount(initialState)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
    );
};

export default Counter;