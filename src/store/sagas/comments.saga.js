import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from '../../api/index';
import { createCommentActionError, createCommentActionSuccess } from '../actions/actionCreators';
import actionTypes from '../actions/actionTypes';


export function* createComment(action) {
    try {
        const result = yield call(api.createCommentRequest, action.payload);
        yield put(createCommentActionSuccess(result));
    } catch (error) {
        yield put(createCommentActionError(error));
    }
}

// user reducer
// watcher saga
function* commentSaga () {
    yield takeLatest(actionTypes.COMMENT_CREATE_REQUEST, createComment);
}

export default commentSaga;
