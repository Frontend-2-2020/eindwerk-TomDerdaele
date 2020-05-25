import {
  SIGNUP_ERROR,
  LOGIN_ERROR,
  GET_USER_ERROR,
  CLEAR_ERROR,
} from "../actions/actionTypes";

const initialState = null;

const errorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_ERROR:
    case SIGNUP_ERROR:
    case GET_USER_ERROR:
      return payload;

    case CLEAR_ERROR:
      return null;

    default:
      return state;
  }
};

export default errorReducer;
