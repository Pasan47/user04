import logo from './logo.svg';
import './App.css';
import Practice from './slt/Practice';
import { useState } from 'react';


function App() {

const[color,setColor] = useState("Red")
const[student,setStudent] = useState({
  name:"John",
  age :15,
  grade : 10
})

// let color = "red";
// const changeColor = () =>{
//   color = "blue";
// }
const changeColor = () =>{
  setColor("blue");
}
const changeName = () =>{
  setStudent((prev) =>{
    return {...prev, name: prev.name === "John"?"Pasan":"John"}
  });
}

const modifyStudent = () => {

}


  return (
   <>
   <p>I like color {color}</p>
   <button onClick={changeColor}> change Color</button>

   <p>{student.name} is {student.age} year old.</p>
   <button onClick={changeName}> change Name</button>
    
  
   </>
  );
}

export default App;
