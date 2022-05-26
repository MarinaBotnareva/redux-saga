import actionTypes from '../actions/actionTypes';

const tasksState = {
  list: [],
  isLoading: false,
  error: null,
};

export const tasksReducer = (oldState = tasksState, action) => {
  console.log(action);
  if (action.type === actionTypes.TASK_CREATE_REQUEST) {
    return {
      ...oldState,
      isLoading: true,
    };
  }

  if (action.type === actionTypes.TASK_CREATE_SUCCESS) {
    return {
      ...oldState,
      isLoading: false,
      list: [...oldState.list, action.payload],
    };
  }

  if (action.type === actionTypes.TASK_CREATE_ERROR) {
    return {
      ...oldState,
      isLoading: false,
      error: action.payload,
    };
  }

  return oldState;
};
