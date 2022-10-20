import React, {useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View} from 'react-native';
import Animated from 'react-native-reanimated';

import DrawerMenu from '../components/DrawerMenu';

import HomeScreen from '../screens/HomeScreen';

import {layout} from '../styles/Layout';
import InformationScreen from '../screens/InformationScreen';
import DetailScreen from '../screens/DetailScreen';
import SettingScreen from '../screens/SettingScreen';
import ManualControlScreen from '../screens/ManualControlScreen';
import PredeterminatedControlScreen from '../screens/PredeterminatedControlScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const [progress, setProgress] = useState(new Animated.Value(0));
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.95],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 26],
  });
  const animatedStyle = {
    borderRadius,
    transform: [{scale}],
  };

  return (
    <View style={layout.drawerContainer}>
      <Drawer.Navigator
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={layout.drawerStyle}
        sceneContainerStyle={layout.drawerSceneContainer}
        screenOptions={{
          headerShown: false,
        }}
        drawerContent={props => {
          setProgress(props.progress);

          return <DrawerMenu {...props} />;
        }}
        initialRouteName="Home">
        <Drawer.Screen name="Home">
          {props => <HomeScreen {...props} animated={animatedStyle} />}
        </Drawer.Screen>
        <Drawer.Screen name="Information">
          {props => <InformationScreen {...props} animated={animatedStyle} />}
        </Drawer.Screen>
        <Drawer.Screen name="Detail">
          {props => <DetailScreen {...props} animated={animatedStyle} />}
        </Drawer.Screen>
        <Drawer.Screen name="Settings">
          {props => <SettingScreen {...props} animated={animatedStyle} />}
        </Drawer.Screen>
        <Drawer.Screen name="ManualControl">
          {props => <ManualControlScreen {...props} animated={animatedStyle} />}
        </Drawer.Screen>
        <Drawer.Screen name="PredeterminatedControl">
          {props => (
            <PredeterminatedControlScreen {...props} animated={animatedStyle} />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

export default DrawerNavigator;
