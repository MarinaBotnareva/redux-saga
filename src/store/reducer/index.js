import { combineReducers } from 'redux';
import { counterReducer } from './counter.reducer';
import { tasksReducer } from './tasks.reducer';
import { userReducer } from './user.reducer';

// последовательно каждый редюсер
export const globalReducer = combineReducers({
  counter: counterReducer,
  tasks: tasksReducer,
  user: userReducer,
});
