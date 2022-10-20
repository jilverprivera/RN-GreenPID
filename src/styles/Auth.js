import {StyleSheet} from 'react-native';

import {THEME} from './Theme';

export const auth = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: THEME.SIZES.margin * 2,
  },
  title: {
    fontSize: THEME.SIZES.heading2,
    color: THEME.COLORS.secondary,
    fontFamily: THEME.FONTS.semibold,
    marginBottom: THEME.SIZES.margin / 2,
  },
  subTitle: {
    fontSize: THEME.SIZES.heading3,
    color: THEME.COLORS.secondary,
    fontFamily: THEME.FONTS.medium,
  },
  inputContainer: {
    marginTop: THEME.SIZES.margin * 2,
  },
  text: {
    fontSize: THEME.SIZES.body3,
    color: THEME.COLORS.secondary,
    fontFamily: THEME.FONTS.medium,
  },
});
