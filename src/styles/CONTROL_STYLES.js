import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

export const CONTROL = StyleSheet.create({
  stepContainer: {
    marginVertical: SIZES.margin,
  },
  btn: {
    width: SIZES.width - SIZES.margin,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: SIZES.padding * 1.25,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.borders,
    marginTop: SIZES.margin * 2,
  },
  btnText: {
    color: COLORS.white,
    fontfamily: FONTS.semibold,
    fontSize: SIZES.body1,
  },
});
