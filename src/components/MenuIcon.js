import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {THEME} from '../styles/Theme';
import {layout} from '../styles/Layout';

const MenuIcon = ({title, icon, route, items}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={layout.iconContainer}
      onPress={() => navigation.navigate(route)}>
      <View style={title ? layout.menuButton : layout.altMenuButton}>
        <Icon size={32} name={icon} color={THEME.COLORS.primary} />
      </View>
      {title && <Text style={layout.menuButtonText}>{title}</Text>}
    </TouchableOpacity>
  );
};

export default MenuIcon;
