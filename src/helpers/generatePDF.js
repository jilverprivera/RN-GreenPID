import {Alert} from 'react-native';
import reactNativeHtmlToPdf from 'react-native-html-to-pdf';
import FileViewer from 'react-native-file-viewer';

import PDFTemplate from '../utils/PDFTemplate';

import {isPermitted} from './systemPermissions';

export const generatePDF = async (data, fileTitle, units) => {
  if (await isPermitted) {
    let options = {
      html: PDFTemplate(data, fileTitle, units),
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
