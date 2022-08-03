import React, {useContext} from 'react';
import {Text, TextInput, View} from 'react-native';

import {ThemeContext} from '../../context/ThemeContext';

const Input = ({
  text,
  onChange,
  keyboardType,
  valueType,
  secureText,
  placeholder,
}) => {
  const {tw, colorScheme} = useContext(ThemeContext);
  return (
    <View style={tw`w-full mb-4`}>
      {text && (
        <Text
          style={tw`w-full text-base font-normal text-neutral-900 dark:text-zinc-100 mb-2`}>
          {text}
        </Text>
      )}
      <TextInput
        style={tw`w-full p-4 bg-white dark:bg-zinc-900 rounded-xl text-base text-zinc-900 dark:text-zinc-100`}
        placeholderTextColor={colorScheme === 'dark' ? '#FFF' : '#DDD'}
        placeholder={placeholder}
        secureTextEntry={secureText}
        keyboardType={keyboardType}
        onChangeText={value => onChange(value, valueType)}
      />
    </View>
  );
};

export default Input;
