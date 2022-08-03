import React, {useContext} from 'react';
import {FlatList, StatusBar, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {ThemeContext} from '../context/ThemeContext';

import Header from '../components/layout/header';
import Configuration from '../components/variables/configuration';
import VariablesCard from '../components/variables/variablesCard';

import {DarkTheme, LightTheme} from '../config/LinearGradientColors';
import VARIABLES from '../data/VARIABLES_LIST.json';

const Variables = () => {
  const {tw, colorScheme} = useContext(ThemeContext);
  return (
    <>
      <StatusBar hidden={true} />
      <LinearGradient
        colors={colorScheme === 'dark' ? DarkTheme : LightTheme}
        start={{x: 0, y: 0}}
        end={{x: 1.5, y: 1}}
        style={tw`flex-1 flex bg-zinc-100 dark:bg-zinc-900 w-full flex-1 overflow-hidden relative`}>
        <Header title="Variables" />
        <View style={tw`w-11/12 mx-auto`}>
          <Configuration />
        </View>

        <View style={tw`w-full mx-auto`}>
          <Text
            style={tw`w-11/12 mx-auto mb-4 font-bold text-xl text-neutral-900 dark:text-zinc-100`}>
            Variables de medición
          </Text>
          <View>
            <FlatList
              style={tw`w-full mx-auto z-50`}
              data={VARIABLES}
              renderItem={({item}) => <VariablesCard {...item} />}
              keyExtractor={item => item.name}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </LinearGradient>
    </>
  );
};

export default Variables;
