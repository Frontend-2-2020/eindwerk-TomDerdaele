import { LOGIN_OK, LOGOUT_OK, LOGIN_ERROR } from "../actions/actionTypes";

const initialState = {
  loggedIn: false,
  currentUser: {},
  errorAuth: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_OK:
      return {
        ...state,
        loggedIn: true,
        currentUser: action.payload,
        errorAuth: null,
      };

    case LOGIN_ERROR:
    case LOGOUT_OK:
      return {
        ...state,
        loggedIn: false,
        currentUser: {},
        errorAuth: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
