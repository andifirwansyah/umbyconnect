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
