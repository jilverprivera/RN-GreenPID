import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {core} from '../styles/Core';
import {THEME} from '../styles/Theme';

const ProcessVariablesCard = ({title, variable, units}) => {
  return (
    <View style={core.card}>
      <Text style={core.cardTitle}>{title}</Text>
      {variable === null ? (
        <ActivityIndicator size={'large'} color={THEME.COLORS.secondary} />
      ) : (
        <Text style={core.cardVariableText}>
          {variable} {units && units}
        </Text>
      )}
    </View>
  );
};

export default ProcessVariablesCard;
