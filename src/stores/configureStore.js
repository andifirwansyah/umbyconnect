import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import {createStore, compose, applyMiddleware} from 'redux';
import {name as appName} from '../../app.json';
import rootReducer from 'reducers';
import {storeUserProfile, signIn} from 'actions';
import thunk from 'redux-thunk';
import {getCurrentUser} from 'utils';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  blacklist: [],
  whitelist: ['auth'],
  keyPrefix: appName,
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
  return createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk)),
  );
};

const getAsyncStorage = () => {
  return dispatch => {
    AsyncStorage.getItem('userToken').then(async userToken => {
      dispatch(signIn(userToken));
      if (userToken) {
        await getCurrentUser()
          .then(resp => {
            dispatch(storeUserProfile(resp.data));
            console.log('STORE => user data');
            console.log(resp.data);
          })
          .catch(e => {
            console.log(e);
            dispatch(signIn(null));
            AsyncStorage.removeItem('userToken');
          });
      }
    });
  };
};

export default () => {
  let store = configureStore();
  let persistor = persistStore(store);
  store.dispatch(getAsyncStorage());
  return {store, persistor};
};
