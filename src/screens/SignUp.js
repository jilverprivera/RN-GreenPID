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
import {useForm} from '../hooks/useForm';

import {Input} from '../components/core';

import {signUpValidator} from '../helpers/authValidator';
import {layout} from '../styles/Layout';
import {auth} from '../styles/Auth';
import {core} from '../styles/Core';
import {THEME} from '../styles/Theme';

const SignUp = ({navigation}) => {
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
    <SafeAreaView style={layout.container}>
      <View style={auth.titleContainer}>
        <Text style={auth.title}>Registro</Text>
        <Text style={auth.subTitle}>Crea tu cuenta nueva</Text>
      </View>
      <KeyboardAvoidingView
        style={auth.inputContainer}
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
            <Text style={auth.text}>¿Ya tienes cuenta?, Inicia sesión</Text>
          </TouchableOpacity>
        )}
      </KeyboardAvoidingView>
      {!isLoading ? (
        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={core.changesButton}
            onPress={() => signUp()}
            disabled={isLoading}>
            <Text style={core.changesText}>Crear cuenta</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <ActivityIndicator size="large" color={THEME.COLORS.secondary} />
      )}
    </SafeAreaView>
  );
};

export default SignUp;
