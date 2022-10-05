import React, {useContext} from 'react';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import {AppContext} from '../context/AppContext';

import SPRING_CONFIG from '../data/SPRING_CONFIG.json';

import BottomSheet from '../components/bottomSheet';
import ScreenTitle from '../components/ScreenTitle';

import {THEME} from '../styles/Theme';
import {layout} from '../styles/Layout';
import {core} from '../styles/Core';
import {settings} from '../styles/Settings';

const SettingScreen = ({navigation, route, animated}) => {
  const {userState, SignOut} = useContext(AppContext);
  const {userId, userName, userEmail} = userState;

  const top = useSharedValue(THEME.SIZES.height);

  const style = useAnimatedStyle(() => {
    return {
      top: top.value,
    };
  });

  const gestureHandler = useAnimatedGestureHandler({
    onStart(_, context) {
      context.startTop = top.value;
    },
    onActive(event, context) {
      top.value = context.startTop + event.translationY;
    },
    onEnd() {
      if (top.value > THEME.SIZES.height / 2 + 200) {
        top.value = THEME.SIZES.height;
      } else {
        top.value = THEME.SIZES.height / 1;
      }
    },
  });

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
        <ScreenTitle title="Tu Información" />

        <View>
          <View style={settings.informationView}>
            <Text style={settings.informationTextBlack}>Nombre: </Text>
            <Text style={settings.informationText}>{userName}</Text>
          </View>
          <View style={settings.informationView}>
            <Text style={settings.informationTextBlack}>Correo: </Text>
            <Text style={settings.informationText}>{userEmail}</Text>
          </View>
          <View style={settings.informationView}>
            <Text style={settings.informationTextBlack}>ID: </Text>
            <Text style={settings.informationText}>{userId}</Text>
          </View>
        </View>

        <View style={settings.separator}>
          <ScreenTitle title="Sistemas de control" />
          <TouchableOpacity
            style={core.card}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('ManualControl')}>
            <View style={settings.cardControl}>
              <Text style={settings.cardControlText}>Control Manual</Text>
              <Icon size={32} name="user-cog" color={THEME.COLORS.secondary} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={core.card}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('PredeterminatedControl')}>
            <View style={settings.cardControl}>
              <Text style={settings.cardControlText}>
                Control Predeterminado
              </Text>
              <Icon size={32} name="sliders-h" color={THEME.COLORS.secondary} />
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={settings.signOutButton}
          activeOpacity={0.8}
          onPress={() => SignOut()}>
          <Text style={settings.signOutText}>Cerrar sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={layout.openerBottomSheet}
          activeOpacity={0.8}
          onPress={() => {
            top.value = withSpring(THEME.SIZES.height * 0.25, SPRING_CONFIG);
          }}>
          <View style={layout.bottomSheetButtonView} />
        </TouchableOpacity>

        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={[style, layout.bottomSheetView]}>
            <TouchableOpacity
              style={layout.bottomSheetButton}
              activeOpacity={0.7}
              onPress={() => {
                top.value = withSpring(THEME.SIZES.height * 1, SPRING_CONFIG);
              }}>
              <View style={layout.bottomSheetButtonView} />
            </TouchableOpacity>
            <BottomSheet />
          </Animated.View>
        </PanGestureHandler>
      </Animated.View>
    </>
  );
};

export default SettingScreen;
