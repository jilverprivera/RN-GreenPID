import React from 'react';
import {Text} from 'react-native';
import {core} from '../styles/Core';

const ScreenTitle = ({title}) => {
  return <Text style={core.screenTitle}>{title}</Text>;
};

export default ScreenTitle;
