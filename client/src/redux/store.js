import { legacy_createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import persistStore from "redux-persist/es/persistStore";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
// import { fetchCollectionStart } from "./shop/shop.sagas";
import rootSaga from "./root.saga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [logger, sagaMiddleware];
export const store = legacy_createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
const expObj = {
  store,
  persistor,
};
export default expObj;
