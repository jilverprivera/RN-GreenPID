import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

export const HOME_STYLES = StyleSheet.create({
  header: {
    width: SIZES.width - SIZES.margin,
    // height: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: SIZES.margin * 1.5,
    // borderWidth: 1,
  },
  userName: {
    fontSize: SIZES.heading2,
    fontFamily: FONTS.semibold,
    color: COLORS.black,
  },

  button: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  wrapper: {
    backgroundColor: COLORS.white,
    padding: SIZES.margin / 2,
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
  },

  flatlist: {
    width: SIZES.width,
    alignSelf: 'center',
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
    backgroundColor: COLORS.white,
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
  chartContainer: {
    width: SIZES.width,
    alignItems: 'center',
    justifyContent: 'center',
    height: SIZES.width,
  },
});
