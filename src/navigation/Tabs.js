import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {ThemeContext} from '../context/ThemeContext';
import {tabRoutes} from '../routes/TabRoutes';

import TabButton from '../components/tabButton';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const {colorScheme} = useContext(ThemeContext);
  const style = {
    position: 'absolute',
    borderWidth: 0,
    borderColor: colorScheme === 'dark' ? '#27272a' : '#f4f4f5',
    elevation: 0,
    bottom: 16,
    left: 16,
    right: 16,
    borderRadius: 16,
    height: 72,
    backgroundColor: colorScheme === 'dark' ? '#27272a' : '#f4f4f5',
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: style,
      }}>
      {tabRoutes.map((screen, i) => (
        <Tab.Screen
          key={i}
          name={screen.route}
          component={screen.component}
          options={{
            tabBarButton: props => <TabButton {...props} item={screen} />,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default Tabs;
