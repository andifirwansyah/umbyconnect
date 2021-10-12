/* eslint-disable prettier/prettier */
import {apiGet, apiPost, PROD_HOST} from 'constants';

export const getThreads = param => {
  return apiGet(`${PROD_HOST}/v1/thread${param}`);
};

export const getThreadComment = (threadId, limit) => {
  return apiGet(`${PROD_HOST}/v1/thread/${threadId}/comment?limit=${limit}`);
};

export const createThreadComment = (threadId, data) => {
  return apiPost(`${PROD_HOST}/v1/thread/${threadId}/comment`, data);
};

export const createThreadCommentReaction = (threadId, commentId, data) => {
  return apiPost(`${PROD_HOST}/v1/thread/${threadId}/comment/${commentId}/reaction`, data);
};

export const createThread = data => {
  return apiPost(`${PROD_HOST}/v1/thread/create`, data);
};

export const createThreadReaction = (threadId, type) => {
  return apiPost(`${PROD_HOST}/v1/thread/${threadId}/reaction`, type);
};
