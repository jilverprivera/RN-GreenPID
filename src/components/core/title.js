import {Text} from 'react-native';
import React, {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext';

const Title = ({title, left}) => {
  const {tw} = useContext(ThemeContext);

  return (
    <Text
      style={tw`w-full text-center my-4 text-lg text-neutral-900 dark:text-neutral-50 font-semibold`}>
      {title}
    </Text>
  );
};

export default Title;
