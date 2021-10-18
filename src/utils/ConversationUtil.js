import {apiPost, apiGet, PROD_HOST} from 'constants';

export const startConversation = data => {
  return apiPost(`${PROD_HOST}/v1/chat/start`, data);
};

export const getUserCoversation = () => {
  return apiGet(`${PROD_HOST}/v1/chat`);
};
