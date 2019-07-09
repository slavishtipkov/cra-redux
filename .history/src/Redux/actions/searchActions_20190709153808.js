import { SEARCH } from "./actionTypes";

export function search(input) {
  return {
    type: SEARCH,
    input: input
  };
}
