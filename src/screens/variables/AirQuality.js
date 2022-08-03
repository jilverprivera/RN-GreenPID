import React, {useContext} from 'react';
import {ScrollView} from 'react-native';

import {ThemeContext} from '../../context/ThemeContext';
import LinearGradient from 'react-native-linear-gradient';
import {SIZES} from '../../constants';

import {LineChart} from 'react-native-chart-kit';
import Header from '../../components/layout/header';
import {DarkTheme, LightTheme} from '../../config/LinearGradientColors';
import {VariablesContext} from '../../context/VariablesContext';

const AirQuality = () => {
  const {tw, colorScheme} = useContext(ThemeContext);
  const {airQuality} = useContext(VariablesContext);

  return (
    <LinearGradient
      colors={colorScheme === 'dark' ? DarkTheme : LightTheme}
      start={{x: 0, y: 0}}
      end={{x: 1.5, y: 1}}
      style={tw`flex-1 w-full relative`}>
      <Header title="Humedad relativa" withBack={true} />
      <ScrollView style={tw`w-11/12 mx-auto`}>
        <LineChart
          data={{
            labels: airQuality
              .slice(
                airQuality.length > 10 ? airQuality.length - 10 : 0,
                airQuality.length,
              )
              .map(item => item.yAxis),
            datasets: [
              {
                data: airQuality
                  .slice(
                    airQuality.length > 10 ? airQuality.length - 10 : 0,
                    airQuality.length,
                  )
                  .map(item => item.yAxis),
              },
            ],
          }}
          width={SIZES.width * 0.9}
          height={SIZES.width * 0.89}
          yAxisSuffix=" ppm"
          xAxisLabel=" ppm"
          fromNumber={1300}
          fromZero
          verticalLabelRotation={-90}
          xLabelsOffset={30}
          yLabelsOffset={-1}
          chartConfig={{
            backgroundGradientFrom: '#7e22ce',
            backgroundGradientTo: '#ea580c',
            paddingTop: 30,
            decimalPlaces: 1,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            propsForDots: {
              r: '5',
              strokeWidth: '2.5',
              stroke: '#ffa726',
            },
            propsForBackgroundLines: {
              stroke: 0,
            },
          }}
          bezier
          style={tw`rounded-xl mt-5`}
        />
      </ScrollView>
    </LinearGradient>
  );
};

export default AirQuality;
