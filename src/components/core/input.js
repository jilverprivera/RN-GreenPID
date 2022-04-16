import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

import {COLORS, FONTS, SIZES} from '../../constants';

const Input = ({
  text,
  onChange,
  keyboardType,
  valueType,
  secureText,
  placeholder,
}) => {
  return (
    <View style={STYLES.container}>
      {text && <Text style={STYLES.text}>{text}</Text>}
      <TextInput
        style={STYLES.input}
        placeholderTextColor={COLORS.darkGray}
        placeholder={placeholder}
        secureTextEntry={secureText}
        keyboardType={keyboardType}
        onChangeText={value => onChange(value, valueType)}
      />
    </View>
  );
};

export default Input;

const STYLES = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: SIZES.margin,
  },
  text: {
    width: '100%',
    fontSize: SIZES.body3,
    fontFamily: FONTS.regular,
    color: COLORS.black,
    marginVertical: SIZES.margin / 2,
  },
  input: {
    width: '100%',
    backgroundColor: COLORS.white,
    // height: 50,
    padding: SIZES.padding,
    borderRadius: SIZES.borders,
    fontSize: SIZES.body2,
    fontFamily: FONTS.medium,
    color: COLORS.black,
  },
});
