import { GET_NEWS } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case GET_NEWS:
      return state.concat([action.payload.data]);
  }

  return state;
}
