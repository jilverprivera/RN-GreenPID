import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity, View} from 'react-native';

import {ThemeContext} from '../../context/ThemeContext';

const Card = manual => {
  const {name, tags, route} = manual;
  const {tw} = useContext(ThemeContext);
  const {navigate} = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={tw`w-full my-2 bg-teal-500 dark:bg-indigo-600 p-4 rounded-xl`}
      onPress={() => navigate(route, {...manual})}>
      <Text
        style={tw`w-full text-lg font-semibold text-zinc-900 dark:text-zinc-100`}>
        {name}
      </Text>
      <View>
        <Text
          style={tw`text-sm text-zinc-900 dark:text-zinc-100 font-normal mt-2`}>
          Temas
        </Text>
        <View style={tw`flex flex-row items-center justify-start mt-2`}>
          {tags.map((tag, i) => (
            <View
              key={i}
              style={tw`bg-white dark:bg-zinc-800 p-2 rounded-lg mr-2`}>
              <Text style={tw`text-sm text-zinc-900 dark:text-zinc-100`}>
                {tag}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
