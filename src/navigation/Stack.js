import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AppContext} from '../context/AppContext';

import {
  stackPrivateRoutes,
  stackPublicRoutes,
  stackRoutes,
} from '../routes/StackRoutes';

import LoadingScreen from '../screens/Loading';

const Stack = createStackNavigator();

const StackNavigation = () => {
  const {userState} = useContext(AppContext);
  const {status} = userState;

  if (status === 'checking') {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={status === 'authenticated' ? 'Drawer' : 'SignIn'}>
      {status === 'authenticated'
        ? stackPrivateRoutes.map((_, i) => (
            <Stack.Screen key={i} name={_.route} component={_.component} />
          ))
        : stackPublicRoutes.map((_, i) => (
            <Stack.Screen key={i} name={_.route} component={_.component} />
          ))}
      {stackRoutes.map((_, i) => (
        <Stack.Screen key={i} name={_.route} component={_.component} />
      ))}
    </Stack.Navigator>
  );
};

export default StackNavigation;
