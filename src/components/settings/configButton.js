import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {COLORS, FONTS, SIZES} from '../../constants';

const ConfigButton = ({title, iconName, route, color}) => {
  const {navigate} = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigate(route)} style={STYLES.content}>
      <View style={STYLES.wrapper}>
        <View style={STYLES.iconWrapper}>
          <Icon size={24} color={color} name={iconName} />
        </View>
        <Text style={STYLES.title}>{title}</Text>
      </View>
      <Icon size={24} color={COLORS.black} name="arrow-right" />
    </TouchableOpacity>
  );
};

export default ConfigButton;

const STYLES = StyleSheet.create({
  content: {
    width: SIZES.width - SIZES.margin * 3,
    height: 50,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SIZES.margin,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconWrapper: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.borders,
    marginRight: SIZES.margin,
  },
  title: {
    color: COLORS.black,
    fontSize: SIZES.body3,
    fontFamily: FONTS.regular,
  },
});
