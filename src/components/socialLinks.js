import React from 'react';
import {Linking, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../constants';

const data = [
  {id: 1, url: 'https://github.com/jilverprivera', iconName: 'logo-github'},
  {id: 2, url: 'www.linkedin.com/in/jilverprivera', iconName: 'logo-linkedin'},
  {
    id: 3,
    url: 'https://www.instagram.com/jilverprivera',
    iconName: 'logo-instagram',
  },
  {id: 4, url: 'https://twitter.com/Jilverprivera', iconName: 'logo-twitter'},
];
export const SocialLinks = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      {data.map(data => (
        <TouchableOpacity
          activeOpacity={0.8}
          style={{marginTop: 10, marginHorizontal: 10}}
          key={data.id}
          onPress={() => Linking.openURL(data.url)}>
          <Ionicons name={data.iconName} size={30} color={COLORS.white} />
        </TouchableOpacity>
      ))}
    </View>
  );
};
