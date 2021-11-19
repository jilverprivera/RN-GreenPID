import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

export const globals = StyleSheet.create({
  container: {
    flex: 1,
    width: SIZES.width,
    alignSelf: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    backgroundColor: COLORS.white,
  },
});

export const header = StyleSheet.create({
  container: {
    width: SIZES.width * 0.9,
    marginVertical: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white2,
    padding: 15,
    // borderWidth: 1,
    borderRadius: 10,
  },

  iconButton: {
    position: 'absolute',
    left: 15,
  },
  headerText: {
    fontSize: SIZES.body2,
    color: COLORS.black,
    fontFamily: FONTS.medium,
  },
});
