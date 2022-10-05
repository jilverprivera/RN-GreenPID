import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {ThemeContext} from '../../context/ThemeContext';

const GoBackBtn = () => {
  const navigation = useNavigation();
  const {tw} = useContext(ThemeContext);
  return (
    <View style={tw`w-11/12 mx-auto my-6`}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.goBack()}
        style={tw`w-11 h-11 flex items-center justify-center bg-violet-400 rounded-xl`}>
        <Icon size={24} name="angle-left" color="#FAFAFA" />
      </TouchableOpacity>
    </View>
  );
};

export default GoBackBtn;
