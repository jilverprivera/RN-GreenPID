import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import FAQScreen from '../screens/private/FAQScreen';
// import HomeScreen from '../screens/private/HomeScreen';
import ConfigurationScreen from '../screens/private/ProfileScreen';
import {COLORS} from '../constants';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import DrawerNavigation from './DrawerNavigation';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.9}
    style={styles.customButton}>
    <View style={styles.buttonContainer}>{children}</View>
  </TouchableOpacity>
);

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {...styles.tabContent},
        tabBarIcon: ({focused}) => {
          let iconName = '';
          switch (route.name) {
            case 'FAQ':
              iconName = 'book-outline';
              break;

            case 'Profile':
              iconName = 'person-circle-outline';
              break;
          }
          return (
            <Ionicons
              name={iconName}
              size={30}
              color={focused ? COLORS.secondary : COLORS.black}
            />
          );
        },
      })}>
      <Tab.Screen name="FAQ" component={FAQScreen} />
      <Tab.Screen
        name="Home"
        component={DrawerNavigation}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="home-outline"
              size={30}
              color={focused ? COLORS.white : COLORS.black}
            />
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen name="Profile" component={ConfigurationScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  tabContent: {
    height: 60,
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    borderRadius: 10,
  },
  customButton: {
    top: -20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: COLORS.secondary,
    color: COLORS.white2,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.5,
    elevation: 6,
  },
});
