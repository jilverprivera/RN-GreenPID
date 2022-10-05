import React, {createContext, useContext} from 'react';

import {AppContext} from './AppContext';

export const VariablesContext = createContext();

export const VariablesProvider = ({children}) => {
  const {userState} = useContext(AppContext);
  const {status} = userState;

  return (
    <VariablesContext.Provider value={{}}>{children}</VariablesContext.Provider>
  );
};
