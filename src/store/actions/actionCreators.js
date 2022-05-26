import actionTypes from './actionTypes';

export const incrementAction = (payload) => {
  return { type: actionTypes.INCREMENT, payload };
};

export const decreaseAction = (payload) => ({
  type: actionTypes.DECREMENT,
  payload,
});

export const resetAction = () => ({ type: actionTypes.RESET });

/* addTaskAction creator */

export const registerUserAction = (payload) => ({
  type: actionTypes.REGISTER_USER_REQUEST,
  payload,
});

export const registerUserActionSuccess = (payload) => ({
  type: actionTypes.REGISTER_USER_SUCCESS,
  payload,
});

export const registerUserActionError = (payload) => ({
  type: actionTypes.REGISTER_USER_ERROR,
  payload,
});

export const createTaskAction = (payload) => ({
  type: actionTypes.TASK_CREATE_REQUEST,
  payload,
});

export const createTaskActionSuccess = (payload) => ({
  type: actionTypes.TASK_CREATE_SUCCESS,
  payload,
});

export const createTaskActionError = (payload) => ({
  type: actionTypes.TASK_CREATE_ERROR,
  payload,
});
