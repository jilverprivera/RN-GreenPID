import {useContext, useEffect, useState} from 'react';
import database from '@react-native-firebase/database';

import {AppContext} from '../context/AppContext';

const initialState = {
  values: [],
  lastValue: null,
  maxValue: null,
  minValue: null,
  average: null,
};

export const useGetData = path => {
  const {userState} = useContext(AppContext);
  const {status} = userState;

  const [data, setData] = useState(initialState);

  useEffect(() => {
    if (status === 'authenticated' && path) {
      const ref = database().ref(path);
      const onApiChanges = ref.on('value', snapshot => {
        let arr = [];
        snapshot.forEach((item, index) => {
          arr.push({
            yAxis: item.val().value,
            xAxis: index,
            time: item.val().ts,
          });
        });
        const lastValue = arr[arr.length - 1];

        const arrData = arr.slice(
          arr.length > 50 ? arr.length - 50 : 0,
          arr.length,
        );

        let maxValue = Math.max.apply(
          Math,
          arrData.map(item => item.yAxis),
        );

        let minValue = Math.min.apply(
          Math,
          arrData.map(item => item.yAxis),
        );

        let sum = arrData.reduce((acc, el) => acc + el.yAxis, 0);
        const average = sum / arrData.length;

        setData({
          values: arr,
          lastValue,
          maxValue,
          minValue,
          average,
        });
      });

      return () => database().ref(path).off('value', onApiChanges);
    }
  }, [status, path]);

  return data;
};
