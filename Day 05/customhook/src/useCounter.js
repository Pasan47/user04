import React , {useState} from 'react'

const useCounter = (initialValue = 0) => {
    const [count, setcount] = useState(initialValue);

    const increment = ()=> setcount(count+1);
    const decrement = ()=> setcount(count -1);

  return {count,increment,decrement};
}

export default useCounter
