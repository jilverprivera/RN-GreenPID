import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

export const configStyles = StyleSheet.create({
  cardContent: {
    width: SIZES.width * 0.9,
    backgroundColor: COLORS.white,
    alignSelf: 'center',
    shadowColor: COLORS.black,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  selectableButton: {
    alignSelf: 'center',
    width: SIZES.width * 0.9,
    padding: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.primary,
    borderRadius: 10,
  },
  selectableButtonText: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.body3,
    color: COLORS.white,
  },

  card: {
    width: SIZES.width * 0.9,
    alignSelf: 'center',
    backgroundColor: COLORS.white,
    padding: 10,
    color: COLORS.white2,
    marginBottom: 10,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: SIZES.body3,
    fontFamily: FONTS.medium,
    color: COLORS.black,
    marginVertical: 10,
  },
  cardTitleInput: {
    fontSize: SIZES.body4,
    fontFamily: FONTS.regular,
    color: COLORS.black,
  },
  cardButton: {
    backgroundColor: COLORS.secondary,
    padding: 15,
    marginVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardButtonText: {
    fontSize: SIZES.body3,
    fontFamily: FONTS.medium,
    color: COLORS.white,
  },
  cardInput: {
    backgroundColor: COLORS.white2,
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    fontSize: SIZES.body3,
    fontFamily: FONTS.regular,
  },
});
