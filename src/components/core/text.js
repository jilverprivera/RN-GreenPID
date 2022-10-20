import React from 'react';
import {Text} from 'react-native';

import {layout} from '../../styles/Layout';

const Message = ({message}) => {
  return <Text style={layout.text}>{message}</Text>;
};

export default Message;
