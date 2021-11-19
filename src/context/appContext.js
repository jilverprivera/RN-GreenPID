import React, {createContext, useState} from 'react';

export const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [manualButton, setManualButton] = useState(false);
  const [automaticButton, setAutomaticButton] = useState(false);

  const appState = {
    configuration: {
      manualButton,
      setManualButton,
      automaticButton,
      setAutomaticButton,
    },
  };

  return <AppContext.Provider value={appState}>{children}</AppContext.Provider>;
};
