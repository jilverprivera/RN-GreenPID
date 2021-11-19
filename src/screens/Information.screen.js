import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';

import {COLORS, FONTS, SIZES} from '../constants';
import {SocialLinks} from '../components/socialLinks';

const InformationScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={COLORS.secondary} hidden={false} />
      <View
        style={{
          backgroundColor: COLORS.secondary,
          height: SIZES.height * 0.7,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          marginBottom: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close-outline" size={50} color={COLORS.white} />
        </TouchableOpacity>
        <Text
          style={{
            width: '95%',
            alignSelf: 'center',
            color: COLORS.white,
            fontFamily: FONTS.regular,
            fontSize: SIZES.body4,
            marginVertical: 5,
            marginTop: 20,
            lineHeight: 25,
          }}>
          Hola. Soy Jilver Pacheco, creador de GreenPID.
        </Text>
        <Text
          style={{
            width: '95%',
            alignSelf: 'center',
            color: COLORS.white,
            fontFamily: FONTS.regular,
            fontSize: SIZES.body4,
            marginVertical: 5,
            lineHeight: 25,
          }}>
          GreenPID nace como una alternativa educativa para que los estudiantes
          del programa de Ingeniería electrónica de la Universidad de
          Investigación y Desarrollo puedan manipular las ganancias y demas
          variables de proceso en un prototipo del sector agroindustrial
          (invernadero).
        </Text>
        <Text
          style={{
            width: '95%',
            alignSelf: 'center',
            color: COLORS.white,
            fontFamily: FONTS.regular,
            fontSize: SIZES.body4,
            marginVertical: 5,
            lineHeight: 25,
          }}>
          Actualmente la App aún se encuentra en la fase beta, por lo que si
          deseas echarme una mano con ideas, sugerencias o simplemente darme
          Feedback acerca de como mejorarla mis redes sociales siempre estaran
          abiertas a escucharlas, me puedes encontrar como @Jilverprivera.
        </Text>
        <Text
          style={{
            width: '95%',
            alignSelf: 'center',
            color: COLORS.white,
            fontFamily: FONTS.regular,
            fontSize: SIZES.body4,
            marginVertical: 5,
            lineHeight: 25,
          }}>
          ¡Muchas Gracias por usar el App!
        </Text>
        <SocialLinks />
      </View>

      <View>
        <Text
          style={{
            width: '95%',
            alignSelf: 'center',
            color: COLORS.black,
            fontFamily: FONTS.regular,
            fontSize: SIZES.body3,
            marginVertical: 5,
            marginTop: 20,
            lineHeight: 25,
          }}>
          Si deseas ver el código fuente usado en la App puedes seguir el
          siguiente enlace
        </Text>
        <TouchableOpacity
          style={{
            width: '95%',
            height: 50,
            alignSelf: 'center',
            backgroundColor: COLORS.primary,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
            borderRadius: 10,
          }}
          activeOpacity={0.8}
          onPress={() =>
            Linking.openURL('https://github.com/jilverprivera/RN-sensorApp')
          }>
          <Text
            style={{
              color: COLORS.white2,
              fontFamily: FONTS.medium,
              fontSize: SIZES.body2,
              marginVertical: 5,
            }}>
            Ver código fuente
          </Text>
        </TouchableOpacity>
      </View>

      <Text
        style={{
          position: 'absolute',
          bottom: 15,
          left: 15,
          color: COLORS.black,
          fontFamily: FONTS.medium,
          fontSize: SIZES.body4,
          marginVertical: 5,
        }}>
        SensorApp Version 1.0.0
      </Text>
    </SafeAreaView>
  );
};

export default InformationScreen;
