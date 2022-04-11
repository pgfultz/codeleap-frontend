import {put, takeLeading, call} from 'redux-saga/effects'

import {
    GET_POSTS_SAGA,
    GET_POSTS_REDUCER,
    POST_POSTS_SAGA,
    POST_POSTS_REDUCER,
    EDIT_POSTS_SAGA,
    EDIT_POSTS_REDUCER,
    DELETE_POSTS_SAGA,
    DELETE_POSTS_REDUCER,
} from '../actions';
import {
    getDataApi,
    postDataApi,
    editDataApi,
    deleteDataApi,
} from '../api';

export function* watchGetData() {
  yield takeLeading(GET_POSTS_SAGA, getData);
}

export function* watchPostData() {
  yield takeLeading(POST_POSTS_SAGA, postData);
}

export function* watchEditData() {
  yield takeLeading(EDIT_POSTS_SAGA, editData);
}

export function* watchDeleteData() {
  yield takeLeading(DELETE_POSTS_SAGA, deleteData);
}

export function* getData() {
    try {
        const response = yield call(getDataApi);
  
        if (response.ok) {
            const payload =
            response.data ? response.data : null;
            yield put({type: GET_POSTS_REDUCER, payload});
        } else {
            console.log('erro get data');
        }
    } catch (error) {
      console.log(error);
    }
  }
  
  export function* postData(action) {
    try {
      const response = yield call(postDataApi, action.payload);
  
    if (response.ok) {
        const payload =
          response.data ? response.data : null;
        yield put({type: POST_POSTS_REDUCER, payload});
        yield call(getData);
      } else {
        console.log('erro post data');
      }
    } catch (error) {
      console.log(error);
    }
  }

  export function* editData(action) {
    try {
      const response = yield call(editDataApi, action.payload.id, action.payload.data);
      console.log(response);
  
    if (response.ok) {
        const payload =
          response.data ? response.data : null;
        yield put({type: EDIT_POSTS_REDUCER, payload});
        yield call(getData);
      } else {
        console.log('erro post data');
      }
    } catch (error) {
      console.log(error);
    }
  }

  export function* deleteData(action) {
    try {
      const response = yield call(deleteDataApi, action.payload.id);
      console.log(response);
  
    if (response.ok) {
        const payload =
          response.data ? response.data : null;
        yield put({type: DELETE_POSTS_REDUCER, payload});
        yield call(getData);
      } else {
        console.log('erro post data');
      }
    } catch (error) {
      console.log(error);
    }
  }
