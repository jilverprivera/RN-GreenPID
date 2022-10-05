import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {core} from '../styles/Core';
import {THEME} from '../styles/Theme';

const InformationCard = ({name, tags, route}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={core.card}
      onPress={() => navigation.navigate(route)}>
      <Text style={{...core.cardTitle}}>{name}</Text>
      <Text style={{...core.cardText, marginVertical: THEME.SIZES.padding / 2}}>
        Incluye
      </Text>
      <View style={core.cardInformationTags}>
        {tags.map((tag, i) => (
          <View key={i} style={core.cardInformationTag}>
            <Text style={core.cardInformationTagText}>{tag}</Text>
          </View>
        ))}
      </View>
    </TouchableOpacity>
  );
};

export default InformationCard;
