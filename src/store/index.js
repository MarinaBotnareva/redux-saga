import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import { counterReducer } from './reducer/counter.reducer';
import { tasksReducer } from './reducer/tasks.reducer';
import { userReducer } from './reducer/user.reducer';

// последовательно каждый редюсер
export const globalReducer = combineReducers({
  counter: counterReducer,
  tasks: tasksReducer,
  user: userReducer,
});

export const store = createStore(
  globalReducer,
  undefined,
  composeWithDevTools(
    applyMiddleware()
  )
);
