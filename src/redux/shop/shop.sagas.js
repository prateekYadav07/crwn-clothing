import { takeEvery } from "redux-saga/effects";
// import takeEvery from "redux-saga";

import shopActionTypes from "./shop.types";

export function* fetchCollectionAsync() {
  yield console.log("I am fired from saga");
}

export function* fetchCollectionStart() {
  console.log("fetchCollectionStart");
  yield takeEvery(
    shopActionTypes.FETCH_COLLLECTION_START,
    fetchCollectionAsync
  );
}
