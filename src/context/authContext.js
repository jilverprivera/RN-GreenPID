import React, {createContext, useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const AuthContext = createContext();

const authInitialState = {
  status: 'checking',
  userId: null,
  userName: null,
};

export const AuthProvider = ({children}) => {
  const [userState, setUserState] = useState(authInitialState);
  console.log(userState);

  // <--------------------------------- HOOKS ---------------------------------->
  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user?.uid) {
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

  // <--------------------------------- FUNCTIONS ---------------------------------->
  const StartLoginWithEmailAndPassword = async (email, password) => {
    await auth()
      .signInWithEmailAndPassword(email, password)
      .then(({user}) => {
        setUserState({
          ...userState,
          status: 'authenticated',
          userId: user.uid,
          userName: user.displayName,
        });
      });
  };

  const saveData = async (email, id, name) => {
    await firestore()
      .collection(`Users/${id}/data`)
      .add({uid: id, userName: name, email: email});
  };

  const StartRegisterWithEmailPasswordAndName = async (
    email,
    password,
    name,
  ) => {
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({user}) => {
        console.log(user);
        await user.updateProfile({displayName: name});
        setUserState({
          ...userState,
          status: 'authenticated',
          userId: user.uid,
          userName: name,
        });
        await saveData(email, user.uid, name);
      });
  };

  const SignOut = async () => {
    await auth().signOut();
    setUserState({
      ...userState,
      status: 'not-authenticated',
      userId: null,
      userName: null,
    });
  };

  // <--------------------------------- STATE ---------------------------------->
  const authState = {
    userState,
    StartLoginWithEmailAndPassword,
    StartRegisterWithEmailPasswordAndName,
    SignOut,
  };

  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  );
};
