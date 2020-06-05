import {
  CLEAR_ERROR,
  // LOGIN_OK,
  ERROR,
} from "../actions/actionTypes";

const initialState = null;

const errorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ERROR:
      return payload;

    // case LOGIN_OK:
    case CLEAR_ERROR:
      return payload;

    default:
      return state;
  }
};

export default errorReducer;
