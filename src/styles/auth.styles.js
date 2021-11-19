import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

export const authStyle = StyleSheet.create({
  title: {
    position: 'absolute',
    top: 15,
    left: 0,
    width: '100%',

    textAlign: 'center',
    fontSize: SIZES.h1,
    fontFamily: FONTS.semibold,
    color: COLORS.white,
  },
  wrapper: {
    width: SIZES.width,
    alignSelf: 'center',
    marginTop: 75,
    borderTopLeftRadius: 100,
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  keyboardContent: {
    width: SIZES.width,
    alignSelf: 'center',
    marginTop: 75,
    borderTopLeftRadius: 100,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  inputWrapper: {
    width: '100%',
  },
  inputText: {
    width: '100%',
    fontSize: SIZES.body3,
    fontFamily: FONTS.medium,
    color: COLORS.black,
    marginVertical: 5,
  },
  textInput: {
    width: '100%',
    backgroundColor: COLORS.white2,
    padding: 10,
    borderRadius: 10,
    marginVertical: 0,
    fontSize: SIZES.body3,
    fontFamily: FONTS.regular,
    color: COLORS.black,
  },
  authButton: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    padding: 12,
    marginTop: 15,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  authButtonText: {
    color: COLORS.white,
    fontFamily: FONTS.semibold,
    fontSize: SIZES.body2,
  },
});
