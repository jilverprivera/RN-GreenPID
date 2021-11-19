import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {drawerMenu} from '../../styles/drawer.styles';

import {COLORS} from '../../constants';

const Screens = [
  {icon: 'settings-outline', name: 'Configuración', route: 'Configuration'},
  {icon: 'speedometer-outline', name: 'Dióxido de carbono', route: 'Carbono'},
  {icon: 'bulb-outline', name: 'Luminosidad', route: 'Luminosity'},
  {icon: 'cloud-outline', name: 'Humedad relativa', route: 'Humidity'},
  {icon: 'thermometer-outline', name: 'Temperatura', route: 'Temperature'},
];

export const DrawerMenu = ({navigation}) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={drawerMenu.container}>
      <View style={drawerMenu.appIconWrapper}>
        <Image
          source={{
            uri: 'https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif',
          }}
          style={drawerMenu.appIcon}
        />
        <Text style={drawerMenu.appName}>GreenPID</Text>
      </View>
      <View>
        {Screens.map(screen => (
          <TouchableOpacity
            key={screen.route}
            style={drawerMenu.routeButton}
            activeOpacity={0.7}
            onPress={() => navigation.navigate(screen.route)}>
            <View style={drawerMenu.iconWrapper}>
              <Ionicons name={screen.icon} size={30} color={COLORS.white} />
            </View>
            <Text style={drawerMenu.routeText}>{screen.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </DrawerContentScrollView>
  );
};
