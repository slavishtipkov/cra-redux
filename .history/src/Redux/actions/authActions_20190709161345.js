import { LOGIN } from "./actionTypes";

export function login(redirectUrl) {
  return {
    type: LOGIN,
    redirectUrl: redirectUrl
  };
}
