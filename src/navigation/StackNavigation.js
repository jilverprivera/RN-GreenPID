import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AuthContext} from '../context';

import SignInScreen from '../screens/public/SignInScreen';
import {
  InformationScreen,
  ManualControlScreen,
  NotificationScreen,
  PredefinedControlScreen,
} from '../screens/private';

import LoadingScreen from '../screens/Loading.screen';
import TabNavigation from './TabNavigation';
import SignUpScreen from '../screens/public/SignUpScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
  const {userState} = useContext(AuthContext);
  const {status} = userState;

  if (status === 'checking') {
    return <Stack.Screen name="loading" component={LoadingScreen} />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={
        status === 'authenticated' ? 'tabStack' : 'signInScreen'
      }>
      {status === 'authenticated' ? (
        <>
          <Stack.Screen name="tabStack" component={TabNavigation} />
          <Stack.Screen
            name="informationScreen"
            component={InformationScreen}
          />
          <Stack.Screen
            name="manualControlScreen"
            component={ManualControlScreen}
          />
          <Stack.Screen
            name="predefinedControlScreen"
            component={PredefinedControlScreen}
          />
          <Stack.Screen
            name="notificationScreen"
            component={NotificationScreen}
          />
        </>
      ) : (
        <>
          <Stack.Screen name="signInScreen" component={SignInScreen} />
          <Stack.Screen name="signUpScreen" component={SignUpScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigation;
