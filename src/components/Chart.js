import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

import {useGetData} from '../hooks/useGetData';

import ChartInformation from './ChartInformation';
import ChartExtra from './ChartExtra';

import {THEME} from '../styles/Theme';
import {chart} from '../styles/Chart';

const Chart = ({
  title,
  ySuffix,
  maxLimit,
  yOffset = 0,
  xOffset = 30,
  path,
  name,
}) => {
  const {average, lastValue, maxValue, minValue, values} = useGetData(path);
  const showValues = values.slice(
    values.length > 10 ? values.length - 10 : 0,
    values.length,
  );

  return (
    <>
      {values.length > 0 ? (
        <View style={chart.chartContainer}>
          <ChartInformation
            lastValue={lastValue}
            title={title}
            values={values}
            ySuffix={ySuffix}
          />
          <LineChart
            data={{
              labels: showValues.map(item => item.yAxis),
              datasets: [
                {
                  data: showValues.map(item => item.yAxis),
                },
              ],
            }}
            width={THEME.SIZES.width - 32}
            height={THEME.SIZES.width - 16}
            yAxisSuffix={ySuffix}
            xAxisLabel={ySuffix}
            fromNumber={maxLimit}
            fromZero
            verticalLabelRotation={-45}
            xLabelsOffset={xOffset}
            yLabelsOffset={yOffset}
            chartConfig={{
              backgroundGradientFromOpacity: 0,
              backgroundGradientToOpacity: 0,
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(18, 166,211, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              propsForDots: {
                r: '5',
                strokeWidth: '2.5',
                stroke: THEME.COLORS.secondary,
              },
              propsForBackgroundLines: {
                stroke: 0,
              },
            }}
            bezier
          />
          <ChartExtra
            values={values}
            average={average}
            maxValue={maxValue}
            minValue={minValue}
            suffix={ySuffix}
            name={name}
          />
        </View>
      ) : (
        <View style={chart.chartActivityIndicator}>
          <ActivityIndicator size="large" color="#FAFAFA" />
        </View>
      )}
    </>
  );
};

export default Chart;
