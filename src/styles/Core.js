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

  animatedImageContainer: {zIndex: 50, flex: 1},
  animatedImage: {
    alignSelf: 'center',
    width: '100%',
    height: THEME.SIZES.width,
    resizeMode: 'contain',
  },

  controlView: {
    alignSelf: 'center',
    width: '100%',
    marginTop: THEME.SIZES.margin / 2,
  },
  pageTitle: {
    fontSize: THEME.SIZES.body1,
    alignSelf: 'center',
    fontFamily: THEME.FONTS.semibold,
    color: THEME.COLORS.secondary,
    marginBottom: THEME.SIZES.margin,
  },
  changesButton: {
    width: '100%',
    alignSelf: 'center',
    padding: THEME.SIZES.padding * 1.5,
    marginTop: THEME.SIZES.margin / 2,
    borderRadius: THEME.SIZES.borders,
    backgroundColor: THEME.COLORS.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  changesText: {
    fontSize: THEME.SIZES.body2,
    fontFamily: THEME.FONTS.medium,
    color: THEME.COLORS.light,
  },

  inputContent: {
    width: '100%',
    marginBottom: THEME.SIZES.margin / 2,
  },
  inputText: {
    fontSize: THEME.SIZES.body3,
    fontFamily: THEME.FONTS.regular,
    color: THEME.COLORS.secondary,
    marginBottom: THEME.SIZES.margin / 4,
  },
  input: {
    width: '100%',
    marginBottom: THEME.SIZES.margin / 2,
    borderRadius: THEME.SIZES.borders,
    backgroundColor: THEME.COLORS.light,
    fontSize: THEME.SIZES.body3,
    fontFamily: THEME.FONTS.medium,
    color: THEME.COLORS.secondary,
    paddingHorizontal: THEME.SIZES.padding,
  },

  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: THEME.SIZES.margin / 2,
  },
  linkIcon: {
    marginRight: THEME.SIZES.margin,
  },
});
