import * as ACTION_TYPE from 'constants/ActionTypes';

const initialState = {
  data: false,
};

export default (state = initialState, action) => {
  const newState = {...state};
  switch (action.type) {
    case ACTION_TYPE.CHOOSE_AVATAR:
      newState.data = action.payload.data;
      return newState;
    default:
      return state;
  }
};
