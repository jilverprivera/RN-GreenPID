import React, {useEffect, useRef} from 'react';
import {
  ActivityIndicator,
  Animated,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

const LoadingScreen = () => {
  const transition = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(transition, {
      toValue: 100,
      delay: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator size="large" color={COLORS.white} />
      <Text style={styles.text}>Aguarda un momento</Text>
      <Text style={styles.text2}>Estamos validando tu información</Text>
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  text: {
    fontFamily: FONTS.semibold,
    color: COLORS.white,
    fontSize: SIZES.h2,
  },
  text2:{
    fontFamily: FONTS.semibold,
    color: COLORS.white,
    fontSize: SIZES.h3,  
  }
});
