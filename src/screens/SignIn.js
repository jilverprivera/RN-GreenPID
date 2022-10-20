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
import {useForm} from '../hooks/useForm';

import {Input} from '../components/core';
import {layout} from '../styles/Layout';
import {auth} from '../styles/Auth';
import {core} from '../styles/Core';
import {THEME} from '../styles/Theme';

const SignIn = ({navigation}) => {
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
      <SafeAreaView style={layout.container}>
        <View style={auth.titleContainer}>
          <Text style={auth.title}>Bienvenido de nuevo</Text>
          <Text style={auth.subTitle}>Ingresa a tu cuenta</Text>
        </View>
        <KeyboardAvoidingView
          style={auth.inputContainer}
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
              onPress={() => navigation.navigate('SignUp')}>
              <Text style={{...auth.text}}>¿No tienes cuenta?</Text>
            </TouchableOpacity>
          )}
        </KeyboardAvoidingView>
        {!isLoading ? (
          <View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                ...core.changesButton,
                marginBottom: THEME.SIZES.margin / 2,
              }}
              onPress={() => signIn(email, password)}
              disabled={isLoading}>
              <Text style={core.changesText}>Ingresar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                ...core.changesButton,
                marginBottom: THEME.SIZES.margin / 2,
              }}
              onPress={() =>
                StartLoginWithEmailAndPassword('test@admin.com', '123456789')
              }
              disabled={isLoading}>
              <Text style={core.changesText}>Ingresar [TEST]</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <ActivityIndicator size="large" color={THEME.COLORS.secondary} />
        )}
      </SafeAreaView>
    </>
  );
};

export default SignIn;
