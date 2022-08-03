import React, {useContext} from 'react';
import {ScrollView, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {ThemeContext} from '../context/ThemeContext';

import Header from '../components/layout/header';
import Card from '../components/manuals/card';

import MANUALS_LIST from '../data/MANUALS_LIST.json';
import PHONE from '../images/girl_phone.svg';
import {DarkTheme, LightTheme} from '../config/LinearGradientColors';

import {SIZES} from '../constants';

const Manuals = () => {
  const {tw, colorScheme} = useContext(ThemeContext);
  return (
    <LinearGradient
      colors={colorScheme === 'dark' ? DarkTheme : LightTheme}
      start={{x: 0, y: 0}}
      end={{x: 1.5, y: 1}}
      style={tw`flex-1`}>
      <Header title="Manuales de usuario" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={tw`flex-1 z-50 w-11/12 mx-auto`}>
        {MANUALS_LIST.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </ScrollView>
      <View style={tw`absolute -bottom-14 left-14`}>
        <PHONE width={SIZES.width} height={SIZES.width} />
      </View>
    </LinearGradient>
  );
};

export default Manuals;
