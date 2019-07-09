import { LOGIN } from "../actions/actionTypes";

export default function searchReducer(state = "", action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.redirectUrl
      };
    default:
      return state;
  }
}
