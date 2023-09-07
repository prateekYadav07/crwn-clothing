import { legacy_createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import persistStore from "redux-persist/es/persistStore";
import thunk from "redux-thunk";

const middlewares = [logger, thunk];

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
