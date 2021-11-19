import React, {useEffect, useRef} from 'react';
import {Animated, FlatList, SafeAreaView} from 'react-native';

import {CardFAQ} from '../../components/faq/cardFAQ';

import {FAQStyle} from '../../styles/faq.styles';

const manuals = [
  {id: 5, icon: 'cellphone', name: 'Información de la App', urlScreen: "Information"},
  {id: 1, icon: 'information', name: 'Manual de uso', urlScreen: "Loading"},
  {id: 2, icon: 'database', name: 'Conexión ESP32 - Database', urlScreen: "databaseConnection"},
  {id: 3, icon: 'thermometer', name: 'Conexión sensor DHT22', urlScreen: "DHTConnection"},
  {id: 4, icon: 'waves', name: 'Conexión sensor CO2', urlScreen: "CO2Connection"},
];

const FAQScreen = ({navigation}) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      delay: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={{...FAQStyle.container, opacity: opacity}}>
      <FlatList
        data={manuals}
        renderItem={({item}) => <CardFAQ {...item} {...navigation} />}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </Animated.View>
  );
};

export default FAQScreen;
