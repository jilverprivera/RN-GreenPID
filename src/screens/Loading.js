import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {THEME} from '../styles/Theme';

const LoadingScreen = () => {
  return (
    <View style={styles.content}>
      <ActivityIndicator size="large" color={THEME.COLORS.secondary} />
      <Text style={styles.text}>Aguarda un momento</Text>
      <Text style={styles.text2}>Estamos validando tu información</Text>
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  content: {
    backgroundColor: THEME.COLORS.primary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
