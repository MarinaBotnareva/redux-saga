import { combineReducers } from 'redux';
import { commentsReducer } from './comments.reducer';

export const globalReducer = combineReducers({
  comments: commentsReducer
});
