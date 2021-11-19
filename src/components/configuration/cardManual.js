import React, {useContext} from 'react';

import {Text, TouchableOpacity, View} from 'react-native';

import {AppContext} from '../../context/appContext';
import {useForm} from '../../hooks/useForm';
import {configStyles} from '../../styles/configuration.styles';
import {Input} from '../auth/input';

export const CardManual = (handleActiveConfigButton) => {
  const {saveVariablesDB} = useContext(AppContext);

  const {form, onChange} = useForm({
    temperatureSetpoint: '',
    proportionalGain: '',
    integralGain: '',
    derivativeGain: '',
    humiditySetpoint: '',
    luminositySetpoint: '',
    carbonoSetpoint: '',
  });

  const handleUpdateVariables = async () => {
    await saveVariablesDB(form);
    handleActiveConfigButton()
  };
  
  return (
    <View style={configStyles.card}>
      <Text style={configStyles.cardTitle}>Temperatura</Text>

      <Input
        small
        name="Setpoint"
        onChange={onChange}
        valueType="temperatureSetpoint"
        keyboardType="decimal-pad"
      />
      <Input
        small
        name="Ganancia proporcional"
        onChange={onChange}
        valueType="proportionalGain"
        keyboardType="decimal-pad"
      />
      <Input
        small
        name="Ganancia integral"
        onChange={onChange}
        valueType="integralGain"
        keyboardType="decimal-pad"
      />
      <Input
        small
        name="Ganancia derivativa"
        onChange={onChange}
        valueType="derivativeGain"
        keyboardType="decimal-pad"
      />

      <Text style={configStyles.cardTitle}>Humedad relativa</Text>
      <Input
        small
        name="setpoint"
        onChange={onChange}
        valueType="humiditySetpoint"
        keyboardType="decimal-pad"
      />

      <Text style={configStyles.cardTitle}>Luminosidad</Text>
      <Input
        small
        name="Setpoint de alerta"
        onChange={onChange}
        valueType="luminositySetpoint"
        keyboardType="decimal-pad"
      />

      <Text style={configStyles.cardTitle}>Dioxido de Carbono</Text>
      <Input
        small
        name="Setpoint de alerta"
        onChange={onChange}
        valueType="carbonoSetpoint"
        keyboardType="decimal-pad"
      />
      <TouchableOpacity
        style={configStyles.cardButton}
        onPress={handleUpdateVariables}>
        <Text style={configStyles.cardButtonText}>Guardar cambios</Text>
      </TouchableOpacity>
    </View>
  );
};
