import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  InformationScreen,
  UserManualScreen,
  SettingScreen,
} from '../screens/private';
import {COLORS, SIZES} from '../constants';

import Icon from 'react-native-vector-icons/FontAwesome5';

const TabArr = [
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

  // {
  //   route: 'informationScreen',
  //   label: 'Información',
  //   icon: 'info-circle',
  //   component: InformationScreen,
  //   color: COLORS.primary,
  //   alphaClr: COLORS.black,
  // },
];

const TabButton = ({item, onPress, accessibilityState}) => {
  const focused = accessibilityState.selected;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={STYLES.container}>
      <View>
        <View style={STYLES.btn}>
          <Icon
            size={24}
            name={item.icon}
            color={focused ? COLORS.black : COLORS.lightGray}
          />
          {focused && <Text style={STYLES.text}>{item.label}</Text>}
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
        tabBarStyle: {...STYLES.tabContent},
      })}>
      {TabArr.map((item, index) => {
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
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  tabContent: {
    height: 70,
    position: 'absolute',
    bottom: SIZES.margin / 2,
    left: SIZES.margin / 2,
    right: SIZES.margin / 2,
    borderRadius: SIZES.borders,
  },
  btn: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: SIZES.padding / 1.2,
    borderRadius: SIZES.borders,
    // marginRight: SIZES.margin * 2,
  },
  text: {
    // paddingLeft: SIZES.padding / 2,
    color: COLORS.black,
    fontSize: SIZES.body4,
  },
});
