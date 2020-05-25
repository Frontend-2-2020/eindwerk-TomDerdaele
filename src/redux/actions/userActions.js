import { API } from "../../API";
import { GET_USERDETAIL, WEG_USERDETAIL, GET_USER_ERROR } from "../actions/actionTypes";


// USERDETAIL OPHALEN
export const getUserDetail = (id, doorverwijzen) => {
  return function (dispatch) {
    API.get(`api/users/${id}`)
    .then((response) => {
      dispatch({
        type: GET_USERDETAIL,
        payload: response.data,
      });
    })
    .catch(() => {
      dispatch({
        type: GET_USER_ERROR,
        payload: "user ERROR, user doesn't exist",
      });
      doorverwijzen("/error");
    });
  };
};

// USERDETAIL OPKUISEN
export const clearUserDetail = () => {
  return { type: WEG_USERDETAIL };
};