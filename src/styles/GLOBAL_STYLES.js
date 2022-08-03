import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

export const GLOBAL_STYLES = StyleSheet.create({
  screenContainer: {
    flex: 1,
    width: SIZES.width,
    backgroundColor: COLORS.background,
    position: 'relative',
  },
  screenWrapper: {
    flex: 1,
    width: SIZES.width - SIZES.margin * 2,
    alignSelf: 'center',
  },

  headerContainer: {
    position: 'relative',
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    width: SIZES.width - SIZES.margin * 2,
    marginTop: SIZES.margin / 2,
    // marginBottom: SIZES.margin * 1.5,
    height: 50,
  },
  button: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 50,
    height: 50,
    justifyContent: 'center',
    // alignItems: 'center',
  },

  title: {
    fontSize: SIZES.heading4,
    fontFamily: FONTS.medium,
    color: COLORS.black,
  },
});
