import React from 'react';
import {Text} from 'react-native';

import {core} from '../../styles/Core';

const Paragraph = ({paragraph}) => {
  return <Text style={core.inputText}>{paragraph}</Text>;
};

export default Paragraph;
