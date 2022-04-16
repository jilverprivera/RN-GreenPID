import React, {useContext} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {AppContext} from '../context';

import {COLORS, FONTS, SIZES} from '../constants';

const VariablesList = item => {
  const {id, name, icon} = item;
  const {dashboard} = useContext(AppContext);
  const {selectedView, setSelectedView} = dashboard;

  return (
    <TouchableOpacity
      style={{
        ...STYLES.btn,
        backgroundColor:
          selectedView === id ? COLORS.secondary : COLORS.primary,
      }}
      activeOpacity={0.7}
      onPress={() => setSelectedView(id)}>
      <Icon name={icon} size={24} color={COLORS.white} />
      <Text style={STYLES.btnText}>{name}</Text>
    </TouchableOpacity>
  );
};

export default VariablesList;

const STYLES = StyleSheet.create({
  btn: {
    backgroundColor: COLORS.primary,
    width: SIZES.width / 2 - SIZES.margin * 2,
    height: SIZES.width / 4,
    margin: SIZES.margin / 2,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    marginTop: 10,
    fontSize: SIZES.body3,
    fontFamily: FONTS.regular,
    color: COLORS.white,
  },
});
