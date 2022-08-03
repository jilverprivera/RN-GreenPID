import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ThemeContext} from '../context/ThemeContext';
import {DarkTheme, LightTheme} from '../config/LinearGradientColors';

import Header from '../components/layout/header';
import {AppContext} from '../context/AppContext';
import DarkMode from '../components/settings/darkMode';
import SignOutButton from '../components/settings/signOut';

import PHONE from '../images/phone.svg';
import {SIZES} from '../constants';

const Information = () => {
  const {tw, colorScheme} = useContext(ThemeContext);
  const {userState} = useContext(AppContext);
  const {userId, userName} = userState;
  return (
    <LinearGradient
      colors={colorScheme === 'dark' ? DarkTheme : LightTheme}
      start={{x: 0, y: 0}}
      end={{x: 1.5, y: 1}}
      style={tw`flex-1 relative`}>
      <View style={tw`absolute -bottom-1 left-0`}>
        <PHONE width={SIZES.width} height={SIZES.width} />
      </View>
      <Header title="Configuración" />
      <View style={tw`my-5`}>
        <Text
          style={tw`text-center text-xl text-zinc-900 dark:text-zinc-100 font-bold`}>
          {userName}
        </Text>
        <View style={tw`flex flex-row items-center justify-center mt-2`}>
          <Text
            style={tw`text-center text-sm text-zinc-900 dark:text-zinc-100 font-normal mr-1`}>
            ID:
          </Text>
          <Text
            style={tw`text-center text-sm text-zinc-900 dark:text-zinc-100 font-normal`}>
            {userId}
          </Text>
        </View>
      </View>
      <View style={tw`flex-1 w-11/12 mx-auto mt-5 mb-24`}>
        <View>
          <TouchableOpacity
            style={tw`flex flex-row items-center justify-between`}>
            <Text style={tw`text-base text-zinc-900 dark:text-zinc-100`}>
              Información de la aplicación
            </Text>
            <View
              style={tw`w-9 h-9 bg-zinc-300 dark:bg-zinc-700 rounded-lg flex items-center justify-center`}>
              <Icon
                name="info-circle"
                size={24}
                color={colorScheme === 'dark' ? '#fafafa' : '#18181b'}
              />
            </View>
          </TouchableOpacity>
          <View
            style={tw`w-full h-0.5  my-4 rounded-xl bg-zinc-200 dark:bg-zinc-700`}
          />
        </View>
        <View style={tw`mb-5`}>
          <Text
            style={tw`text-lg text-zinc-900 dark:text-zinc-100 font-medium mb-3 `}>
            Configuración de la aplicación
          </Text>

          <TouchableOpacity
            style={tw`flex flex-row items-center justify-between`}>
            <Text style={tw`text-base text-zinc-900 dark:text-zinc-100`}>
              Ruta de descarga
            </Text>
            <View
              style={tw`w-9 h-9 bg-zinc-300 dark:bg-zinc-700 rounded-lg flex items-center justify-center`}>
              <Icon
                name="arrow-right"
                size={20}
                color={colorScheme === 'dark' ? '#fafafa' : '#18181b'}
              />
            </View>
          </TouchableOpacity>
          <DarkMode />
        </View>
        <SignOutButton />
      </View>
    </LinearGradient>
  );
};

export default Information;
