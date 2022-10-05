import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {ThemeContext} from '../context/ThemeContext';

const ProcessVariablesButtons = () => {
  const {tw} = useContext(ThemeContext);
  const {navigate} = useNavigation();

  return (
    <View style={tw`mb-6`}>
      <Text
        style={tw`text-lg text-neutral-900 dark:text-neutral-50 font-medium mb-3`}>
        Configuración de variables
      </Text>

      <TouchableOpacity
        onPress={() => navigate('ManualScreen')}
        activeOpacity={0.8}
        style={tw`flex flex-row items-center justify-between bg-violet-600 dark:bg-violet-500 h-14 px-6 rounded-xl mb-3`}>
        <Text style={tw`text-base text-neutral-50`}>Control Manual</Text>
        <View style={tw`flex items-center justify-center`}>
          <Icon name="user-cog" size={24} color={'#FAFAFA'} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigate('PredefinedScreen')}
        activeOpacity={0.8}
        style={tw`flex flex-row items-center justify-between bg-violet-600 dark:bg-violet-500 h-14 px-6 rounded-xl`}>
        <Text style={tw`text-base text-neutral-50`}>Control Predefinido</Text>
        <View style={tw` flex items-center justify-center`}>
          <Icon name="sliders-h" size={24} color={'#FAFAFA'} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProcessVariablesButtons;
