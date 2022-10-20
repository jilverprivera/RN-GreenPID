import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const THEME = {
  COLORS: {
    primary: '#DCE3EA',
    secondary: '#1E1E1E',
    light: '#FFFFFF',
    danger: '#EF4444',
  },
  FONTS: {
    regular: 'MavenPro-Regular',
    medium: 'MavenPro-Medium',
    semibold: 'MavenPro-SemiBold',
    bold: 'MavenPro-Bold',
  },
  SIZES: {
    width,
    height,
    margin: 24,
    padding: 12,
    borders: 6,

    heading1: 32,
    heading2: 24,
    heading3: 16,
    heading4: 14,
    heading5: 12,

    body1: 18,
    body2: 16,
    body3: 14,
    body4: 12,
    body5: 10,
  },
};
