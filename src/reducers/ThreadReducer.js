/* eslint-disable no-undef */
import * as ACTION_TYPE from 'constants/ActionTypes';

const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.THREADS:
      newState = {...state};
      newState.data = action.payload.data;
      return newState;
    case ACTION_TYPE.UPDATE_THREADS:
      console.log('REDUCER => UPDATE LOCAL THREADS');
      newState = {...state};
      newState.data = state.data.concat(action.payload.data);
      return newState;
    default:
      return state;
  }
};
