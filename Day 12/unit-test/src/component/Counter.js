import React, { useState } from 'react';

const Counter = ({initialCount}) => {
    const[count,setCount] = useState(initialCount);
    const increment = ()=> {
        setCount((prev)=> prev +1)
    };

    const decrement = ()=> {
        setCount((prev)=> prev -1)
    };
    const restart = ()=> {
        setCount(0)
    };
    const switchValues = ()=> {
        setCount((prev)=> prev * -1)
    };
    const Hello = ()=> {
        setCount("Hello")
    };
    



  return (
    <div>
      <h1> Count:<h3 data-testid="count">{count}</h3>
      </h1>
        <button onClick={increment}> Increment</button>
        <button onClick={decrement}> Decrement</button>
        <button onClick={restart}> Restart</button>
        <button onClick={switchValues}> Switch</button>
        <button onClick={Hello}> Hello</button>
    </div>
  );
}

export default Counter;
