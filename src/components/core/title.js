import {Text} from 'react-native';
import React, {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext';

const Title = ({title, left}) => {
  const {tw} = useContext(ThemeContext);

  return (
    <Text
      style={tw`w-full text-center my-4 text-lg text-zinc-900 dark:text-zinc-100 font-semibold`}>
      {title}
    </Text>
  );
};

export default Title;
