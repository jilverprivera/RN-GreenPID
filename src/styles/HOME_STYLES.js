import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

export const HOME_STYLES = StyleSheet.create({
  header: {
    width: SIZES.width - SIZES.margin * 2,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: SIZES.margin * 1.5,
    marginBottom: SIZES.margin * 0.75,
  },
  welcomeMessage: {
    fontSize: SIZES.heading1,
    fontFamily: FONTS.medium,
    color: COLORS.black,
    marginBottom: SIZES.margin / 4,
  },

  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },

  wrapper: {
    backgroundColor: COLORS.white,
  },

  msgWrapper: {
    width: SIZES.width - SIZES.margin,
    alignSelf: 'center',
    marginBottom: 5,
  },
  msg: {
    fontSize: SIZES.heading3,
    fontFamily: FONTS.medium,
    color: COLORS.black,
  },
  msg2: {
    fontSize: SIZES.body3,
    fontFamily: FONTS.regular,
    color: COLORS.black,
    marginLeft: SIZES.margin,
    marginBottom: SIZES.margin / 3,
  },

  bottomSheet: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    // borderWidth: 2,
  },
  sheetBtnWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
  },
  closeSheetBtn: {
    width: 50,
    borderWidth: 2,
    borderColor: COLORS.darkGray,
    borderRadius: 3,
  },
  chartTitle: {
    textAlign: 'center',
    marginTop: SIZES.margin,
    fontSize: SIZES.heading2,
    color: COLORS.black,
    fontFamily: FONTS.medium,
  },

  chartContainer: {
    width: SIZES.width,
    alignItems: 'center',
    justifyContent: 'center',
    height: SIZES.width - SIZES.margin * 2.5,
  },

  detailsBtn: {
    marginTop: SIZES.margin * 1.5,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: COLORS.primary,
    width: SIZES.width - SIZES.margin * 2,
    borderRadius: SIZES.borders,
  },
  detailsBtnText: {
    textAlign: 'center',
    fontSize: SIZES.body1,
    color: COLORS.background,
    fontFamily: FONTS.medium,
  },
});
