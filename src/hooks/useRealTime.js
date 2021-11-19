import {useContext, useEffect, useState} from 'react';
import database from '@react-native-firebase/database';

import {AuthContext} from '../context/authContext';

const tempInitialState = {
  currentTemperature: null,
  maxTemperature: null,
  minTemperature: null,
  averageTemperature: null,
};

const humidityInitial = {
  currentHumidity: null,
  maxHumidity: null,
  minHumidity: null,
  averageHumidity: null,
};

export const useRealTime = () => {
  const {userState} = useContext(AuthContext);

  const [dataTemperature, setDataTemperature] = useState([]);
  const [temperatureExtras, setTemperatureExtras] = useState(tempInitialState);

  const [dataHumidity, setDataHumidity] = useState([]);
  const [humidityExtras, setHumidityExtras] = useState(humidityInitial);

  useEffect(() => {
    if (userState.userId) {
      const temperatureRef = database().ref(`/${userState.userId}/temperatura`);
      const onChangeTemperature = temperatureRef.on('value', snapshot => {
        snapshot.val() !== null &&
          snapshot.val() <= 100 &&
          snapshot.val() >= -40 &&
          setDataTemperature(prevState => [...prevState, snapshot.val()]);
        setTemperatureExtras({
          ...temperatureExtras,
          currentTemperature: snapshot.val().value,
        });
      });
      return () => {
        temperatureRef.off('value', onChangeTemperature);
      };
    }
  }, [userState.userId]);

  useEffect(() => {
    if (userState.userId) {
      const humidityRef = database().ref(`/${userState.userId}/humedad`);
      const onChangeHumidity = humidityRef.on('value', snapshot => {
        snapshot.val() !== null &&
          snapshot.val() <= 100 &&
          snapshot.val() >= 0 &&
          setDataHumidity(prevState => [...prevState, snapshot.val()]);
          setHumidityExtras({
          ...humidityExtras,
          currentHumidity: snapshot.val().value,
        });
      });
      return () => {
        humidityRef.off('value', onChangeHumidity);
      };
    }
  }, [userState.userId]);

  return {
    temperatureExtras,
    dataTemperature,
  };
};
