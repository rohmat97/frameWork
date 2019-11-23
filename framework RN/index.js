import { AppRegistry } from 'react-native';
import App from './app/App';
import Login from './app/components/Login';
import Splash from './app/components/Splash';

import AppStackNavigator from './app/components/AppStackNavigator';

import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Login);
