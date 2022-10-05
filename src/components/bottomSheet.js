import React from 'react';
import {Text, View} from 'react-native';

import {Message} from './core';
import PersonalLinks from './PersonalLinks';

import {layout} from '../styles/Layout';

const BottomSheet = () => {
  return (
    <View>
      <Text style={layout.bottomSheetTitle}>Información</Text>
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
  );
};

export default BottomSheet;
