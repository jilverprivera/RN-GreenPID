import firestore from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';
import {Alert} from 'react-native';

export const saveData = async (id, email, userName) => {
  try {
    await firestore()
      .collection(`Users/${id}/data`)
      .add({uid: id, userName: userName, email: email});
  } catch (err) {
    console.warn('Error', err);
    Alert.alert(
      'Ops...',
      'Hubo un error guardando tu información en la base de datos.',
    );
  }
};

export const updateVariables = async obj => {
  await database()
    .ref('/variables')
    .update({...obj});
};
