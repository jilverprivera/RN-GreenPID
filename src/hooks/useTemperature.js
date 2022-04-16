import {useContext, useEffect, useState} from 'react';
import database from '@react-native-firebase/database';
import {AuthContext} from '../context';

const tempInitialState = {
  fullData: [],
  chartData: [],
};

export const useTemperature = () => {
  const {userState} = useContext(AuthContext);
  const {userId} = userState;
  // const [fullTemperature, setFullTemperature] = useState([]);
  const [temperature, setTemperature] = useState(tempInitialState);

  useEffect(() => {
    if (userId) {
      const tempRef = database().ref(`/${userId}/sensors/temperature`);
      const onTempChange = tempRef.on('value', snapshot => {
        let data = [];
        snapshot.forEach((item, index) => {
          data.push({
            yAxis: item.val().value,
            xAxis: index,
            time: item.val().ts,
          });
        });

        const dataShorted = data.slice(
          data.length > 10 ? data.length - 10 : 0,
          data.length,
        );
        setTemperature({
          ...temperature,
          fullData: data,
          chartData: dataShorted,
        });

        // setFullTemperature(data);
      });
      return () => {
        tempRef.off('value', onTempChange);
      };
    } else {
      setTemperature({
        ...temperature,
        fullData: [],
        chartData: [],
      });
    }
  }, [userId]);

  return temperature;
};
