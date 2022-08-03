import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../constants';

const Information = ({title, min = 0, average = 0, max = 0, units}) => {
  return (
    <View style={STYLES.container}>
      <Text style={STYLES.title}>{title}</Text>
      <View style={STYLES.content}>
        <View style={STYLES.card}>
          <Text style={STYLES.infoTitle}>Mínima</Text>
          <Text style={STYLES.value}>
            {isNaN(average) ? '0' : min} {units}
          </Text>
        </View>
        <View style={STYLES.card}>
          <Text style={STYLES.infoTitle}>Promedio</Text>
          <Text style={STYLES.value}>
            {isNaN(average) ? '0' : average} {units}
          </Text>
        </View>
        <View style={STYLES.card}>
          <Text style={STYLES.infoTitle}>Máxima</Text>
          <Text style={STYLES.value}>
            {isNaN(average) ? '0' : max} {units}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Information;

const STYLES = StyleSheet.create({
  container: {
    marginVertical: SIZES.margin,
    width: SIZES.width - SIZES.margin * 2,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    // borderWidth: 2,
  },
  card: {
    width: SIZES.width / 3 - SIZES.margin * 1.5,
    // borderWidth: 2,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.borders,
    height: 100,
    marginHorizontal: SIZES.margin / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: SIZES.width - SIZES.margin * 2,
    marginVertical: SIZES.margin / 2,
  },

  title: {
    fontSize: SIZES.heading3,
    color: COLORS.black,
    fontFamily: FONTS.medium,
  },
  infoTitle: {
    fontSize: SIZES.heading5,
    color: COLORS.black,
    fontFamily: FONTS.regular,
  },
  value: {
    fontSize: SIZES.heading3,
    color: COLORS.black,
    fontFamily: FONTS.medium,
  },
});
