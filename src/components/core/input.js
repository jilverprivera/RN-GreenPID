import React from 'react';
import {Text, TextInput, View} from 'react-native';

import {core} from '../../styles/Core';

const Input = ({
  text,
  onChange,
  keyboardType,
  valueType,
  secureText,
  placeholder,
}) => {
  return (
    <View style={core.inputContent}>
      {text && <Text style={core.inputText}>{text}</Text>}
      <TextInput
        style={core.input}
        placeholderTextColor={'#525252'}
        placeholder={placeholder}
        secureTextEntry={secureText}
        keyboardType={keyboardType}
        onChangeText={value => onChange(value, valueType)}
      />
    </View>
  );
};

export default Input;
