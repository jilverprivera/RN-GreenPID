import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

export const drawerMenu = StyleSheet.create({
  globalStyle: {flex: 1, width: '70%', backgroundColor: COLORS.primary},
  container: {flex: 1, width: '90%', alignSelf: 'center'},
  appIconWrapper: {
    marginVertical: 30,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  appIcon: {width: 70, height: 70, borderRadius: 40, marginRight: 10},
  appName: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.h2,
    color: COLORS.white,
    letterSpacing: 3,
  },
  routeButton: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'center',
  },
  iconWrapper: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginRight:5,
  },
  routeText: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.body4,
    color: COLORS.white,
  },
});
