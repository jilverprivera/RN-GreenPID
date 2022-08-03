import React, {useCallback, useContext} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {AppContext} from '../context/AppContext';

import {Header} from '../components/core';
import ListItem from '../components/notifications/ListItem';

import {GLOBAL_STYLES} from '../styles';
import {COLORS, FONTS, SIZES} from '../constants';
import {saveMessages} from '../helpers';

const NotificationScreen = () => {
  const {messages, setMessages, clearNotifications} = useContext(AppContext);

  const onDismiss = useCallback(id => {}, []);

  const generateMessage = () => {
    setMessages(prevState => [
      ...prevState,
      {
        message: `Mensaje: ${Math.floor(Math.random() * 100)}`,
        icon: 'database',
        date: new Date(),
        id: String(Date.now() + Math.floor(Math.random() * 1000)),
        type: 'success',
      },
    ]);
    saveMessages(messages);
  };
  return (
    <View style={GLOBAL_STYLES.screenContainer}>
      <Header withBack={true} title="Centro de notificaciones" />
      <ScrollView>
        {messages.length > 0 ? (
          messages
            .sort((a, b) => a.date < b.date)
            .map((item, index) => (
              <ListItem key={index} onDismiss={onDismiss} {...item} />
            ))
        ) : (
          <View style={GLOBAL_STYLES.screenWrapper}>
            <Text style={styles.text}>No hay notificaciones aún.</Text>
          </View>
        )}
      </ScrollView>
      <TouchableOpacity
        onPress={() => clearNotifications()}
        activeOpacity={0.7}>
        <Text>Borrar notificaciones</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => generateMessage()} activeOpacity={0.7}>
        <Text>Generar mensaje</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  text: {
    color: COLORS.black,
    fontSize: SIZES.heading2,
    textAlign: 'center',
    fontFamily: FONTS.semibold,
  },
});
