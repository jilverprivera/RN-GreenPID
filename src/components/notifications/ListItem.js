import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {PanGestureHandler} from 'react-native-gesture-handler';

import {COLORS, SIZES} from '../../constants';

const LIST_ITEM_HEIGHT = 100;
const TRANSLATEX_THRESHOLD = SIZES.width * 0.4;

const ListItem = ({message, icon, date, type, onDismiss}) => {
  let noteDate = new Date(date);
  const currentDate = `${noteDate.toLocaleTimeString(
    'co-ES',
  )} - ${noteDate.toLocaleDateString('co-ES')}`;

  const translateX = useSharedValue(0);
  const itemHeight = useSharedValue(LIST_ITEM_HEIGHT);
  const marginVertical = useSharedValue(SIZES.margin / 2);
  const opacityContainer = useSharedValue(1);

  const panGesture = useAnimatedGestureHandler({
    onActive: event => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
      const shouldDismissed = translateX.value < TRANSLATEX_THRESHOLD;
      if (shouldDismissed) {
        translateX.value = withTiming(-SIZES.width);
        itemHeight.value = withTiming(0);
        marginVertical.value = withTiming(0);
        opacityContainer.value = withTiming(0, undefined, isFinished => {
          if (isFinished && onDismiss) {
            runOnJS(onDismiss)(message);
          }
        });
      } else {
        translateX.value = withTiming(0);
      }
    },
  });

  const rListContainerStyle = useAnimatedStyle(() => {
    return {
      height: itemHeight.value,
      marginVertical: marginVertical.value,
      opacity: opacityContainer.value,
    };
  });

  const rMesssageStyle = useAnimatedStyle(() => ({
    transform: [{translateX: translateX.value}],
  }));

  const rIconContainerStyle = useAnimatedStyle(() => {
    const opacity = withTiming(translateX.value < TRANSLATEX_THRESHOLD ? 1 : 0);
    return {opacity};
  });

  return (
    <Animated.View style={[rListContainerStyle, STYLES.container]}>
      <PanGestureHandler onGestureEvent={panGesture}>
        <Animated.View style={[rMesssageStyle, STYLES.list]}>
          <View
            style={[
              STYLES.icon,
              {
                backgroundColor:
                  type === 'success' ? COLORS.secondary : COLORS.auxiliar_4,
              },
            ]}>
            <Icon size={32} color={COLORS.white} name={icon} />
          </View>
          <View>
            <Text style={STYLES.text}>{message}</Text>
            <Text style={STYLES.text}>{currentDate}</Text>
          </View>
        </Animated.View>
      </PanGestureHandler>
      <Animated.View style={[rIconContainerStyle, STYLES.iconContainer]}>
        <Icon name="trash-alt" color={COLORS.auxiliar_4} size={32} />
      </Animated.View>
    </Animated.View>
  );
};

export default ListItem;

const STYLES = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  list: {
    width: SIZES.width - SIZES.margin,
    alignSelf: 'center',
    height: LIST_ITEM_HEIGHT,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.borders,
    padding: SIZES.padding,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  text: {color: COLORS.black},
  icon: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.margin / 2,
  },

  iconContainer: {
    height: LIST_ITEM_HEIGHT,
    width: LIST_ITEM_HEIGHT,
    // backgroundColor: 'red',
    position: 'absolute',
    right: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
