import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {THEME} from '../../styles/Theme';

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
      <Icon size={24} color={THEME.COLORS.black} name="arrow-right" />
    </TouchableOpacity>
  );
};

export default ConfigButton;

const STYLES = StyleSheet.create({
  content: {
    width: THEME.SIZES.width - THEME.SIZES.margin * 3,
    height: 50,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: THEME.SIZES.margin,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconWrapper: {
    width: 50,
    height: 50,
    backgroundColor: THEME.THEME.COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: THEME.SIZES.borders,
    marginRight: THEME.SIZES.margin,
  },
  title: {
    color: THEME.COLORS.black,
    fontSize: THEME.SIZES.body3,
    fontFamily: THEME.FONTS.regular,
  },
});
