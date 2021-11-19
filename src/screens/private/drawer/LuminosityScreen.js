import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Header from '../../../components/ui/header';
import { globals } from '../../../styles/globals';

const LuminosityScreen = ({navigation}) => {
  return (
    <SafeAreaView style={globals.container}>
      <Header {...navigation} title="Luminosidad" />
      {/* <Text>TemperatureScreen</Text> */}
    </SafeAreaView>
  );
};

export default LuminosityScreen;
