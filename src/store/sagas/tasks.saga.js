import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from '../../api/index';
import { createTaskActionError, createTaskActionSuccess } from '../actions/actionCreators';
import actionTypes from '../actions/actionTypes';

// reducer case
// worker Saga
export function* createTask(action) {
    try {
        const result = yield call(api.createTaskRequest, action.payload);
        yield put(createTaskActionSuccess(result));
    } catch (error) {
        yield put(createTaskActionError(error));
    }
}

// user reducer
// watcher saga
function* taskSaga () {
    yield takeLatest(actionTypes.TASK_CREATE_REQUEST, createTask);
}

export default taskSaga;
