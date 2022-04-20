import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  NotificationScreen,
  UserManualScreen,
  SettingScreen,
} from '../screens/private';
import {COLORS, SIZES} from '../constants';

import Icon from 'react-native-vector-icons/FontAwesome5';

const tabScreens = [
  {
    route: 'homeScreen',
    label: 'Inicio',
    icon: 'th-large',
    component: HomeScreen,
    color: COLORS.primary,
    alphaClr: COLORS.black,
  },
  {
    route: 'userManualsScreen',
    label: 'Manuales',
    icon: 'book',
    component: UserManualScreen,
    color: COLORS.primary,
    alphaClr: COLORS.black,
  },
  {
    route: 'settingsScreen',
    label: 'Configuración',
    icon: 'user-cog',
    component: SettingScreen,
    color: COLORS.primary,
    alphaClr: COLORS.black,
  },

  {
    route: 'notificationScreen',
    label: 'Notificaciones',
    icon: 'bell',
    component: NotificationScreen,
    color: COLORS.primary,
    alphaClr: COLORS.black,
  },
];

const TabButton = ({item, onPress, accessibilityState}) => {
  const focused = accessibilityState.selected;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={STYLES.buttonContainer}>
      <View>
        <View style={STYLES.icon}>
          <Icon
            size={24}
            name={item.icon}
            color={focused ? COLORS.black : COLORS.lightGray}
          />
          {focused && <View style={STYLES.dot} />}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="homeScreen"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {...STYLES.tab},
      })}>
      {tabScreens.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: props => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default TabNavigation;

const STYLES = StyleSheet.create({
  tab: {
    height: 70,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: SIZES.borders,
    borderTopRightRadius: SIZES.borders,
    borderTopWidth: 0,
    elevation: 0,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 5,
    backgroundColor: COLORS.black,
    marginTop: SIZES.margin / 4,
  },
});
