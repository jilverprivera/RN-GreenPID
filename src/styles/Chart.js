import {StyleSheet} from 'react-native';

import {THEME} from './Theme';

export const chart = StyleSheet.create({
  chartContainer: {
    width: THEME.SIZES.width,
    paddingHorizontal: 16,
  },
  chartActivityIndicator: {
    alignItems: 'center',
    justifyContent: 'center',
    width: THEME.SIZES.width,
    height: THEME.SIZES.width,
  },

  informationContainer: {
    width: THEME.SIZES.width - 64,
    paddingHorizontal: 0,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: THEME.SIZES.margin,
  },
  informationTitle: {
    fontSize: THEME.SIZES.body2,
    fontFamily: THEME.FONTS.medium,
    color: THEME.COLORS.secondary,
    marginBottom: THEME.SIZES.margin / 2,
  },
  informationContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  informationText: {
    fontSize: THEME.SIZES.body3,
    fontFamily: THEME.FONTS.regular,
    color: THEME.COLORS.secondary,
  },
  lastValue: {
    fontSize: THEME.SIZES.heading1,
    fontFamily: THEME.FONTS.semibold,
    color: THEME.COLORS.secondary,
  },
  extraHeader: {
    width: THEME.SIZES.width - 64,
    paddingHorizontal: 0,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: THEME.SIZES.margin / 2,
  },
  extraTitle: {
    fontSize: THEME.SIZES.body2,
    fontFamily: THEME.FONTS.medium,
    color: THEME.COLORS.secondary,
    paddingLeft: 16,
  },
  extraIconContainer: {
    width: 48,
    height: 48,
    borderRadius: THEME.SIZES.borders,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  extraInformation: {
    paddingHorizontal: 16,
  },
  valueText: {
    fontSize: THEME.SIZES.heading2,
    fontFamily: THEME.FONTS.medium,
    color: THEME.COLORS.secondary,
  },
});
