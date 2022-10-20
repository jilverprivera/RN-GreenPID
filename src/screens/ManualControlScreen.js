import React, {useContext, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated from 'react-native-reanimated';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {AppContext} from '../context/AppContext';
import {useForm} from '../hooks/useForm';

import ScreenTitle from '../components/ScreenTitle';
import {Input} from '../components/core';

import INITIAL_VARIABLES from '../data/INITIAL_VARIABLES.json';
import VARIABLES_VALUES from '../data/VARIABLES_VALUES.json';

import {THEME} from '../styles/Theme';
import {layout} from '../styles/Layout';
import {core} from '../styles/Core';

const ManualControlScreen = ({navigation, route, animated}) => {
  const {setManualVariables} = useContext(AppContext);
  const {form, onChange} = useForm(INITIAL_VARIABLES);

  const [currentPosition, setCurrentPosition] = useState(0);

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
    <Animated.View style={{...animated, ...layout.container}}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={layout.toggleDrawer}
        onPress={() => navigation.toggleDrawer()}>
        <Icon size={32} name="th-large" color={THEME.COLORS.secondary} />
      </TouchableOpacity>
      <ScreenTitle title="Control manual" />

      <Swiper
        loop={false}
        index={currentPosition}
        autoplay={false}
        onIndexChanged={page => {
          setCurrentPosition(page);
        }}>
        {VARIABLES_VALUES.map(item => (
          <View key={item.name} style={core.controlView}>
            <Text style={core.pageTitle}>{item.name}</Text>
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
            {currentPosition === VARIABLES_VALUES.length - 1 && (
              <TouchableOpacity
                activeOpacity={0.8}
                style={core.changesButton}
                onPress={() => handleUpdateVariables()}>
                <Text style={core.changesText}>Aplicar cambios</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </Swiper>
    </Animated.View>
  );
};

export default ManualControlScreen;
