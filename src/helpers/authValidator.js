import {Alert} from 'react-native';
import validator from 'validator';

export const signInValidator = (email, password) => {
  try {
    const emailValid = validator.isEmail(email);
    const passwordLength = validator.isLength(password, {min: 5});
    if (!emailValid && !passwordLength) {
      Alert.alert('Error.', 'Por favor rellena los campos, son obligatorios.');
      return false;
    }
    if (!emailValid) {
      Alert.alert('Error.', 'Por favor ingresa un correo electrónico valido.');
      return false;
    }
    if (!passwordLength) {
      Alert.alert('Error.', 'La contraseña debe ser mayor a 5 caracteres.');
      return false;
    }
    return true;
  } catch (err) {
    Alert.alert('Error.', err);
    return false;
  }
};

export const signUpValidator = (email, password, name) => {
  try {
    const emailValid = validator.isEmail(email);
    const passwordLength = validator.isLength(password, {min: 5});
    const nameLength = validator.isLength(name, {min: 2});
    if (!emailValid && !passwordLength && !nameLength) {
      Alert.alert('Error.', 'Por favor rellena los campos, son obligatorios.');
      return false;
    }
    if (!nameLength) {
      Alert.alert('Error.', 'El nombre debe ser mayor a 3 caracteres.');
      return false;
    }
    if (!emailValid) {
      Alert.alert('Error.', 'Por favor ingresa un correo electrónico valido.');
      return false;
    }
    if (!passwordLength) {
      Alert.alert('Error.', 'La contraseña debe ser mayor a 5 caracteres.');
      return false;
    }
    return true;
  } catch (err) {
    Alert.alert('Error.', err);
    return false;
  }
};
