import React from 'react';
import {Text, View} from 'react-native';

import {chart} from '../styles/Chart';

const ChartInformation = ({title, ySuffix, lastValue, values}) => {
  return (
    <View style={chart.informationContainer}>
      <View>
        <Text style={chart.informationTitle}>{title}</Text>

        <View style={chart.informationContent}>
          <Text style={chart.informationText}>
            {new Date(
              values[values.length > 10 ? values.length - 10 : 0].time,
            ).toLocaleTimeString()}
          </Text>
          <Text style={chart.informationText}> - </Text>
          <Text style={chart.informationText}>
            {new Date(values[values.length - 1].time).toLocaleTimeString()}
          </Text>
        </View>
      </View>
      {lastValue && (
        <Text style={chart.lastValue}>
          {lastValue.yAxis}
          {ySuffix}
        </Text>
      )}
    </View>
  );
};

export default ChartInformation;
