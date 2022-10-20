import {StyleSheet} from 'react-native';

import {THEME} from './Theme';

export const layout = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: THEME.COLORS.secondary,
  },
  drawerStyle: {
    flex: 1,
    width: 100,
    backgroundColor: 'transparent',
  },
  drawerSceneContainer: {
    backgroundColor: 'transparent',
  },
  contentContainerStyle: {
    flex: 1,
  },

  menuContainer: {
    flex: 1,
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 36,
  },

  menuWrapper: {
    paddingVertical: 0,
  },

  toggleDrawer: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: THEME.SIZES.margin,
  },

  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },

  menuButton: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: THEME.COLORS.primary,
  },
  altMenuButton: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuButtonText: {
    fontSize: THEME.SIZES.body4,
    marginTop: THEME.SIZES.margin / 4,
    color: THEME.COLORS.primary,
  },
  bottomDrawerContent: {position: 'absolute', bottom: 0},

  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.primary,
    width: THEME.SIZES.width,
    paddingHorizontal: THEME.SIZES.margin,
    paddingTop: THEME.SIZES.margin,
    overflow: 'hidden',
  },

  altContainer: {
    paddingHorizontal: 32,
  },

  bottomSheetView: {
    backgroundColor: THEME.COLORS.primary,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: THEME.SIZES.borders * 3,
    overflow: 'hidden',
    paddingHorizontal: THEME.SIZES.padding * 2,
  },

  bottomSheetTitle: {
    textAlign: 'center',
    marginTop: THEME.SIZES.margin,
    marginBottom: THEME.SIZES.margin / 2,
    fontSize: THEME.SIZES.heading3,
    color: THEME.COLORS.secondary,
  },
  openerBottomSheet: {
    position: 'absolute',
    bottom: 0,
    width: THEME.SIZES.width,
    padding: THEME.SIZES.padding,
  },
  bottomSheetButton: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    width: THEME.SIZES.width,
    top: 0,
    height: 24,
  },
  bottomSheetButtonView: {
    borderRadius: THEME.SIZES.borders,
    alignSelf: 'center',
    width: THEME.SIZES.width * 0.25,
    height: 4,
    backgroundColor: THEME.COLORS.secondary,
  },

  text: {
    fontSize: THEME.SIZES.body3,
    marginTop: THEME.SIZES.margin / 4,
    color: THEME.COLORS.secondary,
    lineHeight: THEME.SIZES.body3 * 1.5,
  },
});
