import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import StackNavigation from './src/navigation/StackNavigation';

import {AuthProvider, AppProvider} from './src/context/';

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
