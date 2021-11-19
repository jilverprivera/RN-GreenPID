import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {authStyle} from '../../styles/auth.styles';

export const Input = ({
  name,
  keyboardType,
  secureEntry,
  onChange,
  valueType,
  capitalize
}) => {
  return (
    <View style={authStyle.inputWrapper}>
      <Text style={authStyle.inputText}>{name}</Text>
      <TextInput
        style={authStyle.textInput}
        keyboardType={keyboardType}
        secureTextEntry={secureEntry}
        autoCapitalize={capitalize}
        onChangeText={value => onChange(value, valueType)}
      />
    </View>
  );
};
