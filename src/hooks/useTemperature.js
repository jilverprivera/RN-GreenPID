import {useContext, useEffect, useState} from 'react';
import database from '@react-native-firebase/database';
import {AppContext} from '../context/AppContext';

const tempInitialState = {
  temperature: [],
  fullTemperature: [],
  lastTemperature: null,
  max: null,
  min: null,
  average: null,
};

export const useTemperature = () => {
  const {userState} = useContext(AppContext);
  const {userId} = userState;
  const [data, setData] = useState(tempInitialState);
  useEffect(() => {
    if (userId) {
      const ref = database().ref('/sensors/temperature_1');
      const onApiChanges = ref.on('value', snapshot => {
        let arr = [];
        snapshot.forEach((item, index) => {
          arr.push({
            yAxis: item.val().value,
            xAxis: index,
            time: new Date(item.val().value).toLocaleTimeString(),
          });
        });

        const shortedData = arr.slice(
          arr.length > 10 ? arr.length - 10 : 0,
          arr.length,
        );

        const arrData = arr.slice(
          arr.length > 50 ? arr.length - 50 : 0,
          arr.length,
        );

        const lastData = arr[arr.length - 1];

        let maxValue = Math.max.apply(
          Math,
          arrData.map(item => {
            return item.yAxis;
          }),
        );

        let minValue = Math.min.apply(
          Math,
          arrData.map(item => {
            return item.yAxis;
          }),
        );

        let sum = arrData.reduce((acc, el) => {
          return acc + el.yAxis;
        }, 0);

        let average = sum / arrData.length;

        setData({
          fullTemperature: arr,
          temperature: shortedData,
          lastTemperature: lastData,
          max: maxValue.toFixed(2),
          min: minValue.toFixed(2),
          average: average.toFixed(2),
        });
      });
      return () => {
        ref.off('value', onApiChanges);
      };
    } else {
      setData(tempInitialState);
    }
  }, [userId]);

  return data;
};
