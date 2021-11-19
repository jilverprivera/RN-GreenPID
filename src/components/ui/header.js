import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../constants';
import {header} from '../../styles/globals';

const Header = ({toggleDrawer, title}) => {
  return (
    <View style={header.container}>
      <TouchableOpacity
        onPress={() => toggleDrawer()}
        style={header.iconButton}>
        <Ionicons name="grid-outline" size={30} color={COLORS.black} />
      </TouchableOpacity>
      <Text style={header.headerText}>{title}</Text>
    </View>
  );
};

export default Header;
