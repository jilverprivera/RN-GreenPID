import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import MenuIcon from './MenuIcon';
import DrawerRoutes from '../routes/drawerRoutes.json';

import {THEME} from '../styles/Theme';
import {layout} from '../styles/Layout';

const DrawerMenu = () => {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={layout.contentContainerStyle}>
      <View style={layout.menuContainer}>
        <View style={layout.menuWrapper}>
          {DrawerRoutes.map((route, i) => (
            <TouchableOpacity
              activeOpacity={0.8}
              style={layout.iconContainer}
              onPress={() => navigation.navigate('Detail', route)}
              key={i}>
              <View
                style={route.title ? layout.menuButton : layout.altMenuButton}>
                <Icon
                  size={32}
                  name={route.icon}
                  color={THEME.COLORS.primary}
                />
              </View>
              {route.title && (
                <Text style={layout.menuButtonText}>{route.title}</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>

        <View style={layout.bottomDrawerContent}>
          <MenuIcon icon="project-diagram" route="Home" />
          <MenuIcon icon="readme" route="Information" />
          <MenuIcon icon="cogs" route="Home" />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerMenu;
