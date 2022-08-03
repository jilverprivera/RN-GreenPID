import React, {useContext} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {ThemeContext} from '../../context/ThemeContext';

import Header from '../../components/layout/header';
import ChartTitle from '../../components/core/chartTitle';
import LinearChart from '../../components/core/linearChart';

import {DarkTheme, LightTheme} from '../../config/LinearGradientColors';
import {VariablesContext} from '../../context/VariablesContext';
import {SIZES} from '../../constants';

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
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{...tw`w-full`, height: SIZES.width * 1.05}}>
        <View style={tw`flex flex-col items-center justify-center`}>
          <ChartTitle title="Gráfica temperatura 1" />
          <LinearChart
            data={firstTemperature}
            ySuffix=" °C"
            xSuffix=" °C"
            maxLimit={80}
            yOffset={20}
            xOffset={20}
          />
        </View>
        <View style={tw`flex flex-col items-center justify-center`}>
          <ChartTitle title="Gráfica temperatura 2" />
          <LinearChart
            data={secondTemperature}
            ySuffix=" °C"
            xSuffix=" °C"
            maxLimit={80}
            yOffset={20}
            xOffset={20}
          />
        </View>
      </ScrollView>
      <ScrollView style={{...tw`w-11/12 mx-auto pt-10`, height: SIZES.width}}>
        <View>
          <Text
            style={tw`text-lg text-zinc-900 dark:text-zinc-100 font-semibold tracking-wide mb-3`}>
            Generar PDF
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            style={tw`w-full border-2 py-6 px-3 mb-3 rounded-xl`}>
            <Text
              style={tw`text-base text-zinc-900 dark:text-zinc-100 font-medium tracking-wide`}>
              Gráfica 1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={tw`w-full border-2 py-6 px-3 rounded-xl`}>
            <Text
              style={tw`text-base text-zinc-900 dark:text-zinc-100 font-medium tracking-wide`}>
              Gráfica 2
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* <LinearGradient
        colors={
          colorScheme === 'dark'
            ? ['#18181b', '#111827', '#5b21b6']
            : ['#fecaca', '#fcd34d']
        }
        start={{x: 0, y: 0}}
        end={{x: 1.5, y: 1}}
        style={tw`w-full mx-auto relative overflow-hidden flex flex-col items-center justify-center pt-5`}> */}
    </LinearGradient>
    // </LinearGradient>
  );
};

export default Temperature;
