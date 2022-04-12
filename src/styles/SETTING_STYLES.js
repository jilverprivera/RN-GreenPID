import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

export const SETTING_STYLES = StyleSheet.create({
  title: {
    fontSize: SIZES.heading3,
    fontFamily: FONTS.semibold,
    color: COLORS.black,
    marginBottom: SIZES.margin,
    marginHorizontal: SIZES.margin,
  },
  userName: {
    fontSize: SIZES.body1,
    fontFamily: FONTS.semibold,
    color: COLORS.black,
    textAlign: 'center',
  },

  idWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  id: {fontSize: SIZES.body3, fontFamily: FONTS.light, color: COLORS.black},

  logOutBtn: {
    borderWidth: 2,
    borderColor: COLORS.auxiliar_4,
    padding: SIZES.padding,
    borderRadius: SIZES.borders,
    width: SIZES.width / 2,
    alignSelf: 'center',
    marginTop: SIZES.margin,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logOutBtnText: {
    fontSize: SIZES.body1,
    marginLeft: SIZES.margin,
    fontFamily: FONTS.semibold,
    color: COLORS.auxiliar_4,
  },
});
