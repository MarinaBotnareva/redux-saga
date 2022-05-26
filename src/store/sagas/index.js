import createSagaMiddleware from 'redux-saga';
import { takeLatest, call, put } from 'redux-saga/effects';
import actionTypes from '../actions/actionTypes';
import * as api from '../../api/index';
import { registerUserActionError, registerUserActionSuccess } from '../actions/actionCreators';

export const sagaMiddleware = createSagaMiddleware()

// reducer case
function* registerUser(action) {
    try {
        const result = yield call(api.registerUser, action.payload);
        yield put(registerUserActionSuccess(result));
    } catch (error) {
        yield put(registerUserActionError(error));
    }
}

// root reducer
export function* rootSaga() {
    yield takeLatest(actionTypes.REGISTER_USER_REQUEST, registerUser);
}
