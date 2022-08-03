import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import StackNavigation from './src/navigation/Stack';

import {AppProvider} from './src/context/AppContext';
import {ThemeProvider} from './src/context/ThemeContext';
import {VariablesProvider} from './src/context/VariablesContext';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <AppProvider>
        <VariablesProvider>
          <ThemeProvider>
            <StackNavigation />
          </ThemeProvider>
        </VariablesProvider>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
