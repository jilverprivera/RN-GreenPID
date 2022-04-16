import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AuthContext} from '../context';

import TabNavigation from './TabNavigation';
import {
  InformationScreen,
  ManualControlScreen,
  ManualDetailScreen,
  NotificationScreen,
  PredefinedControlScreen,
} from '../screens/private';
import {SignInScreen, SignUpScreen, WelcomeScreen} from '../screens/public';
import LoadingScreen from '../screens/Loading.screen';

const Stack = createStackNavigator();

const StackNavigation = () => {
  const {userState} = useContext(AuthContext);
  const {status} = userState;

  if (status === 'checking') {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={
        status === 'authenticated' ? 'tabStack' : 'welcomeScreen'
      }>
      {status === 'authenticated' ? (
        <>
          <Stack.Screen name="tabStack" component={TabNavigation} />
          <Stack.Screen
            name="informationScreen"
            component={InformationScreen}
          />
          <Stack.Screen
            name="manualDetailScreen"
            component={ManualDetailScreen}
          />
          <Stack.Screen
            name="manualControlScreen"
            component={ManualControlScreen}
          />
          <Stack.Screen
            name="predefinedControlScreen"
            component={PredefinedControlScreen}
          />
        </>
      ) : (
        <>
          <Stack.Screen name="welcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="signInScreen" component={SignInScreen} />
          <Stack.Screen name="signUpScreen" component={SignUpScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigation;
