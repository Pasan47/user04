import React, { createContext } from 'react';

export const AppContext = createContext();

const ContextProvider = (props) => {

    const phone = "244645656";
  ///  const name = "GreatStack";

  return (
    <AppContext.Provider value ={{phone}}>{props.children}</AppContext.Provider>
  );
};

export default ContextProvider;
