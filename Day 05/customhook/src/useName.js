import React, {useState}from 'react';

const useName = (initialValue = "") => {
   const [name, setName] = useState(initialValue);

   const display = ()=> setName("Sanuri")
  return {name,display};
}

export default useName;
