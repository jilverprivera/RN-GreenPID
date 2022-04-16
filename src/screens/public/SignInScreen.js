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

const SignInScreen = ({navigation}) => {
  const {form, onChange} = useForm({email: '', password: ''});
  const {email, password} = form;

  const {StartLoginWithEmailAndPassword, isLoading} = useContext(AuthContext);

  return (
    <SafeAreaView style={GLOBAL_STYLES.screenContainer}>
      <StatusBar
        hidden={false}
        animated={true}
        backgroundColor={COLORS.background}
        barStyle={'dark-content'}
      />
      <View style={AUTH_STYLES.wrapper}>
        <Text style={AUTH_STYLES.title}>Bienvenido de nuevo</Text>
        <Text style={AUTH_STYLES.subTitle}>Ingresa a tu cuenta</Text>
      </View>
      <KeyboardAvoidingView
        style={AUTH_STYLES.keyboardContent}
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
            activeOpacity={0.7}
            style={[AUTH_STYLES.btn2]}
            onPress={() => navigation.navigate('signUpScreen')}>
            <Text style={[AUTH_STYLES.btnText, {color: COLORS.darkGray}]}>
              ¿No tienes cuenta?
            </Text>
          </TouchableOpacity>
        )}
      </KeyboardAvoidingView>
      {!isLoading ? (
        <View>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[AUTH_STYLES.btn, {backgroundColor: COLORS.primary}]}
            onPress={() => StartLoginWithEmailAndPassword(email, password)}
            disabled={isLoading}>
            <Text style={AUTH_STYLES.btnText}>Ingresar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[AUTH_STYLES.btn, AUTH_STYLES.altBtn]}
            onPress={() =>
              StartLoginWithEmailAndPassword(
                'jilverrivera1@gmail.com',
                '123456789',
              )
            }
            disabled={isLoading}>
            <Text style={[AUTH_STYLES.btnText, {color: COLORS.primary}]}>
              Ingresar con cuenta UDI
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <ActivityIndicator size="large" color={COLORS.primary} />
      )}
    </SafeAreaView>
  );
};

export default SignInScreen;
