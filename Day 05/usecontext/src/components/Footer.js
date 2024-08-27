import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';



const Footer = () => {
const {phone} = useContext(AppContext);

  return (
    <div>
      <h2>Contact use : {phone}</h2>
    </div>
  );
}

export default Footer;
