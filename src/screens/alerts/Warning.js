import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ThemeContext} from '../../context/ThemeContext';

const Warning = ({route, navigation}) => {
  const {message, altMessage, prevRoute} = route.params;
  const {tw} = useContext(ThemeContext);

  if (prevRoute === 'SignIn' || prevRoute === 'SignUp') {
    setTimeout(() => {
      navigation.goBack();
    }, 4000);
  } else {
    setTimeout(() => {
      navigation.navigate('Tabs');
    }, 4000);
  }

  return (
    <View
      style={tw`w-full flex-1 flex flex-col items-center justify-center bg-amber-500`}>
      <View
        style={tw`h-24 w-24 bg-zinc-100 rounded-full items-center justify-center mb-5`}>
        <Icon name="exclamation" size={64} color="#f59e0b" />
      </View>
      <Text style={tw`text-xl font-semibold text-zinc-100 mb-2`}>
        {message}
      </Text>

      {altMessage && (
        <Text
          style={tw`w-10/12 mx-auto text-base font-normal text-center text-zinc-100 mb-2`}>
          {altMessage}
        </Text>
      )}
    </View>
  );
};

export default Warning;
