import React from 'react';
import {COLORS, SIZES} from '../../constants';
import {StyleSheet, View} from 'react-native';

import {
  VictoryAxis,
  VictoryGroup,
  VictoryChart,
  VictoryLine,
  VictoryScatter,
  VictoryTheme,
  VictoryLegend,
} from 'victory-native';

const Chart = ({
  data,
  setpointData,
  minDomain,
  maxDomain,
  yLabel,
  xAxis,
  yAxis,
  legend,
}) => {
  return (
    <View style={STYLES.chartContainer}>
      <VictoryChart
        width={SIZES.width}
        theme={VictoryTheme.material}
        maxDomain={maxDomain}
        minDomain={minDomain}
        animate={{
          duration: 1000,
          onLoad: {duration: 1000},
        }}>
        {legend && (
          <VictoryLegend
            x={20}
            orientation="horizontal"
            data={[
              {name: yLabel, symbol: {fill: COLORS.black}},
              {name: 'Setpoint', symbol: {fill: COLORS.primary}},
            ]}
          />
        )}
        <VictoryGroup>
          <VictoryLine
            style={{
              data: {stroke: COLORS.primary},
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
            style={{data: {fill: COLORS.primary}}}
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
          label="Número de muestras"
          style={{
            axis: {stroke: COLORS.black},
            axisLabel: {fontSize: SIZES.body2, padding: 30},
            tickLabels: {padding: 0},
          }}
        />
        <VictoryAxis
          dependentAxis
          label={`${yLabel}`}
          style={{
            axis: {stroke: COLORS.black},
            axisLabel: {fontSize: SIZES.body2, padding: 30},
            tickLabels: {padding: 0},
          }}
        />
      </VictoryChart>
    </View>
  );
};

export default Chart;

const STYLES = StyleSheet.create({
  chartContainer: {width: SIZES.width - SIZES.margin, alignSelf: 'center'},
});
