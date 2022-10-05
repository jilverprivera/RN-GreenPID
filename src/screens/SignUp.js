import React, {useContext} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  View,
} from 'react-native';
import {AppContext} from '../context/AppContext';
import {ThemeContext} from '../context/ThemeContext';
import {useForm} from '../hooks/useForm';

import {Input} from '../components/core';

import {signUpValidator} from '../helpers/authValidator';

const SignUp = ({navigation}) => {
  const {tw, colorScheme} = useContext(ThemeContext);

  const {StartRegisterWithEmailPasswordAndName, isLoading} =
    useContext(AppContext);
  const {form, onChange} = useForm({name: '', email: '', password: ''});
  const {name, email, password} = form;

  const signUp = () => {
    const isValid = signUpValidator(email, password, name);
    if (isValid) {
      StartRegisterWithEmailPasswordAndName(email, password, name);
    }
  };

  return (
    <SafeAreaView style={tw`flex-1 w-full bg-gray-100 dark:bg-neutral-900`}>
      <View
        style={tw`w-11/12 mx-auto flex flex-col items-center justify-center mt-16`}>
        <Text
          style={tw`font-bold text-3xl text-neutral-900 dark:text-neutral-50`}>
          Registro
        </Text>
        <Text
          style={tw`font-semibold text-lg text-neutral-900 dark:text-neutral-50 mt-2`}>
          Crea tu cuenta nueva
        </Text>
      </View>
      <KeyboardAvoidingView
        style={tw`mt-10 w-11/12 mx-auto mb-4`}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Input
          placeholder="Ingresa tu nombre"
          onChange={onChange}
          keyboardType="default"
          valueType="name"
          secureText={false}
        />
        <Input
          placeholder="Ingresa tu correo"
          onChange={onChange}
          keyboardType="email-address"
          valueType="email"
          secureText={false}
        />
        <Input
          placeholder="Ingresa tu contraseña"
          onChange={onChange}
          keyboardType="default"
          valueType="password"
          secureText={true}
        />
        {!isLoading && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('SignIn')}>
            <Text
              style={tw`text-sm text-neutral-700 dark:text-neutral-400 text-base font-medium`}>
              ¿Ya tienes cuenta?, Inicia sesión
            </Text>
          </TouchableOpacity>
        )}
      </KeyboardAvoidingView>
      {!isLoading ? (
        <View style={tw`w-11/12 mx-auto`}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={tw`p-4 border-2 items-center justify-center bg-sky-600 dark:bg-violet-700 rounded-xl mb-4`}
            onPress={() => signUp()}
            disabled={isLoading}>
            <Text
              style={tw`text-base font-semibold text-neutral-50 tracking-wide`}>
              Crear cuenta
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <ActivityIndicator
          size="large"
          color={colorScheme === 'dark' ? '#FFF' : '#000'}
        />
      )}
    </SafeAreaView>
  );
};

export default SignUp;
