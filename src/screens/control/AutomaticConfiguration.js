import React, {useContext, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Swiper from 'react-native-swiper';

import {AppContext} from '../../context/AppContext';
import {ThemeContext} from '../../context/ThemeContext';

import Header from '../../components/layout/header';

import VARIABLES_VALUES from '../../data/VARIABLES_VALUES.json';
import INITIAL_VARIABLES from '../../data/INITIAL_VARIABLES.json';
import VARIABLES_LABELS from '../../data/VARIABLES_LABELS.json';

import stepStyles from '../../utils/stepStyles';

const AutomaticConfiguration = () => {
  const navigation = useNavigation();
  const {tw} = useContext(ThemeContext);
  const {setPredefinedVariables} = useContext(AppContext);

  const [currentPosition, setCurrentPosition] = useState(0);

  const handleUpdateVariables = () => {
    try {
      setPredefinedVariables(INITIAL_VARIABLES);
      navigation.navigate('Success', {
        message: '¡Hecho!',
        altMessage: 'Variables actualizadas a su estado predeterminado.',
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

  const onStepPress = position => {
    setCurrentPosition(position);
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-neutral-50 dark:bg-neutral-900`}>
      <Header title="Configuración predeterminada" withBack={true} />
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
            {item.variables.map(variable => (
              <View key={variable.value} style={tw`w-full my-1`}>
                <Text
                  style={tw`text-base text-neutral-900 dark:text-neutral-50 font-semibold mb-2`}>
                  {variable.name}
                </Text>
                <View
                  style={tw`w-full rounded-lg bg-neutral-50 dark:bg-neutral-800 p-4`}>
                  <Text
                    style={tw`text-base text-neutral-900 dark:text-neutral-50 `}>
                    {variable.predefined}
                  </Text>
                </View>
              </View>
            ))}
            {currentPosition === 4 && (
              <TouchableOpacity
                activeOpacity={0.7}
                style={tw`bg-violet-600 dark:bg-violet-500 flex items-center justify-center mt-10 py-5 rounded-xl`}
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

export default AutomaticConfiguration;
