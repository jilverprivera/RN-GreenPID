import React, {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import database from '@react-native-firebase/database';
import {Alert} from 'react-native';

import {AuthContext} from './authContext';

export const AppContext = createContext();

export const AppProvider = ({children}) => {
  // ---- CONTEXT ---- //
  const {userState} = useContext(AuthContext);
  const {userId} = userState;

  // ---- STATE ---- //
  const [messages, setMessages] = useState([]);
  const [selectedView, setSelectedView] = useState('temperature');

  // ---- FUNCTIONS ---- //
  const getMessagesFromStorage = async () => {
    try {
      const unParsedMessages = await AsyncStorage.getItem('@messages');
      const parsedMessages = JSON.parse(unParsedMessages);
      if (parsedMessages !== null) {
        setMessages(parsedMessages);
      } else {
        setMessages([]);
      }
    } catch (err) {
      console.warn('Error', err);
      Alert.alert('Ops...', 'Hubo un error opteniendo las notificaciones');
    }
  };

  const addMessageToStorage = async message => {
    try {
      setMessages(prevState => [...prevState, message]);
      const jsonMessages = JSON.stringify(messages);
      await AsyncStorage.setItem('@messages', jsonMessages);
    } catch (err) {
      console.warn('Error', err);
      Alert.alert('Ops...', 'Hubo un error al guardar el mensaje');
    }
  };

  const clearStorage = async () => {
    try {
      setMessages([]);
      await AsyncStorage.clear();
    } catch (err) {
      console.log(err);
    }
  };

  const saveVariablesDB = async obj => {
    await database()
      .ref(`${userId}/variables`)
      .update({...obj});
    await addMessageToStorage({
      message: 'Actualización exitosa en DB',
      icon: 'check',
      date: new Date(),
      type: 'success',
    });
  };

  useEffect(() => {
    getMessagesFromStorage();
  }, []);

  const appState = {
    dashboard: {
      selectedView,
      setSelectedView,
    },
    // notifications: {messages, setMessages},
    messages,
    setMessages,
    saveVariablesDB,
    addMessageToStorage,
    getMessagesFromStorage,
    clearStorage,
  };

  return <AppContext.Provider value={appState}>{children}</AppContext.Provider>;
};
