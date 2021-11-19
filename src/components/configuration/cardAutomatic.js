import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {configStyles} from '../../styles/configuration.styles';

export const CardAutomatic = () => {
  return (
    <View style={configStyles.card}>
      <Text style={configStyles.cardTitle}>Temperatura</Text>
      <Text style={configStyles.cardTitleInput}>Setpoint</Text>
      <View style={configStyles.cardInput}>
        <Text>34°C</Text>
      </View>
      <Text style={configStyles.cardTitleInput}>Ganancia proporcional</Text>
      <View style={configStyles.cardInput}>
        <Text>1.056</Text>
      </View>
      <Text style={configStyles.cardTitleInput}>Ganancia integral</Text>
      <View style={configStyles.cardInput}>
        <Text>1.563</Text>
      </View>
      <Text style={configStyles.cardTitleInput}>Ganancia derivativa</Text>
      <View style={configStyles.cardInput}>
        <Text>0.000</Text>
      </View>
      <Text style={configStyles.cardTitle}>Humedad relativa</Text>
      <Text style={configStyles.cardTitleInput}>Setpoint</Text>
      <View style={configStyles.cardInput}>
        <Text>56%</Text>
      </View>

      <Text style={configStyles.cardTitle}>Luminosidad</Text>
      <Text style={configStyles.cardTitleInput}>Setpoint de alerta</Text>
      <View style={configStyles.cardInput}>
        <Text>56%</Text>
      </View>
      <Text style={configStyles.cardTitle}>Dioxido de carbono</Text>
      <Text style={configStyles.cardTitleInput}>Setpoint de alerta</Text>
      <View style={configStyles.cardInput}>
        <Text>56%</Text>
      </View>

      <TouchableOpacity style={configStyles.cardButton}>
        <Text style={configStyles.cardButtonText}>Activar</Text>
      </TouchableOpacity>
    </View>
  );
};
