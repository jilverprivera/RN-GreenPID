import React, {useContext} from 'react';
import {Text} from 'react-native';
import {ThemeContext} from '../../context/ThemeContext';

const Paragraph = ({paragraph}) => {
  const {tw} = useContext(ThemeContext);

  return (
    <Text
      style={tw`text-neutral-900 dark:text-neutral-50 leading-5 text-base my-2`}>
      {paragraph}
    </Text>
  );
};

export default Paragraph;
