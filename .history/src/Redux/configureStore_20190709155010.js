import { createStore, compose } from "redux";

import rootReducer from "./rootReducer";

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState);
}
