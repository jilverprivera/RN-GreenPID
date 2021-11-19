import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {COLORS} from '../constants';

import {DrawerMenu} from '../components/ui/drawerMenu';

import TemperatureScreen from '../screens/private/drawer/TemperatureScreen';
import HumidityScreen from '../screens/private/drawer/HumidityScreen';
import CarbonoScreen from '../screens/private/drawer/CarbonoScreen';
import LuminosityScreen from '../screens/private/drawer/LuminosityScreen';
import ControlScreen from '../screens/private/drawer/ConfigurationScreen';
import {drawerMenu} from '../styles/drawer.styles';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerType="slide"
      overlayColor="rgba(0,0,0,0.3)"
      drawerStyle={drawerMenu.globalStyle}
      sceneContainerStyle={{backgroundColor: COLORS.white}}
      initialRouteName="Configuration"
      drawerContent={props => <DrawerMenu {...props} />}>
      <Drawer.Screen name="Temperature" component={TemperatureScreen} />
      <Drawer.Screen name="Humidity" component={HumidityScreen} />
      <Drawer.Screen name="Carbono" component={CarbonoScreen} />
      <Drawer.Screen name="Luminosity" component={LuminosityScreen} />
      <Drawer.Screen name="Configuration" component={ControlScreen} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
