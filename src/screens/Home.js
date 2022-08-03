import React, {useContext} from 'react';
import {PanGestureHandler} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {ThemeContext} from '../context/ThemeContext';

import BottomSheet from '../components/home/bottomSheet';

import {SIZES} from '../constants';
import SPRING_CONFIG from '../data/SPRING_CONFIG.json';
import {DarkTheme, LightTheme} from '../config/LinearGradientColors';

const Home = () => {
  const {tw, colorScheme} = useContext(ThemeContext);
  const top = useSharedValue(SIZES.height);

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
      if (top.value > SIZES.height / 2 + 200) {
        top.value = SIZES.height;
      } else {
        top.value = SIZES.height / 1;
      }
    },
  });

  return (
    <>
      <StatusBar hidden={true} />
      <LinearGradient
        colors={colorScheme === 'dark' ? DarkTheme : LightTheme}
        start={{x: 0, y: 0}}
        end={{x: 1.5, y: 1}}
        style={tw`flex-1 flex bg-zinc-100 dark:bg-zinc-900 w-full flex-1 overflow-hidden relative`}>
        <View style={tw`w-11/12 mx-auto py-10 relative`}>
          <View
            style={tw`h-10 w-full flex flex-row items-center justify-center relative`}>
            <Text
              style={tw`text-black dark:text-zinc-100 font-normal text-base`}>
              Inicio
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                top.value = withSpring(SIZES.height * 0.15, SPRING_CONFIG);
              }}
              onLongPress={() => {
                top.value = withSpring(SIZES.height * 1, SPRING_CONFIG);
              }}
              style={tw`absolute top-0 right-0 h-12 w-12 flex items-center justify-center text-black dark:text-zinc-100`}>
              <Icon
                name="info-circle"
                size={32}
                color={colorScheme === 'dark' ? '#fff' : '#000'}
              />
            </TouchableOpacity>
          </View>
        </View>

        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View
            style={[
              style,
              tw`bg-zinc-200 dark:bg-zinc-900 absolute bottom-0 left-0 right-0 rounded-t-3xl overflow-hidden p-4`,
            ]}>
            <TouchableOpacity
              style={tw`absolute self-center w-full py-2 mb-2 flex items-center justify-center top-2`}
              activeOpacity={0.7}
              onPress={() => {
                top.value = withSpring(SIZES.height * 1, SPRING_CONFIG);
              }}>
              <View
                style={tw`w-14 h-1 rounded-full bg-zinc-400  dark:bg-zinc-700`}
              />
            </TouchableOpacity>
            <BottomSheet />
          </Animated.View>
        </PanGestureHandler>
      </LinearGradient>
    </>
  );
};

export default Home;
