import React, {useContext} from 'react';
import {Text} from 'react-native';

import {ThemeContext} from '../../context/ThemeContext';

const Message = ({message}) => {
  const {tw} = useContext(ThemeContext);
  return (
    <Text
      style={tw`text-neutral-900 dark:text-neutral-50 leading-7 text-sm mb-4 tracking-wide`}>
      {message}
    </Text>
  );
};

export default Message;
