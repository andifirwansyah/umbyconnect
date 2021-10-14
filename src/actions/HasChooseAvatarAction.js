import * as ACTION_TYPE from 'constants/ActionTypes';

export const setChooseAvatarStatus = data => ({
  type: ACTION_TYPE.CHOOSE_AVATAR,
  payload: {
    data: data,
  },
});
