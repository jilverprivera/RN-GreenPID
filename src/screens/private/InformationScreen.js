import React from 'react';
import {View} from 'react-native';
import Animated from 'react-native-reanimated';

import {Header, Message} from '../../components/core';
import PersonalLinks from '../../components/PersonalLinks';

import {GLOBAL_STYLES} from '../../styles';

const InformationScreen = ({navigation, animated}) => {
  return (
    <Animated.View style={{...GLOBAL_STYLES.screenContainer, ...animated}}>
      <Header title="Acerca de la aplicación" withBack={true} />
      <View style={GLOBAL_STYLES.screenWrapper}>
        <Message message="¡Hola! Soy Jilver Pacheco, estudiante de ingeniería electrónica y creador de GreenPID." />
        <Message
          message="GreenPID es una alternativa educativa para los estudiantes del
          programa de Ingeniería electrónica de la Universidad de Investigación
          y Desarrollo en la cual pueden desarrollar practicas de laboratorio para los
          cursos académicos de control análogo e instrumentación virtual en los que se lleve a cabo actividades similares a las presentadas
          en el mismo proceso de control en un prototipo del sector agroindustrial (invernadero)."
        />
        <Message
          message="Actualmente la aplicación aún se encuentra en la fase beta, por lo que si
          deseas echarme una mano con ideas, sugerencias o simplemente darme
          Feedback acerca de como mejorarla, mis redes sociales siempre estarán
          abiertas a escucharlas, me puedes encontrar en ellas como @Jilverprivera."
        />
        <Message message="¡Muchas Gracias por usar el App!" />
        <PersonalLinks />
      </View>
    </Animated.View>
  );
};

export default InformationScreen;
