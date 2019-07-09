import { createStore, applyMiddleware, compose } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

import rootReducer from "./rootReducer";

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware());
}
