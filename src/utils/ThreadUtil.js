import {apiGet, PROD_HOST} from 'constants';

export const getThreads = param => {
  return apiGet(`${PROD_HOST}/v1/thread${param}`);
};

export const getThreadComment = (threadId, limit) => {
  return apiGet(`${PROD_HOST}/v1/thread/${threadId}/comment?limit=${limit}`);
};
