/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import RootNavigator from 'navigations';
import {Provider} from 'react-redux';
import configureStore from './src/stores/configureStore';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  const {persistor, store} = configureStore();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
