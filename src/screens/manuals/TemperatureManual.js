import React, {useContext} from 'react';
import {ScrollView, StatusBar, Text, View} from 'react-native';

import {ThemeContext} from '../../context/ThemeContext';

import Header from '../../components/layout/header';
import Title from '../../components/core/title';
import Paragraph from '../../components/core/paragraph';
import AnimatedImage from '../../components/core/animatedImage';

import IMG from '../../../assets/images/dht22_connection.png';

const TemperatureManual = ({route}) => {
  const {tw} = useContext(ThemeContext);
  const {name, tags} = route.params;

  return (
    <>
      <StatusBar hidden={true} />
      <View style={tw`flex-1 w-full bg-neutral-50 dark:bg-neutral-900`}>
        <Header withBack={true} title="" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={tw`flex-1 w-11/12 mx-auto`}>
          <View style={tw`flex flex-col items-center justify-center`}>
            <Text
              style={tw`text-neutral-900 dark:text-neutral-50 text-lg font-semibold text-center`}>
              {name}
            </Text>
            <View style={tw`my-2 flex flex-row items-center justify-center`}>
              {tags.map((tag, i) => (
                <Text
                  key={i}
                  style={tw`text-neutral-700 dark:text-neutral-200 mx-2`}>
                  {tag}
                </Text>
              ))}
            </View>
          </View>
          <Paragraph paragraph="El sensor DHT22 constituye la parte principal de prototipo agroindustrial ya que este es el encargado de sensar la temperatura al interior del mismo, con dichos datos, la placa ESP32 sabe como regular los bombillos de alta potencia para así aumentar o disminuir la luminosidad del mismo. " />
          <Paragraph paragraph="A continuación, se muestra el esquema de conexión." />
          <Title title="Conexión de sensor DHT22" />
          <AnimatedImage image={IMG} />
          <Paragraph paragraph="Como se pudo observar en la imagen anterior, este sensor cuenta con tres (3) pines de salida los cuales se nombran a continuación." />
          <Paragraph paragraph="Cable rojo: Salida VCC de 5V." />
          <Paragraph paragraph="Cable amarillo: Permite la comunicación entre el sensor y la placa ESP32." />
          <Paragraph paragraph="Cable negro: Salida a GND (tierra)." />
          <Paragraph paragraph="La variación en la luminosidad se establece de acuerdo a un parámetro establecido por el usuario, (setpoint) al cual la temperatura debe llegar y establecerse." />
          <Paragraph paragraph="Ejemplo: Si la temperatura dentro del prototipo presenta una variación mayor a 10°C con respecto al setpoint, entonces los bombillos iluminaran a su máxima potencia con el fin de irradiar la mayor cantidad de calor posible. Ahora bien, a medida que la temperatura al interior del prototipo se aproxima a la temperatura establecida en el setpoint, los bombillos dejaran de ir iluminando e irradiando calor con el fin de establecer un control dentro del prototipo." />
        </ScrollView>
      </View>
    </>
  );
};

export default TemperatureManual;
