import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Header from '../../../components/ui/header';
import {globals} from '../../../styles/globals';

const CarbonoScreen = ({navigation}) => {
  return (
    <SafeAreaView style={globals.container}>
      <Header {...navigation} title="Dióxido de carbono" />
      {/* <Text>TemperatureScreen</Text> */}
    </SafeAreaView>
  );
};

export default CarbonoScreen;
