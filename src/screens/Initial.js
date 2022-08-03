import React, {useContext} from 'react';
import {Image, StatusBar, Text, View, TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';

import {ThemeContext} from '../context/ThemeContext';

import IMAGE from '../../assets/images/bg.jpg';

import {SIZES} from '../constants';

const Initial = ({navigation}) => {
  const {tw} = useContext(ThemeContext);
  return (
    <>
      <StatusBar hidden={true} />
      <Animated.View style={tw`flex-1 w-full bg-white dark:bg-zinc-800`}>
        <Image
          source={IMAGE}
          style={{
            ...tw`absolute top-0 left-0`,
            width: SIZES.width,
            height: SIZES.height,
          }}
        />
        <Text style={tw`text-center font-medium text-6xl text-zinc-100 mt-20`}>
          GreenPID
        </Text>
        <View
          style={tw`flex flex-col items-center justify-center absolute bottom-20 self-center w-11/12`}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('SignIn')}
            style={tw`w-full p-4 bg-white mb-2.5 rounded-xl`}>
            <Text style={tw`text-base text-center font-semibold text-black`}>
              Iniciar sesión
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('SignUp')}
            style={tw`w-full p-4 bg-transparent border-2 border-white rounded-xl`}>
            <Text style={tw`text-base text-center font-semibold text-zinc-100`}>
              Registrarse
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </>
  );
};

export default Initial;
