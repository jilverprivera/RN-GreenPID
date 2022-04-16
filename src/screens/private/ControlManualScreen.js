import React, {useContext, useState} from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Swiper from 'react-native-swiper';
import Animated from 'react-native-reanimated';

import {AppContext} from '../../context';
import {useForm} from '../../hooks';

import {Header, Input} from '../../components/core';

import DATA from '../../config/manual_variables.json';
import VARIABLES from '../../config/variables.json';

import {COLORS, FONTS, SIZES} from '../../constants';
import {CONTROL, GLOBAL_STYLES, STEP_STYLES} from '../../styles';

const LABELS = [
  'Temperatura',
  'Humedad relativa',
  'Humedad de suelo',
  'Calidad de aire',
  'Sistema de riego',
];
const ManualControlScreen = ({navigation}) => {
  const {saveVariablesDB} = useContext(AppContext);
  const {form, onChange} = useForm(VARIABLES);

  const [currentPosition, setCurrentPosition] = useState(0);

  const onStepPress = position => {
    setCurrentPosition(position);
  };

  return (
    <Animated.View style={GLOBAL_STYLES.screenContainer}>
      <Header title="Control manual" withBack={true} />
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
        {DATA.map((data, index) => (
          <View key={index} style={STYLES.page}>
            <Text style={STYLES.title}>{data.name}</Text>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
              {data.variables.map(item => {
                return (
                  <Input
                    key={item.value}
                    text={item.name}
                    placeholder={String(item.predefined)}
                    keyboardType="decimal-pad"
                    onChange={onChange}
                    valueType={item.value}
                  />
                );
              })}
            </KeyboardAvoidingView>
            {currentPosition === 4 && (
              <TouchableOpacity
                activeOpacity={0.7}
                style={CONTROL.btn}
                onPress={() => saveVariablesDB(form)}>
                <Text style={CONTROL.btnText}>Aplicar cambios</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </Swiper>
    </Animated.View>
  );
};

export default ManualControlScreen;

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
});
