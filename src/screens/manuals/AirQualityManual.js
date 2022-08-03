import React, {useContext} from 'react';
import {ScrollView, StatusBar, Text, View} from 'react-native';

import Header from '../../components/layout/header';
import Title from '../../components/core/title';
import Paragraph from '../../components/core/paragraph';
import AnimatedImage from '../../components/core/animatedImage';

import {ThemeContext} from '../../context/ThemeContext';

import IMG from '../../../assets/images/MQ135_connection.png';

const AirQualityManual = ({route}) => {
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
          <Paragraph paragraph="El sensor MQ135 permite medir la cantidad de particulas por millon de ciertos gases presentes dentro del prototipo agroindustrial. " />
          <Paragraph paragraph="A continuación, se muestra el esquema de conexión." />
          <Title title="Conexión de sensor MQ135" />
          <AnimatedImage image={IMG} />
          <Paragraph paragraph="Como se pudo observar en la imagen anterior, este sensor cuenta con cuatro (4), sin embargo, en este caso solo fueron usados tres (3) pines de salida los cuales se nombran a continuación." />
          <Paragraph paragraph="Cable rojo: Salida VCC de 5V." />
          <Paragraph paragraph="Cable negro: Salida a GND (tierra)." />
          <Paragraph paragraph="Cable amarillo: Permite la comunicación de manera análoga entre el sensor y la placa ESP32." />
          <Paragraph paragraph="Dichos valores son medidos mediante una entrada análoga por la placa ESP32 con un converson Análogo / Digital de 12 bits." />
        </ScrollView>
      </View>
    </>
  );
};

export default AirQualityManual;
