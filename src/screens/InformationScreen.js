import React from 'react';
import {ScrollView, StatusBar, TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome5';

import ScreenTitle from '../components/ScreenTitle';
import InformationCard from '../components/InformationCard';

import ManualList from '../data/MANUALS_LIST.json';

import {layout} from '../styles/Layout';
import {THEME} from '../styles/Theme';

const InformationScreen = ({navigation, route, animated}) => {
  return (
    <>
      <StatusBar hidden={true} />
      <Animated.View style={{...animated, ...layout.container}}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={layout.toggleDrawer}
          onPress={() => navigation.toggleDrawer()}>
          <Icon size={32} name="th-large" color={THEME.COLORS.secondary} />
        </TouchableOpacity>

        <ScreenTitle title="Información de prototipo" />
        <ScrollView showsVerticalScrollIndicator={false}>
          {ManualList.map((ctx, i) => (
            <InformationCard key={i} {...ctx} />
          ))}
        </ScrollView>
      </Animated.View>
    </>
  );
};

export default InformationScreen;
