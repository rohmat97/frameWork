import React from 'react';
import { createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
// import { Transition } from 'react-native-reanimated';
import Home from '../modules/main/home';

const AppNavigator = createAnimatedSwitchNavigator(
  {
    Home: { screen: Home },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);

export default createAppContainer(AppNavigator);
