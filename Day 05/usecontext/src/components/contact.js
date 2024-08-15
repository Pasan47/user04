import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 

const Contact = () => {
  const {phone} = useContext(AppContext);

  return (
    <div>
      <h2> Phone Number: {phone} </h2>
    </div>
  );
};

export default Contact;
