import { createStore, applyMiddleware, compose } from "redux";
import {
  reduxImmutableStateInvariant,
  devToolsEnhancer
} from "redux-devtools-extension";

import rootReducer from "./rootReducer";

export default function configureStore(initialState) {
  const composeEnhancers = devToolsEnhancer || compose;

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
  );
}
