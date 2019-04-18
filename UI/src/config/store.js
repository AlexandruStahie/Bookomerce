import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native
import logger from "redux-logger";

import cartReducer from "../reducers/cart";
import searchReducer from "../reducers/search";

const persistConfig = {
  key: "root",
  storage
};

const rootReducer = combineReducers({
  cart: cartReducer,
  search: searchReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(logger));
  let persistor = persistStore(store);

  return { store, persistor };
};
