import * as ACTION_TYPE from 'constants/ActionTypes';

export const storeUserProfile = data => ({
  type: ACTION_TYPE.USER_PROFILE,
  payload: {
    data: data,
  },
});

export const userSignOut = () => ({
  type: ACTION_TYPE.SIGN_OUT,
});
