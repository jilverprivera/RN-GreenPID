import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../constants';

import {FAQStyle} from '../../styles/faq.styles';

export const CardFAQ = ({name, icon, urlScreen, navigate}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={FAQStyle.card}
      onPress={() => navigate(urlScreen)}>
      <View style={FAQStyle.iconCard}>
        <MaterialCommunityIcons name={icon} size={30} color={COLORS.black} />
      </View>
      <Text style={FAQStyle.textCard}>{name}</Text>
    </TouchableOpacity>
  );
};
