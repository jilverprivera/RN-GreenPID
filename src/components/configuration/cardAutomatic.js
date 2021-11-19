import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';
import {AppContext} from '../../context/appContext';
import {configStyles} from '../../styles/configuration.styles';

export const CardAutomatic = ({handleActiveConfigButton}) => {
  const automaticData = {
    temperatureSetpoint: 34,
    proportionalGain: 1.056,
    integralGain: 1.025,
    derivativeGain: 0.75,
    humiditySetpoint: 56,
    luminositySetpoint: 50,
    carbonoSetpoint: 30,
  };

  const {saveVariablesDB} = useContext(AppContext);

  const handleUpdateVariables = async () => {
    await saveVariablesDB(automaticData);
    handleActiveConfigButton('automatic');
  };

  return (
    <View style={configStyles.card}>
      <Text style={configStyles.cardTitle}>Temperatura</Text>
      <Text style={configStyles.cardTitleInput}>Setpoint</Text>
      <View style={configStyles.cardInput}>
        <Text
          style={{
            fontSize: SIZES.body3,
            fontFamily: FONTS.regular,
            color: COLORS.black,
          }}>
          {automaticData.temperatureSetpoint} °C
        </Text>
      </View>
      <Text style={configStyles.cardTitleInput}>Ganancia proporcional</Text>
      <View style={configStyles.cardInput}>
        <Text
          style={{
            fontSize: SIZES.body3,
            fontFamily: FONTS.regular,
            color: COLORS.black,
          }}>
          {automaticData.proportionalGain}
        </Text>
      </View>
      <Text style={configStyles.cardTitleInput}>Ganancia integral</Text>
      <View style={configStyles.cardInput}>
        <Text
          style={{
            fontSize: SIZES.body3,
            fontFamily: FONTS.regular,
            color: COLORS.black,
          }}>
          {automaticData.integralGain}
        </Text>
      </View>
      <Text style={configStyles.cardTitleInput}>Ganancia derivativa</Text>
      <View style={configStyles.cardInput}>
        <Text
          style={{
            fontSize: SIZES.body3,
            fontFamily: FONTS.regular,
            color: COLORS.black,
          }}>
          {automaticData.derivativeGain}
        </Text>
      </View>
      <Text style={configStyles.cardTitle}>Humedad relativa</Text>
      <Text style={configStyles.cardTitleInput}>Setpoint</Text>
      <View style={configStyles.cardInput}>
        <Text
          style={{
            fontSize: SIZES.body3,
            fontFamily: FONTS.regular,
            color: COLORS.black,
          }}>
          {automaticData.humiditySetpoint} %
        </Text>
      </View>

      <Text style={configStyles.cardTitle}>Luminosidad</Text>
      <Text style={configStyles.cardTitleInput}>Setpoint de alerta</Text>
      <View style={configStyles.cardInput}>
        <Text
          style={{
            fontSize: SIZES.body3,
            fontFamily: FONTS.regular,
            color: COLORS.black,
          }}>
          {automaticData.luminositySetpoint} %
        </Text>
      </View>
      <Text style={configStyles.cardTitle}>Dioxido de carbono</Text>
      <Text style={configStyles.cardTitleInput}>Setpoint de alerta</Text>
      <View style={configStyles.cardInput}>
        <Text
          style={{
            fontSize: SIZES.body3,
            fontFamily: FONTS.regular,
            color: COLORS.black,
          }}>
          {automaticData.carbonoSetpoint} %
        </Text>
      </View>

      <TouchableOpacity
        style={configStyles.cardButton}
        onPress={handleUpdateVariables}>
        <Text style={configStyles.cardButtonText}>Activar</Text>
      </TouchableOpacity>
    </View>
  );
};
