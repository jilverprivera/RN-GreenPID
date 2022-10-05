import {StyleSheet} from 'react-native';

import {THEME} from './Theme';

export const settings = StyleSheet.create({
  cardControl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: THEME.SIZES.padding,
  },
  cardControlText: {
    fontSize: THEME.SIZES.body3,
    fontFamily: THEME.FONTS.regular,
    color: THEME.COLORS.secondary,
  },

  informationView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  informationText: {
    fontSize: THEME.SIZES.body3,
    fontFamily: THEME.FONTS.regular,
    color: THEME.COLORS.secondary,
    marginBottom: THEME.SIZES.margin / 4,
  },
  informationTextBlack: {
    fontSize: THEME.SIZES.body2,
    fontFamily: THEME.FONTS.medium,
    color: THEME.COLORS.secondary,
    marginBottom: THEME.SIZES.margin / 4,
  },

  signOutButton: {
    width: THEME.SIZES.width * 0.5,
    alignSelf: 'center',
    padding: THEME.SIZES.padding * 1.5,
    marginTop: THEME.SIZES.margin,
    borderRadius: THEME.SIZES.borders,
    backgroundColor: THEME.COLORS.danger,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signOutText: {
    fontSize: THEME.SIZES.body2,
    fontFamily: THEME.FONTS.medium,
    color: THEME.COLORS.light,
  },
  separator: {
    marginTop: THEME.SIZES.margin,
  },
});
