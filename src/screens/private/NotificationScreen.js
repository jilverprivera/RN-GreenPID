import React, {useCallback, useContext} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {AppContext} from '../../context';

import {Header} from '../../components/core';
import ListItem from '../../components/notifications/ListItem';

import {GLOBAL_STYLES} from '../../styles';
import {COLORS, FONTS, SIZES} from '../../constants';

const NotificationScreen = () => {
  const {messages, setMessages} = useContext(AppContext);

  const onDismiss = useCallback(() => {
    console.log('deleted');
  }, []);

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
