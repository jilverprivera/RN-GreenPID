import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../screens/public/SignIn.screen';
import SignUp from '../screens/public/SignUp.screen';
import TabNavigation from './TabNavigation';
import {AuthContext} from '../context/authContext';
import LoadingScreen from '../screens/Loading.screen';
import InformationScreen from '../screens/Information.screen';

const Stack = createStackNavigator();

const StackNavigation = () => {
  const {userState} = useContext(AuthContext);

  if (userState.status === 'checking') return <LoadingScreen />;

  return (
    <Stack.Navigator
      initialRouteName={'SignIn'}
      screenOptions={{
        headerShown: false,
      }}>
      {userState.status === 'authenticated' ? (
        <>
          <Stack.Screen name="Tabs" component={TabNavigation} />
          <Stack.Screen name="Information" component={InformationScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </>
      )}

      {/* {userState.status === 'authenticated' && (
      )} */}
    </Stack.Navigator>
  );
};

export default StackNavigation;
