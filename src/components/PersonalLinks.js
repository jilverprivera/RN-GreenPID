import React from 'react';
import {Linking, StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {COLORS} from '../constants';

const data = [
  {id: 1, url: 'https://github.com/jilverprivera', iconName: 'github'},
  {id: 2, url: 'www.linkedin.com/in/jilverprivera', iconName: 'linkedin'},
  {
    id: 3,
    url: 'https://www.instagram.com/jilverprivera',
    iconName: 'instagram',
  },
  {id: 4, url: 'https://twitter.com/Jilverprivera', iconName: 'twitter'},
];
const PersonalLinks = () => {
  return (
    <View style={STYLES.container}>
      {data.map(item => (
        <TouchableOpacity
          activeOpacity={0.7}
          style={STYLES.icon}
          key={item.id}
          onPress={() => Linking.openURL(item.url)}>
          <Icon name={item.iconName} size={32} color={COLORS.black} />
        </TouchableOpacity>
      ))}
    </View>
  );
};
export default PersonalLinks;

const STYLES = StyleSheet.create({
  container: {flexDirection: 'row'},
  icon: {marginTop: 10, marginRight: 20},
});
