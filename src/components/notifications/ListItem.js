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

import {THEME} from '../../styles/Theme';

const LIST_ITEM_HEIGHT = 115;
const TRANSLATEX_THRESHOLD = THEME.SIZES.width * 0.4;

const ListItem = ({message, icon, date, type, id, onDismiss}) => {
  let noteDate = new Date(date);
  const currentDate = `${noteDate.toLocaleTimeString(
    'co-ES',
  )} - ${noteDate.toLocaleDateString('co-ES')}`;

  const translateX = useSharedValue(0);
  const itemHeight = useSharedValue(LIST_ITEM_HEIGHT);
  const marginVertical = useSharedValue(THEME.SIZES.margin / 2);
  const opacityContainer = useSharedValue(1);

  const panGesture = useAnimatedGestureHandler({
    onActive: event => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
      const shouldDismissed = translateX.value < TRANSLATEX_THRESHOLD;
      if (shouldDismissed) {
        translateX.value = withTiming(-THEME.SIZES.width);
        itemHeight.value = withTiming(0);
        marginVertical.value = withTiming(0);
        opacityContainer.value = withTiming(0, undefined, isFinished => {
          if (isFinished && onDismiss) {
            runOnJS(onDismiss)(id);
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
                  type === 'success'
                    ? THEME.COLORS.secondary
                    : type === 'warning'
                    ? THEME.COLORS.auxiliar_2
                    : type === 'danger' && THEME.COLORS.auxiliar_4,
              },
            ]}>
            <Icon size={32} color={THEME.COLORS.white} name={icon} />
          </View>
          <View style={STYLES.messageContent}>
            <Text style={STYLES.message}>{message}</Text>
            <Text style={STYLES.date}>{currentDate}</Text>
          </View>
        </Animated.View>
      </PanGestureHandler>
      <Animated.View style={[rIconContainerStyle, STYLES.iconContainer]}>
        <Icon name="trash-alt" color={THEME.COLORS.auxiliar_4} size={32} />
      </Animated.View>
    </Animated.View>
  );
};

export default ListItem;

const STYLES = StyleSheet.create({
  container: {
    width: THEME.SIZES.width - THEME.SIZES.margin,
    alignSelf: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    // flex: 1,
    // marginBottom: THEME.SIZES.margin,
  },
  list: {
    // borderWidth: 1,

    width: THEME.SIZES.width - THEME.SIZES.margin,
    alignSelf: 'center',
    height: LIST_ITEM_HEIGHT,
    backgroundColor: THEME.COLORS.white,
    borderRadius: THEME.SIZES.borders,
    padding: THEME.SIZES.padding,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    shadowColor: THEME.COLORS.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },

  icon: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: THEME.SIZES.margin / 2,
  },
  messageContent: {
    width: THEME.SIZES.width - 70 * 2 + 7.5,
  },
  message: {
    color: THEME.COLORS.black,
    fontFamily: THEME.FONTS.medium,
    fontSize: THEME.SIZES.body2,
  },
  date: {
    color: THEME.COLORS.darkGray,
    fontFamily: THEME.FONTS.regular,
    fontSize: THEME.SIZES.body3,
    marginTop: THEME.SIZES.margin / 2,
  },

  iconContainer: {
    height: LIST_ITEM_HEIGHT,
    width: LIST_ITEM_HEIGHT,
    position: 'absolute',
    right: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
