import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import {useState} from "react";

function App() {

const [count, setCount] = useState(0);
//function newFn(){}
const bewFn = useCallback(
  () => {  }, []);

  return (
    <>
<Header newFn={newFn}></Header>
<h1>{count}</h1>

<button onClick={() => {
  setCount((prev) => prev +1)
  
}
}> Button</button>

</> );
}

export default App;
