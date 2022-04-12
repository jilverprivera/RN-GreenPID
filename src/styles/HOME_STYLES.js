import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

export const HOME_STYLES = StyleSheet.create({
  header: {
    width: SIZES.width - SIZES.margin,
    height: 50,
    alignSelf: 'center',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 20,
  },
  buttonWrapper: {
    position: 'absolute',
    right: 0,
    width: 110,
    height: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  button: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
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
    // marginBottom: SIZES.margin * 2,
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
});
