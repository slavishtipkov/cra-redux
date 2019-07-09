import { combineReducers } from "redux";

import searchReducer from "./reducers/searchReducer";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
  searchReducer
});

export default rootReducer;
