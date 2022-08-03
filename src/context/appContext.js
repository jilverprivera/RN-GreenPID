import React, {createContext, useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';

import {saveData, updateVariables} from '../helpers';

const authInitialState = {
  status: 'checking',
  userId: null,
  userName: null,
  name: null,
  userEmail: null,
};

export const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [userState, setUserState] = useState(authInitialState);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  // ---- HOOKS ---- //

  useEffect(() => {
    auth().onAuthStateChanged(async user => {
      if (user?.uid) {
        getData(user.uid);
        setUserState({
          ...userState,
          status: 'authenticated',
          userId: user.uid,
          userName: user.displayName,
        });
      } else {
        setUserState({
          ...userState,
          status: 'not-authenticated',
        });
      }
    });
  }, []);

  // ---- AUTHENTICATION ---- //

  const StartLoginWithEmailAndPassword = async (email, password) => {
    try {
      setIsLoading(true);
      await auth()
        .signInWithEmailAndPassword(email, password)
        .then(({user}) => {
          setUserState({
            ...userState,
            status: 'authenticated',
            userEmail: email,
            userId: user.uid,
            userName: user.displayName,
          });
        });
    } catch (err) {
      console.warn('Error', err);
      Alert.alert(
        'Error.',
        'Usuario o contraseña son incorrectos, por favor vuelve a intentar',
      );
    }
    setIsLoading(false);
  };

  const StartRegisterWithEmailPasswordAndName = async (
    email,
    password,
    name,
  ) => {
    try {
      setIsLoading(true);
      await auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async ({user}) => {
          await user.updateProfile({displayName: name});
          setUserState({
            ...userState,
            status: 'authenticated',
            userId: user.uid,
            userName: name,
          });
          await saveData(user.uid, email, name);

          // await saveInitialVariables(user.uid);
        });
    } catch (err) {
      console.warn('Error', err);
      Alert.alert(
        'Error.',
        'Hubo un error guardando tu información en la base de datos, por favor intenta de nuevo.',
      );
    }
    setIsLoading(false);
  };

  const getData = id => {
    try {
      if (id) {
        firestore()
          .collection(`Users/${id}/data`)
          .onSnapshot(query =>
            query.forEach(doc =>
              setUserState({
                ...userState,
                status: 'authenticated',
                userId: doc.data().uid,
                userName: doc.data().userName,
                userEmail: doc.data().email,
              }),
            ),
          );
      }
    } catch (err) {
      console.warn('Error', err);
      Alert.alert(
        'Ops...',
        'Hubo un error obteniendo tu información de la base de datos.',
      );
    }
  };

  const SignOut = async () => {
    await auth().signOut();
    setUserState({
      ...userState,
      status: 'not-authenticated',
      userId: null,
      userName: null,
      name: null,
      userEmail: null,
    });
  };

  // ---- USER ---- //
  const setPredefinedVariables = async obj => {
    await updateVariables(obj);
  };

  const setManualVariables = async obj => {
    await updateVariables(obj);
  };

  // ---- NOTIFICATIONS ---- //

  // <--- STATE ---> //
  const authState = {
    userState,
    isLoading,
    StartLoginWithEmailAndPassword,
    StartRegisterWithEmailPasswordAndName,
    SignOut,
    messages,
    setMessages,
    setPredefinedVariables,
    setManualVariables,
  };

  return (
    <AppContext.Provider value={authState}>{children}</AppContext.Provider>
  );
};
