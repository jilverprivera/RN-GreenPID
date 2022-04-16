import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../../constants';

import {GLOBAL_STYLES} from '../../styles';

const Header = ({title, withBack}) => {
  const {goBack} = useNavigation();
  return (
    <View style={GLOBAL_STYLES.headerContainer}>
      {withBack && (
        <TouchableOpacity style={GLOBAL_STYLES.button} onPress={() => goBack()}>
          <Icon size={32} color={COLORS.black} name="arrow-left" />
        </TouchableOpacity>
      )}

      <Text style={GLOBAL_STYLES.title}>{title}</Text>
    </View>
  );
};

export default Header;
