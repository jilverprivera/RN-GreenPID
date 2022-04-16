import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {COLORS, FONTS, SIZES} from '../../constants';

const BottomSheet = () => {
  const {navigate} = useNavigation();

  return (
    <View>
      <Text style={STYLES.title}>¿Cómo deseas controlar?</Text>
      <TouchableOpacity
        style={STYLES.btn}
        activeOpacity={0.7}
        onPress={() => navigate('predefinedControlScreen')}>
        <Text style={STYLES.btnText}>Control predefinido</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={STYLES.btn}
        activeOpacity={0.7}
        onPress={() => navigate('manualControlScreen')}>
        <Text style={STYLES.btnText}>Control manual</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomSheet;

const STYLES = StyleSheet.create({
  title: {
    marginTop: SIZES.margin,
    fontFamily: FONTS.semibold,
    fontSize: SIZES.heading3,
    color: COLORS.black,
    marginBottom: SIZES.margin / 2,
  },
  text: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.body3,
    color: COLORS.black,
    marginBottom: 10,
  },
  btn: {
    width: '100%',
    padding: 20,
    borderRadius: SIZES.borders,
    backgroundColor: COLORS.secondary,
    marginVertical: SIZES.margin * 0.5,
  },
  btnText: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.body2,
    color: COLORS.white,
  },
});
