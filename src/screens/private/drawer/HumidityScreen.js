import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Header from '../../../components/ui/header';
import { globals } from '../../../styles/globals';

const HumidityScreen = ({navigation}) => {
  return (
    <SafeAreaView style={globals.container}>
      <Header {...navigation} title="Humedad relativa" />
      {/* <Text>TemperatureScreen</Text> */}
    </SafeAreaView>
  );
};

export default HumidityScreen;
