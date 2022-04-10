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
  
  export function* postData() {
    try {
      const response = yield call(postDataApi);
  
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
