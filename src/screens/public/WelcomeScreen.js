import {
  Image,
  StyleSheet,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';

import BG from '../../../assets/images/bg.jpg';

import {GLOBAL_STYLES} from '../../styles';
import {COLORS, FONTS, SIZES} from '../../constants';

const WelcomeScreen = ({navigation}) => {
  return (
    <>
      <StatusBar hidden={true} />
      <Animated.View style={GLOBAL_STYLES.screenContainer}>
        <Image source={BG} style={STYLES.imageContent} />
        <Text style={STYLES.title}>GreenPID</Text>
        <View style={STYLES.btnWrapper}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('signInScreen')}
            style={STYLES.btn}>
            <Text style={STYLES.text}>Iniciar sesión</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('signUpScreen')}
            style={STYLES.altBtn}>
            <Text style={STYLES.altText}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </>
  );
};

export default WelcomeScreen;

const STYLES = StyleSheet.create({
  imageContent: {
    position: 'absolute',
    zIndex: -1,
    top: 0,
    left: 0,
    width: SIZES.width,
    height: SIZES.height,
  },
  title: {
    fontSize: SIZES.heading1 * 2,
    fontFamily: FONTS.medium,
    textAlign: 'center',
    color: COLORS.white,
    marginHorizontal: SIZES.margin,
    marginTop: SIZES.margin * 5,
  },
  btnWrapper: {
    position: 'absolute',
    width: SIZES.width - SIZES.margin,
    bottom: SIZES.margin * 2,
    left: SIZES.margin / 2,

    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  btn: {
    width: SIZES.width - SIZES.margin,
    padding: SIZES.padding * 1.25,
    borderRadius: SIZES.borders,
    marginBottom: SIZES.margin / 2,
    backgroundColor: COLORS.white,
  },
  altBtn: {
    width: SIZES.width - SIZES.margin,
    padding: SIZES.padding * 1.25,
    borderRadius: SIZES.borders,
    marginBottom: SIZES.margin / 2,
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  text: {
    fontSize: SIZES.heading3,
    fontFamily: FONTS.medium,
    textAlign: 'center',
    color: COLORS.black,
  },
  altText: {
    fontSize: SIZES.heading3,
    fontFamily: FONTS.medium,
    textAlign: 'center',
    color: COLORS.white,
  },
});
