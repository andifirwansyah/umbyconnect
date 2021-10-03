import * as ACTION_TYPE from 'constants/ActionTypes';

const initialState = {
  data: undefined,
};

export default (state = initialState, action) => {
  const newState = {...state};
  switch (action.type) {
    case ACTION_TYPE.USER_PROFILE:
      newState.data = action.payload.data;
      return newState;
    default:
      return state;
  }
};
