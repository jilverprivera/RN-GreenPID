import React, {useContext} from 'react';
import {ScrollView, Text, View} from 'react-native';

import {ThemeContext} from '../../context/ThemeContext';
import LinearGradient from 'react-native-linear-gradient';

import Header from '../../components/layout/header';
import LinearChart from '../../components/core/linearChart';

import {DarkTheme, LightTheme} from '../../config/LinearGradientColors';
import {VariablesContext} from '../../context/VariablesContext';

const Temperature = () => {
  const {tw, colorScheme} = useContext(ThemeContext);
  const {firstTemperature, secondTemperature} = useContext(VariablesContext);

  return (
    <LinearGradient
      colors={colorScheme === 'dark' ? DarkTheme : LightTheme}
      start={{x: 0, y: 0}}
      end={{x: 1.5, y: 1}}
      style={tw`flex-1 w-full relative`}>
      <Header title="Temperatura" withBack={true} />
      {/* <View style={tw`w-11/12 flex-1 self-center`}> */}
      <LinearGradient
        colors={
          colorScheme === 'dark'
            ? ['#18181b', '#111827', '#5b21b6']
            : ['#fecaca', '#fcd34d']
        }
        start={{x: 0, y: 0}}
        end={{x: 1.5, y: 1}}
        style={tw`w-full mx-auto relative overflow-hidden flex flex-col items-center justify-center pt-5`}>
        <Text>Temperatura 1</Text>
        <LinearChart
          data={firstTemperature}
          ySuffix=" °C"
          xSuffix=" °C"
          maxLimit={80}
          yOffset={20}
          xOffset={30}
        />
      </LinearGradient>
    </LinearGradient>
  );
};

export default Temperature;
