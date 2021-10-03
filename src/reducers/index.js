import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SIGN_OUT} from 'constants/ActionTypes';

import AuthReducer from './AuthReducer';
import UserReducer from './UserReducer';

const appReducer = combineReducers({
  auth: AuthReducer,
  user: UserReducer,
});

const rootReducer = (state, action) => {
  if (action.type === SIGN_OUT) {
    AsyncStorage.removeItem('persist:root');
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
