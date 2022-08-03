import React, {useContext} from 'react';
import {Linking, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {ThemeContext} from '../context/ThemeContext';

import NETWORKS from '../data/NETWORKS.json';

const PersonalLinks = () => {
  const {tw, colorScheme} = useContext(ThemeContext);
  return (
    <View style={tw`flex flex-row`}>
      {NETWORKS.map((item, index) => (
        <TouchableOpacity
          activeOpacity={0.7}
          style={tw`mr-5 mt-2`}
          key={index}
          onPress={() => Linking.openURL(item.url)}>
          <Icon
            name={item.iconName}
            size={32}
            color={colorScheme === 'dark' ? '#FFF' : '#000'}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};
export default PersonalLinks;
