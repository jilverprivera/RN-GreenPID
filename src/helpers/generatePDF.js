import {Alert} from 'react-native';
import reactNativeHtmlToPdf from 'react-native-html-to-pdf';
import FileViewer from 'react-native-file-viewer';

import {templatePDF} from '../config/templatePDF';

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
        {text: 'Abrir', onPress: () => FileViewer.open(file.filePath)},
      ],
      {cancelable: true},
    );
  }
};
