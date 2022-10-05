import React, {useContext} from 'react';
import {Image} from 'react-native';
import {
  GestureHandlerRootView,
  PinchGestureHandler,
} from 'react-native-gesture-handler';

import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {THEME} from '../../styles/Theme';
import {ThemeContext} from '../../context/ThemeContext';

const PinchImage = Animated.createAnimatedComponent(Image);

const AnimatedImage = ({image}) => {
  const {tw} = useContext(ThemeContext);
  const scale = useSharedValue(1);
  const focalX = useSharedValue(0);
  const focalY = useSharedValue(0);

  const pinchHandler = useAnimatedGestureHandler({
    onActive: event => {
      scale.value = event.scale;
      focalX.value = event.focalX;
      focalY.value = event.focalY;
    },
    onEnd: () => {
      scale.value = withTiming(1);
    },
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: focalX.value},
        {translateY: focalY.value},
        {translateX: -THEME.SIZES.width / 2},
        {translateY: -THEME.SIZES.height / 2},
        {scale: scale.value},
        {translateX: -focalX.value},
        {translateY: -focalY.value},
        {translateX: THEME.SIZES.width / 2},
        {translateY: THEME.SIZES.height / 2},
      ],
    };
  });

  return (
    <GestureHandlerRootView style={tw`flex-1 z-50`}>
      <PinchGestureHandler onGestureEvent={pinchHandler}>
        <PinchImage
          style={[
            tw`w-full self-center border-2 `,
            rStyle,
            {height: THEME.SIZES.width, resizeMode: 'contain'},
          ]}
          source={image}
        />
      </PinchGestureHandler>
    </GestureHandlerRootView>
  );
};

export default AnimatedImage;
