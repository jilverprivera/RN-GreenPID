import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {COLORS, FONTS, SIZES} from '../../constants';

const Card = manual => {
  const {icon, name, tags} = manual;
  const {navigate} = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={STYLES.container}
      onPress={() => navigate('manualDetailScreen', {...manual})}>
      <View style={STYLES.header}>
        <Text style={STYLES.title}>{name}</Text>
        <View style={STYLES.iconContent}>
          <Icon name={icon} size={28} color={COLORS.black} />
        </View>
      </View>
      <View>
        <Text style={STYLES.tagTitle}>Temas</Text>
        <View style={STYLES.tagsContent}>
          {tags.map(tag => (
            <View key={tag.id} style={STYLES.tagWrapper}>
              <Text style={STYLES.tagText}>{tag.name}</Text>
            </View>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const STYLES = StyleSheet.create({
  container: {
    width: '100%',
    padding: SIZES.padding,
    marginBottom: SIZES.margin,
    borderRadius: SIZES.borders,
    backgroundColor: COLORS.secondary,
  },
  header: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    fontFamily: FONTS.medium,
    color: COLORS.white,
    fontSize: SIZES.body1,
    width: '80%',
  },
  iconContent: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  tagTitle: {
    fontFamily: FONTS.medium,
    color: COLORS.white,
    fontSize: SIZES.body3,
  },
  tagsContent: {
    marginTop: SIZES.margin * 0.25,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  tagWrapper: {
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding / 2,
    marginRight: SIZES.margin / 2,
    borderRadius: SIZES.borders / 2,
  },
  tagText: {
    fontFamily: FONTS.regular,
    color: COLORS.black,
    fontSize: SIZES.body4,
  },
});
