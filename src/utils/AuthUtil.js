import {apiPost, PROD_HOST} from 'constants';

export const userLogin = data => {
  return apiPost(`${PROD_HOST}/v1/login`, data);
};

export const userRegister = data => {
  return apiPost(`${PROD_HOST}/v1/register`, data);
};
