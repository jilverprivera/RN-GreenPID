import React from 'react';
import {StyleSheet, ScrollView, Text, View} from 'react-native';
import Animated from 'react-native-reanimated';
import Markdown from 'react-native-markdown-display';

import {applicationUsage} from '../../manuals/applicationUsage';

import Header from '../../components/core/header';

import {COLORS, FONTS, SIZES} from '../../constants';
import {GLOBAL_STYLES} from '../../styles';
import {MARKDOWN_STYLES} from '../../styles/markdown_styles';

const ManualDetailScreen = ({route}) => {
  const {name, tags} = route.params;

  return (
    <Animated.View style={GLOBAL_STYLES.screenContainer}>
      <Header withBack={true} title="Manual de usuario" />

      <View style={STYLES.screenHeader}>
        <Text style={STYLES.manualTitle}>{name}</Text>
        <View style={STYLES.tagWrapper}>
          {tags.map(tag => (
            <Text key={tag.id} style={STYLES.tag}>
              {tag.name}
            </Text>
          ))}
        </View>
      </View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        style={GLOBAL_STYLES.screenWrapper}>
        <Markdown style={MARKDOWN_STYLES}>{applicationUsage}</Markdown>
      </ScrollView>
    </Animated.View>
  );
};

export default ManualDetailScreen;

const STYLES = StyleSheet.create({
  button: {
    marginLeft: SIZES.margin,
    marginTop: SIZES.margin,
    width: SIZES.padding * 3,
    height: SIZES.padding * 3,
    // alignItems: 'center',
    justifyContent: 'center',
  },

  screenHeader: {
    width: SIZES.width - SIZES.margin,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: SIZES.margin / 2,
  },

  manualTitle: {
    fontFamily: FONTS.medium,
    color: COLORS.black,
    fontSize: SIZES.heading3,
    textAlign: 'center',
  },
  tagWrapper: {
    marginTop: SIZES.margin / 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tag: {
    fontFamily: FONTS.light,
    color: COLORS.darkGray,
    fontSize: SIZES.body3,
    marginHorizontal: SIZES.margin / 4,
  },
});
