import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {configStyles} from '../../styles/configuration.styles';

export const CardManual = () => {
  return (
    <View style={configStyles.card}>
      <Text style={configStyles.cardTitle}>Temperatura</Text>
      <Text style={configStyles.cardTitleInput}>Setpoint</Text>
      <TextInput style={configStyles.cardInput} />
      <Text style={configStyles.cardTitleInput}>Ganancia proporcional</Text>
      <TextInput style={configStyles.cardInput} />
      <Text style={configStyles.cardTitleInput}>Ganancia integral</Text>
      <TextInput style={configStyles.cardInput} />
      <Text style={configStyles.cardTitleInput}>Ganancia derivativa</Text>
      <TextInput style={configStyles.cardInput} />
      <TouchableOpacity style={configStyles.cardButton}>
        <Text style={configStyles.cardButtonText}>Guardar cambios</Text>
      </TouchableOpacity>

      <Text style={configStyles.cardTitle}>Humedad relativa</Text>
      <Text style={configStyles.cardTitleInput}>Setpoint</Text>
      <TextInput style={configStyles.cardInput} />
      <TouchableOpacity style={configStyles.cardButton}>
        <Text style={configStyles.cardButtonText}>Guardar cambios</Text>
      </TouchableOpacity>

      <Text style={configStyles.cardTitle}>Luminosidad</Text>
      <Text style={configStyles.cardTitleInput}>Setpoint de alerta</Text>
      <TextInput style={configStyles.cardInput} />
      <TouchableOpacity style={configStyles.cardButton}>
        <Text style={configStyles.cardButtonText}>Guardar cambios</Text>
      </TouchableOpacity>

      <Text style={configStyles.cardTitle}>Dioxido de Carbono</Text>
      <Text style={configStyles.cardTitleInput}>Setpoint de alerta</Text>
      <TextInput style={configStyles.cardInput} />
      <TouchableOpacity style={configStyles.cardButton}>
        <Text style={configStyles.cardButtonText}>Guardar cambios</Text>
      </TouchableOpacity>
    </View>
  );
};
