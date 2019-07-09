import { LOGIN } from "../actions/actionTypes";

export default function searchReducer(
  state = { auth: { isAuth: true, redirectUrl: "" } },
  action
) {
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
