import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

const LoadingScreen = () => {
  return (
    <View style={styles.content}>
      <ActivityIndicator size="large" color={COLORS.black} />
      <Text style={styles.text}>Aguarda un momento</Text>
      <Text style={styles.text2}>Estamos validando tu información</Text>
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  content: {
    backgroundColor: COLORS.background,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: FONTS.semibold,
    color: COLORS.black,
    fontSize: SIZES.heading2,
  },
  text2: {
    fontFamily: FONTS.regular,
    color: COLORS.black,
    fontSize: SIZES.body1,
  },
});
