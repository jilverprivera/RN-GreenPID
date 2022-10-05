import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {generatePDF} from '../helpers/generatePDF';

import {THEME} from '../styles/Theme';
import {chart} from '../styles/Chart';
import {core} from '../styles/Core';

const ChartExtra = ({values, average, maxValue, minValue, suffix, name}) => {
  return (
    <>
      <View style={chart.extraHeader}>
        <Text style={chart.extraTitle}>Parametros extra</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          style={chart.extraIconContainer}
          onPress={() => generatePDF(values, name, suffix)}>
          <Icon name="download" size={32} color={THEME.COLORS.secondary} />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={chart.extraInformation}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={core.card}>
          <View>
            <Text style={chart.informationText}>Número de muestras</Text>
          </View>
          <Text style={chart.valueText}>{values.length}</Text>
        </View>
        <View style={core.card}>
          <View>
            <Text style={chart.informationText}>Valor máximo (Ultimos 50)</Text>
          </View>
          <Text style={chart.valueText}>
            {maxValue} {suffix}
          </Text>
        </View>
        <View style={core.card}>
          <View>
            <Text style={chart.informationText}>
              Valor promedio (Ultimos 50)
            </Text>
          </View>
          <Text style={chart.valueText}>
            {average.toFixed(2)} {suffix}
          </Text>
        </View>
        <View style={core.card}>
          <View>
            <Text style={chart.informationText}>Valor mínimo (Ultimos 50)</Text>
          </View>
          <Text style={chart.valueText}>
            {minValue} {suffix}
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default ChartExtra;
