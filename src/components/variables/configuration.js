import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ThemeContext} from '../../context/ThemeContext';

const Configuration = () => {
  const {navigate} = useNavigation();
  const {tw} = useContext(ThemeContext);
  return (
    <View style={tw`w-full mx-auto mb-5`}>
      <Text style={tw`font-bold text-xl text-neutral-900 dark:text-zinc-100`}>
        Configuración del prototipo
      </Text>

      <TouchableOpacity
        onPress={() => navigate('AutomaticConfiguration')}
        activeOpacity={0.8}
        style={tw`w-full flex flex-row items-center justify-between bg-teal-600 dark:bg-indigo-600 p-4 rounded-xl mt-5`}>
        <Text style={tw`text-base font-medium text-zinc-100`}>
          Configuración predeterminada
        </Text>
        <Icon name="cogs" size={24} color="#FAFAFA" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigate('ManualConfiguration')}
        activeOpacity={0.8}
        style={tw`w-full flex flex-row items-center justify-between bg-teal-600 dark:bg-indigo-600 p-4 rounded-xl mt-5`}>
        <Text style={tw` text-base font-medium text-zinc-100`}>
          Configuración Manual
        </Text>
        <Icon name="user-cog" size={24} color="#FAFAFA" />
      </TouchableOpacity>
    </View>
  );
};

export default Configuration;
