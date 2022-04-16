import {Alert} from 'react-native';
import reactNativeHtmlToPdf from 'react-native-html-to-pdf';
import FileViewer from 'react-native-file-viewer';

import {templatePDF} from './templatePDF';

import {isPermitted} from './systemPermissions';

export const generatePDF = async (data, fileTitle) => {
  if (await isPermitted) {
    let options = {
      html: templatePDF(data, fileTitle),
      fileName: fileTitle,
      directory: 'files',
    };
    let file = await reactNativeHtmlToPdf.convert(options);
    Alert.alert(
      'Exportado satisfactoriamente',
      'Ruta:' + file.filePath,
      [
        {text: 'Cancelar', style: 'cancel'},
        {text: 'Abrir', onPress: () => openFile(file.filePath)},
      ],
      {cancelable: true},
    );
  }
};

const openFile = filepath => {
  FileViewer.open(filepath)
    .then(() => {
      console.log('current filepath: ', filepath);
    })
    .catch(error => {
      console.log(error);
    });
};
