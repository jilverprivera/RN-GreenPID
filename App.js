import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import StackNavigation from './src/navigation/StackNavigation';

import {Text, View} from 'react-native';
import {AppProvider} from './src/context/appContext';
import {AuthProvider} from './src/context/authContext';
const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <AppProvider>
          <StackNavigation />
        </AppProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
