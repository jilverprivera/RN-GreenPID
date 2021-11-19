import React, {createContext, useContext, useState} from 'react';
import database from '@react-native-firebase/database';

import {AuthContext} from './authContext';

export const AppContext = createContext();

export const AppProvider = ({children}) => {
  const {
    userState: {userId},
  } = useContext(AuthContext);

  const [manualButton, setManualButton] = useState(false);
  const [automaticButton, setAutomaticButton] = useState(false);

  const handleActiveConfigButton = button => {
    if (button === 'automatic') {
      setManualButton(false);
      setAutomaticButton(!automaticButton);
    } else {
      setManualButton(!manualButton);
      setAutomaticButton(false);
    }
  };

  const saveVariablesDB = async obj => {
    await database()
      .ref(`${userId}/variables`)
      .update({...obj});
  };

  const appState = {
    configuration: {
      manualButton,
      automaticButton,
      handleActiveConfigButton,
      setManualButton,
      setAutomaticButton,
    },
    saveVariablesDB,
  };

  return <AppContext.Provider value={appState}>{children}</AppContext.Provider>;
};
