import React, {useContext} from 'react';
import {Text} from 'react-native';
import {ThemeContext} from '../../context/ThemeContext';

const ChartTitle = ({title}) => {
  const {tw} = useContext(ThemeContext);

  return (
    <Text style={tw`text-zinc-900 dark:text-zinc-100 text-base font-semibold`}>
      {title}
    </Text>
  );
};

export default ChartTitle;
