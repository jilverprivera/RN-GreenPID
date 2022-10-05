import React, {useContext} from 'react';
import {Switch, Text, View} from 'react-native';
import {ThemeContext} from '../../context/ThemeContext';

const DarkMode = () => {
  const {tw, colorScheme, toggleColorScheme} = useContext(ThemeContext);

  return (
    <View style={tw`w-full flex flex-row items-center justify-between mt-2`}>
      <Text style={tw`text-lg text-neutral-900 dark:text-neutral-50`}>
        Modo Oscuro
      </Text>
      <Switch
        trackColor={{false: '#71717a', true: '#4f46e5'}}
        thumbColor={colorScheme === 'dark' ? '#fafafa' : '#fafafa'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleColorScheme}
        value={colorScheme === 'dark' ? true : false}
      />
    </View>
  );
};

export default DarkMode;
