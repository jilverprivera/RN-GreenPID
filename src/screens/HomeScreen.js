import React, {useContext} from 'react';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import {AppContext} from '../context/AppContext';
import {ThemeContext} from '../context/ThemeContext';

import VARIABLES from '../data/VARIABLES_LIST.json';
import SPRING_CONFIG from '../data/SPRING_CONFIG.json';

import BottomSheet from '../components/bottomSheet';
import ScreenTitle from '../components/ScreenTitle';
import ProcessVariables from '../components/ProcessVariables';

import {THEME} from '../styles/Theme';
import {layout} from '../styles/Layout';
import {core} from '../styles/Core';

const HomeScreen = ({navigation, route, animated}) => {
  const {userState} = useContext(AppContext);

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
        <ScreenTitle title="Variables de proceso" />
        <ProcessVariables />
        {/* <SafeAreaView>
          <PanGestureHandler onGestureEvent={gestureHandler}>
            <Animated.View
              style={[
                style,
                tw`bg-neutral-200 dark:bg-neutral-900 absolute bottom-0 left-0 right-0 rounded-t-3xl overflow-hidden p-4`,
              ]}>
              <TouchableOpacity
                style={tw`absolute self-center w-full py-2 mb-2 flex items-center justify-center top-2`}
                activeOpacity={0.7}
                onPress={() => {
                  top.value = withSpring(SIZES.height * 1, SPRING_CONFIG);
                }}>
                <View
                  style={tw`w-14 h-1 rounded-full bg-neutral-400  dark:bg-neutral-700`}
                />
              </TouchableOpacity>
              <BottomSheet />
            </Animated.View>
          </PanGestureHandler>
        </SafeAreaView> */}
      </Animated.View>
    </>
  );
};

export default HomeScreen;
