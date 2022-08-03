import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

export const GRAPH = StyleSheet.create({
  current: {
    marginVertical: SIZES.margin,
    backgroundColor: COLORS.white,
    width: SIZES.width - SIZES.margin * 2,
    paddingVertical: SIZES.padding,
    alignSelf: 'center',
    borderRadius: SIZES.borders,

    alignItems: 'center',
    justifyContent: 'center',
  },

  chartText: {
    fontFamily: FONTS.semibold,
    fontSize: SIZES.heading2,
    color: COLORS.black,
    textAlign: 'center',
  },
  variableText: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.heading3,
    color: COLORS.black,
  },
  lastValue: {
    fontFamily: FONTS.semibold,
    fontSize: SIZES.heading1,
    color: COLORS.black,
  },
  graphContainer: {
    alignSelf: 'center',
    width: SIZES.width - SIZES.margin,
    height: SIZES.width - SIZES.margin * 2,
    marginTop: SIZES.margin,
    paddingBottom: SIZES.padding * 3,
    alignItems: 'center',
    justifyContent: 'center',
  },

  pdfButton: {
    width: SIZES.width - SIZES.margin * 2,
    alignSelf: 'center',
    padding: SIZES.padding,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: SIZES.borders,
  },
  pdfText: {
    fontFamily: FONTS.semibold,
    fontSize: SIZES.body1,
    color: COLORS.white,
  },
  iconContainer: {
    width: 48,
    height: 48,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.borders,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
