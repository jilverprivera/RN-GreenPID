import database from '@react-native-firebase/database';
import {useEffect, useState} from 'react';

export const useWaterLevel = status => {
  const [data, setData] = useState([]);
  const sensorRef = '/sensors/water_level';
  useEffect(() => {
    if (status === 'authenticated') {
      const ref = database().ref(sensorRef);
      const onApiChanges = ref.on('value', snapshot => {
        let arr = [];
        snapshot.forEach((item, index) => {
          arr.push({
            yAxis: item.val().value.toFixed(2),
            xAxis: index,
            time: new Date(item.val().ts).toLocaleTimeString(),
          });
        });
        setData(arr);
      });

      return () => database().ref(sensorRef).off('value', onApiChanges);
    }
  }, [status]);
  return {waterLevel: data};
};
