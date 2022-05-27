import actionTypes from '../actions/actionTypes';

const commentsState = {
  list: [],
  isLoading: false,
  error: null,
};

export const commentsReducer = (oldState = commentsState, action) => {
  console.log(action);
  if (action.type === actionTypes.COMMENT_CREATE_REQUEST) {
    return {
      ...oldState,
      isLoading: true,
    };
  }

  if (action.type === actionTypes.COMMENT_CREATE_SUCCESS) {
    return {
      ...oldState,
      isLoading: false,
      list: [...oldState.list, action.payload],
    };
  }

  if (action.type === actionTypes.COMMENT_CREATE_ERROR) {
    return {
      ...oldState,
      isLoading: false,
      error: action.payload,
    };
  }

  return oldState;
};
