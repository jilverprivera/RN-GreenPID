import React, {useContext} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Input} from '../../components/auth/input';
import {COLORS, FONTS, SIZES} from '../../constants';
import {useForm} from '../../hooks/useForm';
import {authStyle} from '../../styles/auth.styles';
import {globals} from '../../styles/globals';

import {AuthContext} from '../../context/authContext';

const SignUp = ({navigation}) => {
  const {StartRegisterWithEmailPasswordAndName} = useContext(AuthContext);
  const {form, onChange} = useForm({name: '', email: '', password: ''});
  const {name, email, password} = form;

  const handleSignUp = () => {
    StartRegisterWithEmailPasswordAndName(email, password, name);
  };

  return (
    <SafeAreaView
      style={{...globals.container, backgroundColor: COLORS.primary}}>
      <Text style={authStyle.title}>Registro</Text>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{position: 'absolute', top: 20, left: 10}}
        onPress={() => navigation.navigate('SignIn')}>
        <Ionicons name="arrow-back-outline" size={40} color={COLORS.white} />
      </TouchableOpacity>
      <View style={authStyle.wrapper}>
        <KeyboardAvoidingView
          style={authStyle.keyboardContent}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Input
            name="Nombre"
            onChange={onChange}
            capitalize="none"
            valueType="name"
          />
          <Input
            name="Correo electrónico"
            keyboardType="email-address"
            onChange={onChange}
            capitalize="none"
            valueType="email"
          />
          <Input
            name="Contraseña"
            onChange={onChange}
            secureEntry={true}
            capitalize="none"
            valueType="password"
            secureEntry={true}
          />
        </KeyboardAvoidingView>
        <TouchableOpacity style={authStyle.authButton} onPress={handleSignUp}>
          <Text style={authStyle.authButtonText}>Registrarse</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
          }}
          onPress={() => navigation.navigate('SignIn')}>
          <Text
            style={{
              fontFamily: FONTS.medium,
              fontSize: SIZES.body4,
              color: COLORS.black,
            }}>
            ¿Ya tienes cuenta?, Inicia sesión
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
