import React, {createContext, useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';

const authInitialState = {
  status: 'checking',
  userId: null,
  userName: null,
  name: null,
  userEmail: null,
};

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [userState, setUserState] = useState(authInitialState);
  const [isLoading, setIsLoading] = useState(false);

  // <--- HOOKS ---> //
  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user?.uid) {
        const firstName = user.displayName.split('');
        setUserState({
          ...userState,
          status: 'authenticated',
          userId: user.uid,
          userName: user.displayName,
          name: firstName,
        });
      } else {
        setUserState({
          ...userState,
          status: 'not-authenticated',
        });
      }
    });
  }, []);

  // <--- FUNCTIONS ---> //
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
          await saveData(email, user.uid, name);
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

  const saveData = async (email, id, name) => {
    try {
      await firestore()
        .collection(`Users/${id}/data`)
        .add({uid: id, userName: name, email: email});
      setUserState({
        ...userState,
        userEmail: email,
      });
    } catch (err) {
      console.warn('Error', err);
      Alert.alert(
        'Ops...',
        'Hubo un error guardando tu información en la base de datos.',
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

  // <--- STATE ---> //
  const authState = {
    userState,
    isLoading,
    StartLoginWithEmailAndPassword,
    StartRegisterWithEmailPasswordAndName,
    SignOut,
  };

  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  );
};
