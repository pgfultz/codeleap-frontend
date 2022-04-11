import { all } from "redux-saga/effects";

import {
    watchGetData,
    watchPostData,
    watchEditData,
    watchDeleteData,
} from './careers';

export default function* rootSaga() {
  yield all([
    watchGetData.call(),
    watchPostData.call(),
    watchEditData.call(),
    watchDeleteData.call(),
  ]);
}