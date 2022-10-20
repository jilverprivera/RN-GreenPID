import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {StatusBar, TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';

import ScreenTitle from '../components/ScreenTitle';
import ProcessVariables from '../components/ProcessVariables';

import {THEME} from '../styles/Theme';
import {layout} from '../styles/Layout';

const HomeScreen = ({navigation, route, animated}) => {
  return (
    <>
      <StatusBar
        hidden={false}
        animated={true}
        backgroundColor={THEME.COLORS.secondary}
      />
      <Animated.View style={{...animated, ...layout.container}}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={layout.toggleDrawer}
          onPress={() => navigation.toggleDrawer()}>
          <Icon size={32} name="th-large" color={THEME.COLORS.secondary} />
        </TouchableOpacity>
        <ScreenTitle title="Variables de proceso" />
        <ProcessVariables />
      </Animated.View>
    </>
  );
};

export default HomeScreen;
