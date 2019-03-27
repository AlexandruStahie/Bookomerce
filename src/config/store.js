import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native
import logger from "redux-logger";

import cartReducer from "../reducers/cart";

const persistConfig = {
  key: "root",
  storage
};

const rootReducer = combineReducers({
  cart: cartReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(logger));
  let persistor = persistStore(store);

  return { store, persistor };
};
