import { SEARCH } from "../actions/actionTypes";

export default function searchReducer(state = "", action) {
  switch(action.type) {
    case SEARCH:
      return {...state, action.input}
      default:
        return state;
  }
}