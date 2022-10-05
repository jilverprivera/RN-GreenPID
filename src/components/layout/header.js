import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {ThemeContext} from '../../context/ThemeContext';

const Header = ({title, withBack}) => {
  const {tw, colorScheme} = useContext(ThemeContext);
  const {goBack} = useNavigation();
  return (
    <View
      style={tw`w-11/12 mx-auto my-5 h-10 flex flex-row items-center justify-center relative`}>
      {withBack && (
        <TouchableOpacity
          style={tw`absolute top-0 left-0 h-10 w-10 flex items-center justify-center`}
          onPress={() => goBack()}>
          <Icon
            size={24}
            name="angle-left"
            color={colorScheme === 'dark' ? '#FFF' : '#000'}
          />
        </TouchableOpacity>
      )}

      <Text
        style={tw`text-neutral-900 dark:text-neutral-50 text-base tracking-wide font-medium`}>
        {title}
      </Text>
    </View>
  );
};

export default Header;
