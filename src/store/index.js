import {
  legacy_createStore as createStore,
  applyMiddleware,
} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import { globalReducer } from './reducers';
import { rootSaga, sagaMiddleware } from './sagas';


export const store = createStore(
  globalReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  ),
);

sagaMiddleware.run(rootSaga);
