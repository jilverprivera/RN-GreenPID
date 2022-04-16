import React, {useContext, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Animated from 'react-native-reanimated';
import Swiper from 'react-native-swiper';
import StepIndicator from 'react-native-step-indicator';

import {AppContext} from '../../context';

import DATA from '../../config/predefined_variables.json';
import VARIABLES from '../../config/variables.json';

import {Header} from '../../components/core';

import {CONTROL, GLOBAL_STYLES, STEP_STYLES} from '../../styles';
import {COLORS, FONTS, SIZES} from '../../constants';

const LABELS = [
  'Temperatura',
  'Humedad relativa',
  'Humedad de suelo',
  'Calidad de aire',
  'Sistema de riego',
];

const PredefinedControlScreen = ({navigation}) => {
  const {saveVariablesDB} = useContext(AppContext);

  const [currentPosition, setCurrentPosition] = useState(0);

  const onStepPress = position => {
    setCurrentPosition(position);
  };

  return (
    <Animated.View style={GLOBAL_STYLES.screenContainer}>
      <Header title="Control predefinido" withBack={true} />
      <View style={CONTROL.stepContainer}>
        <StepIndicator
          customStyles={STEP_STYLES}
          currentPosition={currentPosition}
          onPress={onStepPress}
          labels={LABELS}
        />
      </View>
      <Swiper
        loop={false}
        index={currentPosition}
        autoplay={false}
        onIndexChanged={page => {
          setCurrentPosition(page);
        }}>
        {DATA.map(item => (
          <View key={item.name} style={STYLES.page}>
            <Text style={STYLES.title}>{item.name}</Text>

            {item.variables.map(variable => (
              <View key={variable.value}>
                <View style={STYLES.wrapper}>
                  <Text style={STYLES.name}>{variable.name}</Text>
                  <View style={STYLES.content}>
                    <Text style={STYLES.contentText}>{variable.value}</Text>
                  </View>
                </View>
              </View>
            ))}
            {currentPosition === 4 && (
              <TouchableOpacity
                activeOpacity={0.7}
                style={CONTROL.btn}
                onPress={() => saveVariablesDB(VARIABLES)}>
                <Text style={CONTROL.btnText}>Aplicar cambios</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </Swiper>
    </Animated.View>
  );
};

export default PredefinedControlScreen;

const STYLES = StyleSheet.create({
  page: {
    width: SIZES.width - SIZES.margin * 2,
    alignSelf: 'center',
    marginTop: SIZES.margin / 2,
  },

  title: {
    fontFamily: FONTS.semibold,
    fontSize: SIZES.heading2,
    color: COLORS.black,
    textAlign: 'center',
    marginBottom: SIZES.margin / 2,
  },

  wrapper: {
    width: '100%',
  },
  name: {
    fontFamily: FONTS.medium,
    color: COLORS.black,
    fontSize: SIZES.body3,
    marginVertical: 10,
  },
  content: {
    width: '100%',
    padding: SIZES.padding * 1.25,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.borders,
  },
  contentText: {
    fontSize: SIZES.body3,
    color: COLORS.black,
    fontFamily: FONTS.semibold,
  },
});
