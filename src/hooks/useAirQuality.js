import database from '@react-native-firebase/database';
import {useEffect, useState} from 'react';

export const useAirQuality = status => {
  const [data, setData] = useState([]);
  const sensorRef = '/sensors/air_quality';
  useEffect(() => {
    if (status === 'authenticated') {
      const ref = database().ref(sensorRef);
      const onApiChanges = ref.on('value', snapshot => {
        let arr = [];
        snapshot.forEach((item, index) => {
          arr.push({
            yAxis: item.val().value,
            xAxis: index,
            time: new Date(item.val().ts).toLocaleTimeString(),
          });
        });
        setData(arr);
      });

      return () => database().ref(sensorRef).off('value', onApiChanges);
    }
  }, [status]);
  return {airQuality: data};
};
