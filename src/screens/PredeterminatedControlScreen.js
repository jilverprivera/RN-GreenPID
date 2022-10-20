import React, {useContext, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Animated from 'react-native-reanimated';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {AppContext} from '../context/AppContext';

import ScreenTitle from '../components/ScreenTitle';

import VARIABLES_VALUES from '../data/VARIABLES_VALUES.json';
import INITIAL_VARIABLES from '../data/INITIAL_VARIABLES.json';

import {layout} from '../styles/Layout';
import {THEME} from '../styles/Theme';
import {core} from '../styles/Core';

const PredeterminatedControlScreen = ({navigation, animated}) => {
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

  return (
    <Animated.View style={{...animated, ...layout.container}}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={layout.toggleDrawer}
        onPress={() => navigation.toggleDrawer()}>
        <Icon size={32} name="th-large" color={THEME.COLORS.secondary} />
      </TouchableOpacity>
      <ScreenTitle title="Control predeterminado" />
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
            {item.variables.map(variable => (
              <View key={variable.value} style={core.inputContent}>
                <Text style={core.inputText}>{variable.name}</Text>
                <View
                  style={{
                    ...core.input,
                    paddingVertical: THEME.SIZES.padding,
                  }}>
                  <Text style={core.inputText}>{variable.predefined}</Text>
                </View>
              </View>
            ))}
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

export default PredeterminatedControlScreen;
