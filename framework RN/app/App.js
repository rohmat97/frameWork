import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { YellowBox, AsyncStorage } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
// import { Analytics } from './configs/Firebase';
import AppNavigator from './navigation/AppNavigator';
import Bootstrap from './bootstrap/bootstrap';
import BootstrapNavigation from './bootstrap/bootstrapNavigation';
import bootstrapSagas from './bootstrap/bootstrapSagas';
import { sagaMiddleware, store, persistor } from './configs/Store';
import Data from './mhs.json';
import { getMhs } from './modules/main/mainActions'

sagaMiddleware.run(bootstrapSagas);
export class App extends Component {

  // componentDidMount() {
  //       var _this = this;
  //       //Check if any data exist
  //       AsyncStorage.getItem('data', (err, data) => {
  //           //if it doesn't exist, extract from json file
  //           //save the initial data in Async
  //           if (data === null){
  //               AsyncStorage.setItem('data', JSON.stringify(Data.mhs));
  //           }
  //       });
  //   }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Bootstrap>
            <AppNavigator
              ref={navigatorRef => {
                BootstrapNavigation.setTopLevelNavigator(navigatorRef);
              }}
            />
          </Bootstrap>
        </PersistGate>
      </Provider>
    );
  }
}

YellowBox.ignoreWarnings(['Warning: componentWillReceiveProps is deprecated']);

export default App;
