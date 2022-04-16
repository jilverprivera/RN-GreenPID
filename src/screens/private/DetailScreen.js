import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useGetData} from '../../hooks';
import {COLORS, SIZES} from '../../constants';
import {Chart} from '../../components/core';

const DetailScreen = ({route}) => {
  const {id} = route.params;
  const {temperature} = useGetData();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (id === 'temperature') {
      const newData = temperature;
      setData(newData);
    }
  }, [id, temperature]);

  return (
    <View
      style={{
        height: SIZES.height,
        width: SIZES.width,
        backgroundColor: COLORS.background,
      }}>
      {data.length > 0 ? (
        <Chart
          data={data}
          minDomain={{
            x: data.length < 10 ? 0 : data.length - 10,
            y: 0,
          }}
          maxDomain={{
            x: data.length > 10 ? data.length : 10,
            y: 70,
          }}
          yLabel="Temperatura [°C]"
          xAxis="xAxis"
          yAxis="yAxis"
        />
      ) : (
        <ActivityIndicator size="large" color={COLORS.primary} />
      )}
    </View>
  );
};

export default DetailScreen;
