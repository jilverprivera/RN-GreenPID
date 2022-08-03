import React, {useContext, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StepIndicator from 'react-native-step-indicator';
import Swiper from 'react-native-swiper';

import {AppContext} from '../../context/AppContext';
import {ThemeContext} from '../../context/ThemeContext';

import Header from '../../components/layout/header';

import {DarkTheme, LightTheme} from '../../config/LinearGradientColors';
import VARIABLES_VALUES from '../../data/VARIABLES_VALUES.json';
import INITIAL_VARIABLES from '../../data/INITIAL_VARIABLES.json';
import VARIABLES_LABELS from '../../data/VARIABLES_LABELS.json';
import {STEP_STYLES} from '../../styles/STEP_STYLES';
import {useNavigation} from '@react-navigation/native';

const AutomaticConfiguration = () => {
  const navigation = useNavigation();
  const {tw, colorScheme} = useContext(ThemeContext);
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
    <LinearGradient
      colors={colorScheme === 'dark' ? DarkTheme : LightTheme}
      start={{x: 0, y: 0}}
      end={{x: 1.5, y: 1}}
      style={tw`flex-1 flex bg-zinc-100 dark:bg-zinc-900 w-full flex-1 overflow-hidden relative`}>
      <Header title="Control predeterminado" withBack={true} />
      <View style={tw`w-11/12 mx-auto`}>
        <StepIndicator
          customStyles={STEP_STYLES}
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
              style={tw`text-lg text-zinc-900 dark:text-zinc-100 font-semibold text-center mb-5`}>
              {item.name}
            </Text>
            {item.variables.map(variable => (
              <View key={variable.value} style={tw`w-full my-1`}>
                <Text
                  style={tw`text-base text-zinc-900 dark:text-zinc-100 font-semibold mb-2`}>
                  {variable.name}
                </Text>
                <View
                  style={tw`w-full rounded-lg bg-white dark:bg-zinc-800 p-4`}>
                  <Text style={tw`text-base text-zinc-900 dark:text-zinc-100 `}>
                    {variable.predefined}
                  </Text>
                </View>
              </View>
            ))}
            {currentPosition === 4 && (
              <TouchableOpacity
                activeOpacity={0.7}
                style={tw`bg-teal-500 dark:bg-indigo-600 flex items-center justify-center mt-10 py-5 rounded-xl`}
                onPress={() => handleUpdateVariables()}>
                <Text
                  style={tw`text-base tracking-wider font-semibold text-zinc-100`}>
                  Aplicar cambios
                </Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </Swiper>
    </LinearGradient>
  );
};

export default AutomaticConfiguration;
