import logo from './logo.svg';
import './App.css';
import {useEffect,useLayoutEffect} from 'react';

function App() {

  useEffect(() => {
   console.log("Message from effect");
  }, []);

  useLayoutEffect(() => {
    console.log("Message from layout[");
   }, []); //this fill call befor useEffect, here this will take more time to render,So before that we can use this,but this is not recommended

  return (
    < >
      
    <h2> Text message</h2>
    {Array(4000)
    .fill("")
    .map((item,index)=>(
      <li key={index}>{Math.pow(Math.random(),10)}</li>
    ))}
    </>
  );
}

export default App;
