import { LOGIN } from "../actions/actionTypes";

const initialState = {
  auth: {
    isAuth: false,
    redirectUrl: ""
  }
};

export default function searchReducer(state = auth, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.auth
      };
    default:
      return state;
  }
}
