import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

export const AUTH_STYLES = StyleSheet.create({
  title: {
    color: COLORS.black,
    fontSize: SIZES.heading1,
    fontFamily: FONTS.semibold,
  },
  subTitle: {
    color: COLORS.black,
    fontSize: SIZES.heading3,
    fontFamily: FONTS.regular,
  },
  wrapper: {
    alignSelf: 'center',
    width: SIZES.width - SIZES.margin * 2,
    marginTop: SIZES.margin * 5,
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  keyboardContent: {
    alignSelf: 'center',
    width: SIZES.width - SIZES.margin * 2,
    marginTop: SIZES.margin * 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn2: {
    width: SIZES.width - SIZES.margin * 2,
  },
  btn: {
    width: SIZES.width - SIZES.margin * 2,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: SIZES.padding * 1.25,
    marginTop: 15,
    borderRadius: SIZES.borders,
  },
  altBtn: {borderColor: COLORS.primary, borderWidth: 2},
  btnText: {
    color: COLORS.white,
    fontFamily: FONTS.medium,
    fontSize: SIZES.body1,
  },
});
