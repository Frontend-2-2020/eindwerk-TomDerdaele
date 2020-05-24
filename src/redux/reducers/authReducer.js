import { LOGIN_OK, LOGOUT_OK, LOGIN_ERROR, SIGNUP_OK, SIGNUP_ERROR } from "../actions/actionTypes";

const initialState = {
  loggedIn: false,
  currentUser: {},
  signupSucces: null,
  errorAuth: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_OK:
      return {
        ...state,
        loggedIn: true,
        currentUser: action.payload,
        signupSucces: null,
        errorAuth: null,
      };

    case SIGNUP_OK:
      return {
        ...state,
        signupSucces: action.payload,
        errorAuth: null,
      };

    case SIGNUP_ERROR:
      return {
        ...state,
        signupSucces: null,
        errorAuth: action.payload,
      };

    case LOGIN_ERROR:
    case LOGOUT_OK:
      return {
        ...state,
        loggedIn: false,
        currentUser: {},
        signupSucces: null,
        errorAuth: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
