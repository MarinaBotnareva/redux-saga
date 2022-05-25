import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import { counterReducer } from './reducer';
import { tasksReducer } from './reducer/tasks.reducer';

// последовательно каждый редюсер
export const globalReducer = combineReducers({
  counter: counterReducer,
  tasks: tasksReducer, // new reducer
});

export const store = createStore(
  globalReducer,
  undefined,
  composeWithDevTools(
    applyMiddleware()
  )
);
