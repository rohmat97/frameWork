import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './Login';
import Splash from './Splash';

const AppNavigator = createStackNavigator(
  {
    Splash: {
      screen: Splash,
  },
    Login: {
      screen: Login,
    },
  },
  {
    initialRouteName: 'Splash',
  }
);

export default createAppContainer(AppNavigator);
