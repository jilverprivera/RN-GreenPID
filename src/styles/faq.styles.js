import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

export const FAQStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: SIZES.width * 0.9,
    alignSelf: 'center',
  },

  card: {
    width: '100%',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 15,
    marginVertical: 10,
    backgroundColor: COLORS.white,
    color: COLORS.white2,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.7,
    shadowRadius: 1,
    elevation: 6,
  },
  iconCard: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
    borderRadius: 25,
    backgroundColor: COLORS.lightGray,
  },
  textCard: {
    fontFamily: FONTS.medium,
    letterSpacing:1,
    fontSize: SIZES.body3,
    color: COLORS.black
  },
});
