import { GET_USERDETAIL, WEG_USERDETAIL } from "../actions/actionTypes";

const initialState = null;

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERDETAIL:
      return payload;
    // errorUser: null

    case WEG_USERDETAIL:
      return null;
    // errorUser: null

    // case GET_USER_ERROR:
    //   return {
    //     ...state,
    //     userData: null,
    //     errorUser: payload
    //   }

    default:
      return state;
  }
};

export default userReducer;
