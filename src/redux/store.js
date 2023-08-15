import { legacy_createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import persistStore from "redux-persist/es/persistStore";

const middlewares = [logger];

export const store = legacy_createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);
export const persistor = persistStore(store);

const expObj = {
  store,
  persistor,
};

export default expObj;
