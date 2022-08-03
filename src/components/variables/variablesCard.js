import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {DarkTheme, LightTheme} from '../../config/LinearGradientColors';
import {ThemeContext} from '../../context/ThemeContext';

const VariablesCard = ({name, icon, color, route}) => {
  const {navigate} = useNavigation();
  const {tw, colorScheme} = useContext(ThemeContext);
  return (
    <TouchableOpacity onPress={() => navigate(route)} activeOpacity={0.8}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0.5, y: 1}}
        colors={[...color]}
        style={tw`w-48 h-52 mx-4 last:mr-0 rounded-3xl p-1.5 flex items-center justify-center`}>
        <LinearGradient
          colors={colorScheme === 'dark' ? DarkTheme : LightTheme}
          start={{x: 0, y: 0}}
          end={{x: 1.5, y: 1}}
          style={tw`w-full h-full rounded-2xl bg-white dark:bg-zinc-800 p-3`}>
          <Text
            style={tw`text-neutral-900 dark:text-zinc-100 text-lg text-center`}>
            {name}
          </Text>
          <Icon
            name={icon}
            size={24}
            color={colorScheme === 'dark' ? '#fff' : '#000'}
          />
        </LinearGradient>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default VariablesCard;
