import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {ThemeContext} from '../context/ThemeContext';

const TabButton = props => {
  const {colorScheme, tw} = useContext(ThemeContext);
  const {onPress, item, accessibilityState} = props;
  const focused = accessibilityState.selected;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        ...tw`flex-1 flex items-center justify-center`,
      }}>
      <View>
        <Icon
          name={item.icon}
          size={24}
          color={
            colorScheme === 'dark'
              ? focused
                ? '#4f46e5'
                : '#404040'
              : colorScheme === 'light'
              ? focused
                ? '#14b8a6'
                : '#d4d4d4'
              : 'transparent'
          }
        />
      </View>
      {focused && (
        <Text
          style={tw`text-teal-500 dark:text-indigo-500 text-xs mt-1 tracking-wide`}>
          {item.label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default TabButton;

// focused ? (colorScheme === 'dark' ? '#4f46e5' : '#14b8a6') : '#d1d5db';
