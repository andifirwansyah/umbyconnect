import {apiGet, PROD_HOST} from 'constants';

export const getDefaultAvatar = () => {
  return apiGet(`${PROD_HOST}/v1/master/choose-avatar`);
};
