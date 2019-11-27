import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <div>You clicked {count} times</div>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    );
};

export default Counter;