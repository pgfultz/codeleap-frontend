import { all } from "redux-saga/effects";

import {
    watchGetData,
} from './careers';

export default function* rootSaga() {
    yield all([
      watchGetData.call(),
    ]);
  }