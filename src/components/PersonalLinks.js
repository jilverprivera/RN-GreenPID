import React from 'react';
import {Linking, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import NETWORKS from '../data/NETWORKS.json';

import {THEME} from '../styles/Theme';
import {core} from '../styles/Core';

const PersonalLinks = () => {
  return (
    <View style={core.linkContainer}>
      {NETWORKS.map((item, index) => (
        <TouchableOpacity
          activeOpacity={0.7}
          style={core.linkIcon}
          key={index}
          onPress={() => Linking.openURL(item.url)}>
          <Icon name={item.iconName} size={32} color={THEME.COLORS.secondary} />
        </TouchableOpacity>
      ))}
    </View>
  );
};
export default PersonalLinks;
