import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import userSaga from './user.saga';


export const sagaMiddleware = createSagaMiddleware();

// root reducer
// root saga
export function* rootSaga() {
    yield all([
        userSaga(),
    ])
}
