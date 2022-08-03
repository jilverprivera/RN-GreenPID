import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../constants';

const Selector = ({selector, setSelector}) => {
  return (
    <View style={STYLES.container}>
      <TouchableOpacity
        style={selector === 'graph' ? STYLES.selectedBtn : STYLES.btn}
        onPress={() => setSelector('graph')}
        activeOpacity={0.7}>
        <Text style={selector === 'graph' ? STYLES.selectedText : STYLES.text}>
          Gráfica
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={selector === 'information' ? STYLES.selectedBtn : STYLES.btn}
        onPress={() => setSelector('information')}
        activeOpacity={0.7}>
        <Text
          style={
            selector === 'information' ? STYLES.selectedText : STYLES.text
          }>
          Información
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Selector;

const STYLES = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    width: SIZES.width - SIZES.margin * 2,
    height: 70,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderRadius: SIZES.borders,
  },
  btn: {
    backgroundColor: 'transparent',
    width: SIZES.width / 2 - SIZES.margin - SIZES.padding,
    height: 60,
    alignItems: 'center',
    borderRadius: SIZES.borders,
    justifyContent: 'center',
  },
  selectedBtn: {
    backgroundColor: COLORS.lightGray,
    width: SIZES.width / 2 - SIZES.margin - SIZES.padding,
    height: 60,
    alignItems: 'center',
    borderRadius: SIZES.borders,
    justifyContent: 'center',
  },
  text: {
    color: COLORS.black,
    fontSize: SIZES.body2,
    fontFamily: FONTS.light,
  },
  selectedText: {
    color: COLORS.black,
    fontSize: SIZES.body2,
    fontFamily: FONTS.semibold,
  },
});
