import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../constants';

const Message = ({message}) => {
  return <Text style={STYLES.text}>{message}</Text>;
};

export default Message;

const STYLES = StyleSheet.create({
  text: {
    color: COLORS.black,
    fontFamily: FONTS.regular,
    fontSize: SIZES.body3,
    marginVertical: 5,
    lineHeight: 25,
  },
});
