import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from '../../api/index';
import { registerUserActionError, registerUserActionSuccess } from '../actions/actionCreators';
import actionTypes from '../actions/actionTypes';

// reducer case
// worker Saga
export function* registerUser(action) {
    try {
        const result = yield call(api.registerUser, action.payload);
        yield put(registerUserActionSuccess(result));
    } catch (error) {
        yield put(registerUserActionError(error));
    }
}

// user reducer
// watcher saga
function* userSaga () {
    yield takeLatest(actionTypes.REGISTER_USER_REQUEST, registerUser);
}

export default userSaga;
