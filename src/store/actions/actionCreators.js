import actionTypes from './actionTypes';

export const createCommentAction = (payload) => ({
  type: actionTypes.COMMENT_CREATE_REQUEST,
  payload,
});

export const createCommentActionSuccess = (payload) => ({
  type: actionTypes.COMMENT_CREATE_SUCCESS,
  payload,
});

export const createCommentActionError = (payload) => ({
  type: actionTypes.COMMENT_CREATE_ERROR,
  payload,
});
