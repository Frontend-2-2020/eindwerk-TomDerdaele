import { GET_USERDETAIL, WEG_USERDETAIL } from "../actions/actionTypes";

const initialState = null;

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERDETAIL:
      return payload;

    case WEG_USERDETAIL:
      return null;

    default:
      return state;
  }
};

export default userReducer;
