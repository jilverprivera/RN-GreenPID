import React, {useContext} from 'react';
import {LineChart} from 'react-native-chart-kit';

import {SIZES} from '../../constants';

import {ThemeContext} from '../../context/ThemeContext';

const LinearChart = ({
  data,
  ySuffix,
  xSuffix,
  maxLimit,
  yOffset = 0,
  xOffset = 30,
  labelColor = '#FFF',
  color = '#FFF',
}) => {
  const {tw} = useContext(ThemeContext);
  return (
    <LineChart
      data={{
        labels: data
          .slice(data.length > 10 ? data.length - 10 : 0, data.length)
          .map(item => item.yAxis),
        datasets: [
          {
            data: data
              .slice(data.length > 10 ? data.length - 10 : 0, data.length)
              .map(item => item.yAxis),
          },
        ],
      }}
      width={SIZES.width}
      height={SIZES.width * 0.9}
      yAxisSuffix={ySuffix}
      xAxisLabel={xSuffix}
      fromNumber={maxLimit}
      fromZero
      verticalLabelRotation={-45}
      xLabelsOffset={xOffset}
      yLabelsOffset={yOffset}
      chartConfig={{
        backgroundGradientFromOpacity: 0,
        backgroundGradientToOpacity: 0,
        decimalPlaces: 0,
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
      style={tw`rounded-xl`}
    />
  );
};

export default LinearChart;
