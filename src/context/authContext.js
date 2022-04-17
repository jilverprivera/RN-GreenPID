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
    auth().onAuthStateChanged(async user => {
      if (user?.uid) {
        await getData(user.uid);
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
      const firstName = await name.split(' ');
      await auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async ({user}) => {
          await user.updateProfile({displayName: name});
          setUserState({
            ...userState,
            status: 'authenticated',
            userId: user.uid,
            userName: name,
            name: firstName[0],
          });
          await saveData(email, user.uid, name, firstName);
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

  const saveData = async (email, id, name, firstName) => {
    try {
      await firestore()
        .collection(`Users/${id}/data`)
        .add({uid: id, userName: name, email: email, name: firstName});
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

  const getData = async id => {
    try {
      if (id) {
        await firestore()
          .collection(`Users/${id}/data`)
          .onSnapshot(query =>
            query.forEach(doc =>
              setUserState({
                ...userState,
                status: 'authenticated',
                userId: doc.data().uid,
                userName: doc.data().userName,
                name: doc.data().name[0],
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
