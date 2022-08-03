import React, {useContext} from 'react';
import validator from 'validator';

import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  View,
  StatusBar,
} from 'react-native';
import {AppContext} from '../context/AppContext';
import {ThemeContext} from '../context/ThemeContext';
import {useForm} from '../hooks/useForm';

import {Input} from '../components/core';

import {signInValidator} from '../helpers/authValidator';

const SignIn = ({navigation}) => {
  const {tw, colorScheme} = useContext(ThemeContext);
  const {StartLoginWithEmailAndPassword, isLoading} = useContext(AppContext);

  const {form, onChange} = useForm({email: '', password: ''});
  const {email, password} = form;

  const signIn = async () => {
    const emailValid = validator.isEmail(email);
    const passwordLength = validator.isLength(password, {min: 5});
    if (!emailValid && !passwordLength) {
      return navigation.navigate('Error', {
        message: 'Ops... Ocurrio un error 😔',
        altMessage: 'Por favor rellena los campos, son obligatorios.',
        prevRoute: 'SignIn',
      });
    }
    if (!emailValid) {
      return navigation.navigate('Error', {
        message: 'Ops... Ocurrio un error 🤔',
        altMessage: 'Por favor ingresa un correo electrónico valido.',
        prevRoute: 'SignIn',
      });
    }
    if (!passwordLength) {
      return navigation.navigate('Error', {
        message: 'Ops... Ocurrio un error 😔',
        altMessage: 'La contraseña debe ser mayor a 5 caracteres.',
        prevRoute: 'SignIn',
      });
    }
    await StartLoginWithEmailAndPassword(email, password);
  };

  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView style={tw`flex-1 w-full bg-gray-100 dark:bg-neutral-800`}>
        <View
          style={tw`w-11/12 mx-auto flex flex-col items-center justify-center mt-16`}>
          <Text style={tw`font-bold text-3xl text-zinc-900 dark:text-zinc-100`}>
            Bienvenido de nuevo
          </Text>
          <Text
            style={tw`font-semibold text-lg text-zinc-900 dark:text-zinc-100 mt-2`}>
            Ingresa a tu cuenta
          </Text>
        </View>
        <KeyboardAvoidingView
          style={tw`mt-10 w-11/12 mx-auto mb-4`}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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
              onPress={() => navigation.navigate('signUpScreen')}>
              <Text
                style={tw`text-sm text-zinc-700 dark:text-zinc-400 text-base font-medium`}>
                ¿No tienes cuenta?
              </Text>
            </TouchableOpacity>
          )}
        </KeyboardAvoidingView>
        {!isLoading ? (
          <View style={tw`w-11/12 mx-auto`}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={tw`p-4 items-center justify-center bg-sky-600 dark:bg-violet-700 rounded-xl mb-4`}
              onPress={() => signIn(email, password)}
              disabled={isLoading}>
              <Text
                style={tw`text-base font-semibold text-zinc-100 tracking-wide`}>
                Ingresar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={tw`p-4 border-2 items-center justify-center border-2 border-sky-600 dark:border-violet-700 rounded-xl`}
              onPress={() =>
                StartLoginWithEmailAndPassword('test@admin.com', '123456789')
              }
              disabled={isLoading}>
              <Text
                style={tw`text-base font-semibold text-sky-600 dark:text-violet-600 tracking-wide`}>
                Ingresar con cuenta UDI
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
    </>
  );
};

export default SignIn;
