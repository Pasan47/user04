import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';


function App() {

const count = useRef(0);
const [value,setValue] = useState(0);


useEffect(() => {
  count.current += 1;
}
);



  return (

    <>
    <div>

    <button  onClick={() => {
      setValue((prev) =>prev+1
      )
      
    }
    }> Increment
    </button>

    <h1>Value {value}</h1>

  <button onClick={() => {
      setValue((prev) =>prev-1
      )
      
    }
    }> Decrement
    </button>


    <h1>Render Count {count.current}</h1>
    </div>
    </>

  );
}

export default App;
