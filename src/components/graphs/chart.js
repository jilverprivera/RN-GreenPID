import React, {useContext} from 'react';
import {COLORS, SIZES} from '../../constants';
import {View} from 'react-native';

import {
  VictoryAxis,
  VictoryGroup,
  VictoryChart,
  VictoryLine,
  VictoryScatter,
  VictoryTheme,
  VictoryLegend,
} from 'victory-native';
import {ThemeContext} from '../../context/ThemeContext';

const Chart = ({data, minDomain, maxDomain, yLabel, xAxis, yAxis, legend}) => {
  const {tw, colorScheme} = useContext(ThemeContext);
  return (
    <View style={tw`w-full`}>
      <VictoryChart
        width={SIZES.width}
        theme={VictoryTheme.material}
        maxDomain={maxDomain}
        minDomain={minDomain}
        animate={{
          duration: 1000,
          onLoad: {duration: 1000},
        }}>
        <VictoryGroup>
          <VictoryLine
            style={{
              data: {stroke: colorScheme === 'dark' ? '#6D28D9' : '#22c55e'},
            }}
            data={data}
            interpolation="natural"
            x={xAxis}
            y={yAxis}
            animate={{
              duration: 500,
            }}
          />

          <VictoryScatter
            style={{
              data: {
                fill: colorScheme === 'dark' ? '#6D28D9' : '#22c55e',
              },
            }}
            data={data}
            labels={({datum}) => datum.yAxis}
            size={5}
            x={xAxis}
            y={yAxis}
            animate={{
              duration: 500,
            }}
          />
        </VictoryGroup>
        <VictoryAxis
          // label="Número de muestras"
          style={{
            axis: {stroke: colorScheme === 'dark' ? '#FFF' : '#000'},
            grid: {stroke: 'transparent'},
            axisLabel: {fontSize: SIZES.body3, padding: 25},
            tickLabels: {padding: 0},
          }}
        />
        <VictoryAxis
          dependentAxis
          label={`${yLabel}`}
          style={{
            axis: {
              stroke: colorScheme === 'dark' ? '#FFF' : '#000',
            },
            grid: {stroke: 'transparent'},
            axisLabel: {
              fontSize: SIZES.body3,
              padding: 25,
            },
            tickLabels: {padding: 0},
          }}
        />
      </VictoryChart>
    </View>
  );
};

export default Chart;
