import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

export const saveMessages = async messages => {
  try {
    const messagesToStorage = JSON.stringify(messages);
    await AsyncStorage.setItem('@messages', messagesToStorage);
  } catch (err) {
    console.warn('Error', err);
    Alert.alert('Ops...', 'Hubo un error al guardar el mensaje');
  }
};

export const clearMessages = async () => {
  await AsyncStorage.removeItem('@messages', () => {
    Alert.alert('Hecho...', 'Todas sus notificaciones han sido eliminadas');
  });
};
