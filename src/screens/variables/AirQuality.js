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

const AirQuality = () => {
  const {tw, colorScheme} = useContext(ThemeContext);
  const {airQuality} = useContext(VariablesContext);

  return (
    <LinearGradient
      colors={colorScheme === 'dark' ? DarkTheme : LightTheme}
      start={{x: 0, y: 0}}
      end={{x: 1.5, y: 1}}
      style={tw`flex-1 w-full relative`}>
      <Header title="Calidad del aire" withBack={true} />
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{...tw`w-full`, height: SIZES.width * 1.05}}>
        <View style={tw`flex flex-col items-center justify-center`}>
          <ChartTitle title="Gráfica calidad del aire" />
          <LinearChart
            data={airQuality}
            ySuffix=" ppm"
            xSuffix=" ppm"
            maxLimit={1300}
            yOffset={10}
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
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default AirQuality;
