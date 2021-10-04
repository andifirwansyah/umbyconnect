/* eslint-disable prettier/prettier */
import {apiGet, apiPost, PROD_HOST} from 'constants';

export const getCurrentUser = () => {
  return apiGet(`${PROD_HOST}/v1/profile`);
};

export const getFriendProfile = username => {
  return apiGet(`${PROD_HOST}/v1/profile?username=${username}`);
};

export const setUserAvatar = data => {
  return apiPost(`${PROD_HOST}/v1/set-avatar`, data);
};

export const getUserFollowers = userId => {
  let url = '';
  const param = `?user_id=${userId}`;
  if (userId) {
    url = `${PROD_HOST}/v1/profile/followers${param}`;
  } else {
    url = `${PROD_HOST}/v1/profile/followers`;
  }
  return apiGet(url);
};

export const getUserThreads = (userId, limit) => {
  return apiGet(`${PROD_HOST}/v1/profile/thread?user_id=${userId}&limit=${limit}`);
};

export const followUser = userId => {
  return apiGet(`${PROD_HOST}/v1/profile/${userId}/follow`);
};
