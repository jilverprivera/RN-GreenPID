import {StyleSheet} from 'react-native';

import {THEME} from './Theme';

export const core = StyleSheet.create({
  screenTitle: {
    fontSize: THEME.SIZES.heading2,
    fontFamily: THEME.FONTS.medium,
    color: THEME.COLORS.secondary,
    marginBottom: THEME.SIZES.margin,
  },
  card: {
    borderRadius: THEME.SIZES.borders,
    backgroundColor: THEME.COLORS.light,
    padding: THEME.SIZES.padding,
    marginBottom: THEME.SIZES.margin / 2,
  },
  cardTitle: {
    fontSize: THEME.SIZES.heading3,
    fontFamily: THEME.FONTS.regular,
    color: THEME.COLORS.secondary,
  },
  cardVariableText: {
    marginHorizontal: THEME.SIZES.margin / 2,
    marginTop: THEME.SIZES.margin / 2,
    fontSize: THEME.SIZES.heading3,
    fontFamily: THEME.FONTS.medium,
    color: THEME.COLORS.secondary,
  },
  cardText: {
    fontSize: THEME.SIZES.body3,
    fontFamily: THEME.FONTS.regular,
    color: THEME.COLORS.secondary,
    lineHeight: 16,
  },

  cardInformationTags: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  cardInformationTag: {
    padding: THEME.SIZES.padding / 1.5,
    borderRadius: THEME.SIZES.borders,
    marginRight: THEME.SIZES.margin / 4,
    backgroundColor: THEME.COLORS.secondary,
  },
  cardInformationTagText: {
    fontSize: THEME.SIZES.body3,
    fontFamily: THEME.FONTS.regular,
    color: THEME.COLORS.light,
  },
});
