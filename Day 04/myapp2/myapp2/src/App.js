import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from "react";


function App() {

  const [count, setCount] = useState(0);
  const [color,setColor]  = useState("red")
  const [age,setAge]  = useState(10)


  //!add dependency

  useEffect(() => {
    setTimeout(()=> {
      setCount((count)=> count+1);
      setColor((color) => "Blue")
      setAge((age) => 17)
      console.log("Hello World");
    },2000);
   },[color,age]);

  

  return (
 <>
 
 <h>I hv rendered {count} times</h>
 <h>I hv rendered {color} times</h>
 <h>I hv rendered {age} times</h>
 </>
   
  );
}

export default App;
