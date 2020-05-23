import { LOGIN_OK, LOGOUT_OK, LOGIN_ERROR } from "../actions/actionTypes";
// import { TOKEN } from "../../API";
// import { LOCALSTORAGE_KEY } from "../../API";

const initialState = {
  // token: window.localStorage.getItem(LOCALSTORAGE_KEY),
  loggedIn: false,
  currentUser: {},
  authError: null,
  // loading: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_OK:
      return {
        ...state,
        // token: window.localStorage.getItem(LOCALSTORAGE_KEY),
        loggedIn: true,
        currentUser: action.payload,
        authError: null,
      };

    case LOGIN_ERROR:
    case LOGOUT_OK:
      return {
        ...state,
        // token: null,
        loggedIn: false,
        currentUser: {},
        authError: action.payload,
      };

    // case LOGOUT_OK:
    //   return {
    //     ...state,
    //     // token: null,
    //     loggedIn: false,
    //     currentUser: {},
    //     authError: action.payload
    //   };
    default:
      return state;
  }
};

export default authReducer;
