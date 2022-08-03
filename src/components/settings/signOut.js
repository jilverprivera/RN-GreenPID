import React, {useContext} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {AppContext} from '../../context/AppContext';
import {ThemeContext} from '../../context/ThemeContext';

const SignOutButton = () => {
  const {tw} = useContext(ThemeContext);
  const {SignOut} = useContext(AppContext);
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={SignOut}
      style={tw`self-center mt-5 py-3 px-6 rounded-lg bg-red-500`}>
      <Text style={tw`text-base text-white font-semibold`}>Cerrar sesión</Text>
    </TouchableOpacity>
  );
};

export default SignOutButton;
