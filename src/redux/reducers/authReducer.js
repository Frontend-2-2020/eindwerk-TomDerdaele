import { LOGIN_OK, LOGOUT_OK, SIGNUP_OK, SIGNUP_CLEAR} from "../actions/actionTypes";

const initialState = {
  loggedIn: false,
  currentUser: {},
  signupSucces: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_OK:
      return {
        ...state,
        loggedIn: true,
        currentUser: action.payload,
      };

    case SIGNUP_OK:
      return {
        ...state,
        signupSucces: action.payload,
      };

    case SIGNUP_CLEAR:
      return {
        ...state,
        signupSucces: null,
      };

    case LOGOUT_OK:
      return {
        ...state,
        loggedIn: false,
        currentUser: {},
        signupSucces: null,
      };

    default:
      return state;
  }
};

export default authReducer;
