import React from 'react';
import useCounter from './useCounter';
import useName from './useName';
const App = () => {
    // Initialize the hook with an optional initial value, e.g., 0
    const { count, increment, decrement } = useCounter(0);
    const {name,display} = useName("Hi");

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>

            <h1>Name: {name}</h1>
            <button onClick={display}>Welcome</button>
        </div>
    );
};

export default App;
