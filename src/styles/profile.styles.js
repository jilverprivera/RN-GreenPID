import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

export const profileStyles = StyleSheet.create({
  userInformation: {
    width: '100%',
    backgroundColor: COLORS.white2,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 40,
  },
  title: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.h4,
    color: COLORS.black,
    opacity: 0.8,
  },
  description: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.body3,
    color: COLORS.black,
    marginBottom: 10,
  },

  informationWrapper: {
    width: SIZES.width * 0.9,
    marginBottom: 40,
  },

  titleWrapper: {
    backgroundColor: COLORS.white2,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  lastValueTitle: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.body3,
    color: COLORS.black,
  },

  lastInfoWrapper: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 5,
    paddingHorizontal: 10,
  },

  logOutButton: {
    width: '90%',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: COLORS.danger,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logOutText: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.body2,
    color:  COLORS.white
  },
});
