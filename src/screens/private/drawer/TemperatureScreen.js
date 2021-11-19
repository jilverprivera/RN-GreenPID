import React from 'react';
import {Text, SafeAreaView} from 'react-native';

import Header from '../../../components/ui/header';

import {globals} from '../../../styles/globals';

const TemperatureScreen = ({navigation}) => {
  return (
    <SafeAreaView style={globals.container}>
      <Header {...navigation} title="Temperatura" />
      {/* <Text>TemperatureScreen</Text> */}
    </SafeAreaView>
  );
};

export default TemperatureScreen;
