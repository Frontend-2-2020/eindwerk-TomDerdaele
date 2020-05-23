import { API, LOCALSTORAGE_KEY, TOKEN } from "../../API";
import { LOGIN_OK, LOGOUT_OK, LOGIN_ERROR } from "./actionTypes";

//check als er iemand is ingelogd bij load
export const checkOnLoad = () => {
  // const TOKEN = window.localStorage.getItem(LOCALSTORAGE_KEY);
  return function (dispatch) {
    if (TOKEN) {
      API.defaults.headers.common["Authorization"] = "Bearer " + TOKEN;
      API.get("api/user").then((userRes) => {
        dispatch({
          type: LOGIN_OK,
          payload: userRes.data,
        });
      });
    } else {
      API.defaults.headers.common["Authorization"] = undefined;
      dispatch({
        type: LOGIN_ERROR,
        payload: "No user signed in yet"
      });
    }
  };
};

// LOGIN ACTION om token te krijgen
export const loginActie = ({ email, password }) => {
  return function (dispatch) {
    API.post("oauth/token", {
      grant_type: "password",
      client_id: 2,
      client_secret: "iwrHFPcaiQ3bZTzHEwQpYkpiuHUlbIOJ9SAI6DLI",
      username: email,
      password: password,
    })
      .then((response) => {
        window.localStorage.setItem(
          LOCALSTORAGE_KEY,
          response.data.access_token
        );
        API.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.access_token;
        API.get("api/user").then((userRes) => {
          dispatch({
            type: LOGIN_OK,
            payload: userRes.data,
          });
        });
      })
      .catch((e) => {
        API.defaults.headers.common["Authorization"] = undefined;
        dispatch({
          type: LOGIN_ERROR,
          payload: e.response.data.message
        });
      });
  };
};

// LOGOUT ACTION
export const logoutActie = () => {
  return function (dispatch) {
    window.localStorage.removeItem(LOCALSTORAGE_KEY);
    API.defaults.headers.common["Authorization"] = undefined;
    dispatch({
      type: LOGOUT_OK,
      payload: "You are logged out"
    });
  };
};
