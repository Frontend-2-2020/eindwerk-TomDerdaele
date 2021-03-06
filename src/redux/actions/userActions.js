import { API } from "../../API";
import {
  GET_USERDETAIL,
  WEG_USERDETAIL,
  ERROR,
} from "../actions/actionTypes";

// USERDETAIL OPHALEN of ERROR als de id niet bestaat
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
          type: ERROR,
          payload: "ERROR! User doesn't exist",
        });
        doorverwijzen("/error");
      });
  };
};

// USERDETAIL OPKUISEN
export const clearUserDetail = () => {
  return { type: WEG_USERDETAIL, payload: null };
};
