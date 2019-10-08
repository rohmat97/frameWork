import React from 'react';
import { createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
// import { Transition } from 'react-native-reanimated';
import LotsOfGreetings from '../modules/test';

const AppNavigator = createAnimatedSwitchNavigator(
  {
    MainTab: { screen: LotsOfGreetings },
  },
  {
    initialRouteName: 'MainTab',
    headerMode: 'none',
  }
);

export default createAppContainer(AppNavigator);
