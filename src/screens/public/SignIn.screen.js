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
import {Input} from '../../components/auth/input';
import {COLORS, FONTS, SIZES} from '../../constants';
import {AuthContext} from '../../context/authContext';
import {useForm} from '../../hooks/useForm';
import {authStyle} from '../../styles/auth.styles';
import {globals} from '../../styles/globals';

const SignIn = ({navigation}) => {
  const {form, onChange} = useForm({email: '', password: ''});
  const {email, password} = form;

  const {StartLoginWithEmailAndPassword} = useContext(AuthContext);
  const handleSignIn = () => {
    StartLoginWithEmailAndPassword(email, password);
  };

  return (
    <SafeAreaView
      style={{...globals.container, backgroundColor: COLORS.primary}}>
      <Text style={authStyle.title}>Ingresar</Text>
      <View style={authStyle.wrapper}>
        <KeyboardAvoidingView
          style={authStyle.keyboardContent}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Input
            name="Correo electrónico"
            keyboardType="email-address"
            onChange={onChange}
            capitalize="none"
            valueType="email"
          />
          <Input
            name="Contraseña"
            secureEntry={true}
            onChange={onChange}
            capitalize="none"
            valueType="password"
          />
        </KeyboardAvoidingView>
        <TouchableOpacity style={authStyle.authButton} onPress={handleSignIn}>
          <Text style={authStyle.authButtonText}>Iniciar sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
          }}
          onPress={() => navigation.navigate('SignUp')}>
          <Text
            style={{
              fontFamily: FONTS.medium,
              fontSize: SIZES.body4,
              color: COLORS.black,
            }}>
            ¿Eres nuevo?, Registrate
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
