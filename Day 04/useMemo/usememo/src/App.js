import logo from './logo.svg';
import './App.css';
import {useEffect, useState,useRef,useMemo} from "react"

function App() {

  const [number, setnumber] = useState(0);
  const [value, setValue] = useState(0)
  const count = useRef(0);
  const result = useMemo(() => { return cubeNum(number)}, [number]);



  useEffect(() => {
    count.current +=1;
   
  }
  )

 function cubeNum(num) {
  console.log("Cube");
  return Math.pow(num,3);
  
 }

//  const result = cubeNum(number);


  return (
    <>
    
    <input
      type='number'
      value={number}
      onChange={(e) => {
        setnumber(e.target.value)
        
      }
      }> 
    </input>
    
    <h1> Cube of the Number : {result}</h1>

    <h2> Render Count : {count.current}</h2>

    <button onClick={() => {
      setValue((value) =>value+1)
      
    }
    }>Increase</button>
    <h3>Value : {value}</h3>
    
    
    </>
  );
}

export default App;
