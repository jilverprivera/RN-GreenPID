import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AppContext} from '../context/AppContext';

import LoadingScreen from '../screens/Loading';
import {
  stackPrivateRoutes,
  stackPublicRoutes,
  stackRoutes,
} from '../routes/StackRoutes';

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
      initialRouteName={status === 'authenticated' ? 'Tabs' : 'Initial'}>
      {status === 'authenticated'
        ? stackPrivateRoutes.map((screen, i) => (
            <Stack.Screen
              key={i}
              name={screen.route}
              component={screen.component}
            />
          ))
        : stackPublicRoutes.map((screen, i) => (
            <Stack.Screen
              key={i}
              name={screen.route}
              component={screen.component}
            />
          ))}
      {stackRoutes.map((screen, i) => (
        <Stack.Screen
          key={i}
          name={screen.route}
          component={screen.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default StackNavigation;
