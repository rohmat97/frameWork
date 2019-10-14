import React from 'react';
import { createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
// import { Transition } from 'react-native-reanimated';
import CounterApp from '../modules/main/greeting';
import items from '../modules/main/lotsOfGreetings';

const AppNavigator = createAnimatedSwitchNavigator(
  {
    CounterApp: { screen: CounterApp },
    item: { screen: items },
  },
  {
    initialRouteName: 'CounterApp',
    headerMode: 'none',
  }
);

export default createAppContainer(AppNavigator);
