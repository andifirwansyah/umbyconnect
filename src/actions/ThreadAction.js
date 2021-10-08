import * as ACTION_TYPE from 'constants/ActionTypes';

export const setLocalThreads = data => ({
  type: ACTION_TYPE.THREADS,
  payload: {
    data: data,
  },
});

export const updateLocalThreads = data => ({
  type: ACTION_TYPE.UPDATE_THREADS,
  payload: {
    data: data,
  },
});
