import React, {useContext} from 'react';
import {
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  View,
} from 'react-native';
import {AuthContext} from '../../context';
import {useForm} from '../../hooks/useForm';

import {Input} from '../../components/core';

import {COLORS} from '../../constants';
import {GLOBAL_STYLES, AUTH_STYLES} from '../../styles';

const SignUpScreen = ({navigation}) => {
  const {StartRegisterWithEmailPasswordAndName, isLoading} =
    useContext(AuthContext);
  const {form, onChange} = useForm({name: '', email: '', password: ''});
  const {name, email, password} = form;

  return (
    <SafeAreaView style={GLOBAL_STYLES.screenContainer}>
      <StatusBar
        hidden={false}
        animated={true}
        backgroundColor={COLORS.background}
        barStyle={'dark-content'}
      />
      <View style={AUTH_STYLES.wrapper}>
        <Text style={AUTH_STYLES.title}>Registro</Text>
        <Text style={AUTH_STYLES.subTitle}>Crea tu cuenta nueva</Text>
      </View>
      <KeyboardAvoidingView
        style={AUTH_STYLES.keyboardContent}
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
            activeOpacity={0.7}
            style={[AUTH_STYLES.btn2]}
            onPress={() => navigation.navigate('signInScreen')}>
            <Text style={[AUTH_STYLES.btnText, {color: COLORS.darkGray}]}>
              ¿Ya tienes cuenta?, Inicia sesión
            </Text>
          </TouchableOpacity>
        )}
      </KeyboardAvoidingView>
      {!isLoading ? (
        <View>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[AUTH_STYLES.btn, {backgroundColor: COLORS.primary}]}
            onPress={() =>
              StartRegisterWithEmailPasswordAndName(email, password, name)
            }
            disabled={isLoading}>
            <Text style={AUTH_STYLES.btnText}>Crear cuenta</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <ActivityIndicator size="large" color={COLORS.primary} />
      )}
    </SafeAreaView>
  );
};

export default SignUpScreen;
