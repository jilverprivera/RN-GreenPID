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
  menuButtonText: {fontSize: 12, color: THEME.COLORS.primary},
  bottomDrawerContent: {position: 'absolute', bottom: 0},

  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.primary,
    width: THEME.SIZES.width,
    paddingHorizontal: 32,
    paddingTop: 32,
    overflow: 'hidden',
  },

  altContainer: {
    paddingHorizontal: 32,
  },
});
