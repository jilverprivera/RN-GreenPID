import database from '@react-native-firebase/database';
import {useContext, useEffect, useState} from 'react';
import {AppContext} from '../context/AppContext';

const initialValues = {
  temperature_sp: 33,
  kp: 740,
  ki: 17.2,
  kd: 5.6,
  relative_humidity_sp: 70,
  ground_humidity_sp: 35,
  air_quality_sp: 700,
  irrigation_sp: 25,
};

export const useVariablesProcess = () => {
  const [variables, setVariables] = useState(initialValues);
  const {userState} = useContext(AppContext);
  const {status} = userState;

  useEffect(() => {
    const variablesRef = '/variables';
    if (status === 'authenticated') {
      const ref = database().ref(variablesRef);
      const onApiChanges = ref.on('value', snapshot => {
        setVariables(snapshot.toJSON());
      });
      return () => database().ref(variablesRef).off('value', onApiChanges);
    }
  }, [status]);
  return {variables};
};
