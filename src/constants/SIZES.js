import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
export const SIZES = {
  // GLOBAL
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  padding2: 36,

  // FONT-SIZES
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,

  // APP DIMESIONS
  width,
  height,
};
