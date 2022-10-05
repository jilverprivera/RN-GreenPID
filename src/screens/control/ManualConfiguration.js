import React, {useContext, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import StepIndicator from 'react-native-step-indicator';
import Swiper from 'react-native-swiper';

import {AppContext} from '../../context/AppContext';
import {ThemeContext} from '../../context/ThemeContext';
import {useForm} from '../../hooks/useForm';

import {Input} from '../../components/core';
import Header from '../../components/layout/header';

import INITIAL_VARIABLES from '../../data/INITIAL_VARIABLES.json';
import VARIABLES_VALUES from '../../data/VARIABLES_VALUES.json';
import VARIABLES_LABELS from '../../data/VARIABLES_LABELS.json';

import stepStyles from '../../utils/stepStyles';

const ManualConfiguration = () => {
  const navigation = useNavigation();
  const {tw} = useContext(ThemeContext);

  const {setManualVariables} = useContext(AppContext);
  const {form, onChange} = useForm(INITIAL_VARIABLES);

  const [currentPosition, setCurrentPosition] = useState(0);

  const onStepPress = position => {
    setCurrentPosition(position);
  };

  const handleUpdateVariables = () => {
    try {
      setManualVariables(form);
      navigation.navigate('Success', {
        message: '¡Hecho!',
        altMessage:
          'Variables manuales actualizadas a su estado predeterminado.',
        prevRoute: 'AutomaticConfiguration',
      });
    } catch (err) {
      navigation.navigate('Error', {
        message: 'Ops... Ocurrio un error 😔',
        altMessage: 'Algo fue mal, por favor intenta de nuevo',
        prevRoute: 'AutomaticConfiguration',
      });
    }
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-neutral-50 dark:bg-neutral-900`}>
      <Header title="Configuración manual" withBack={true} />
      <View style={tw`w-11/12 mx-auto`}>
        <StepIndicator
          customStyles={stepStyles}
          currentPosition={currentPosition}
          onPress={onStepPress}
          labels={VARIABLES_LABELS}
        />
      </View>
      <Swiper
        loop={false}
        index={currentPosition}
        autoplay={false}
        onIndexChanged={page => {
          setCurrentPosition(page);
        }}>
        {VARIABLES_VALUES.map(item => (
          <View key={item.name} style={tw`flex-1 w-11/12 mx-auto mt-4`}>
            <Text
              style={tw`text-lg text-neutral-900 dark:text-neutral-50 font-semibold text-center mb-5`}>
              {item.name}
            </Text>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
              {item.variables.map((input, i) => {
                return (
                  <Input
                    key={i}
                    text={input.name}
                    placeholder={String(input.predefined)}
                    keyboardType="decimal-pad"
                    onChange={onChange}
                    valueType={input.value}
                  />
                );
              })}
            </KeyboardAvoidingView>
            {currentPosition === 4 && (
              <TouchableOpacity
                activeOpacity={0.7}
                style={tw`bg-teal-500 dark:bg-indigo-600 flex items-center justify-center mt-10 py-5 rounded-xl`}
                onPress={() => handleUpdateVariables()}>
                <Text
                  style={tw`text-base tracking-wider font-semibold text-neutral-50`}>
                  Aplicar cambios
                </Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </Swiper>
    </SafeAreaView>
  );
};

export default ManualConfiguration;
