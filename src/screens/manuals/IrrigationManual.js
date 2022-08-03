import React, {useContext} from 'react';
import {ScrollView, StatusBar, Text, View} from 'react-native';

import {ThemeContext} from '../../context/ThemeContext';

import Header from '../../components/layout/header';
import Title from '../../components/core/title';
import Paragraph from '../../components/core/paragraph';
import AnimatedImage from '../../components/core/animatedImage';

import YL_IMAGE from '../../../assets/images/YL69_connection.png';
import HW_IMAGE from '../../../assets/images/HW68_connection.png';

const IrrigationManual = ({route}) => {
  const {tw} = useContext(ThemeContext);
  const {name, tags} = route.params;
  return (
    <>
      <StatusBar hidden={true} />
      <View style={tw`flex-1 w-full bg-white dark:bg-zinc-900`}>
        <Header withBack={true} title="" />

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={tw`flex-1 w-11/12 mx-auto`}>
          <View style={tw`flex flex-col items-center justify-center`}>
            <Text
              style={tw`text-zinc-900 dark:text-zinc-100 text-lg font-semibold text-center`}>
              {name}
            </Text>
            <View style={tw`my-2 flex flex-row items-center justify-center`}>
              {tags.map((tag, i) => (
                <Text key={i} style={tw`text-zinc-700 dark:text-zinc-200 mx-2`}>
                  {tag}
                </Text>
              ))}
            </View>
          </View>
          <Paragraph paragraph="Dicho sistema depende de la lectura proporcionada por el sensor YL-69 (sensor de humedad de suelo) que mediante un valor proporcionado por el usuario en el aplicativo móvil GreenPID activa una señal “Alto” en el microcontrolador, y este a su vez, activa una bomba de agua ubicada en un recipiente externo a el prototipo." />
          <Paragraph paragraph="A continuación, se muestra el esquema de conexión." />
          <Title title="Conexión de sensor YL-69" />

          <AnimatedImage image={YL_IMAGE} />
          <Paragraph paragraph="De igual manera dicho recipiente cuenta con un sensor de nivel ubicado en uno de sus laterales que permite medir el nivel del agua en el mismo, al igual que el sensor de humedad de suelo, si el sensor de nivel ubicado en el recipiente al momento de sensar detecta que el mismo se encuentra vacío, o por debajo del valor establecido por el usuario en este aplicativo móvil, enviara una señal “Bajo” al microcontrolador con el fin de apagar la bomba de agua." />
          <Paragraph paragraph="A continuación, se muestra el esquema de conexión." />
          <Title title="Conexión de sensor HW-068" />

          <AnimatedImage image={HW_IMAGE} />
        </ScrollView>
      </View>
    </>
  );
};

export default IrrigationManual;
