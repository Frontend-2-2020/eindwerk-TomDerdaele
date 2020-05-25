import { API, LOCALSTORAGE_KEY, TOKEN } from "../../API";
import {
  LOGIN_OK,
  LOGOUT_OK,
  LOGIN_ERROR,
  SIGNUP_OK,
  SIGNUP_ERROR,
} from "./actionTypes";

// Check als er iemand is ingelogd bij het laden van de applicatie
export const checkOnLoad = () => {
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
      // dispatch({
      //   type: LOGIN_ERROR,
      //   payload: "No user signed in yet",
      // });
    }
  };
};

// REGISTER ACTION om user te creeeren
export const registerActie = (
  { first_name, last_name, email, password },
  doorverwijzen
) => {
  return function (dispatch) {
    API.post("api/users", {
      first_name,
      last_name,
      email,
      password,
      favorite_color: "#fff",
      avatar: "https://api.adorable.io/avatars/285/" + email,
    })
      .then((response) => {
        dispatch({
          type: SIGNUP_OK,
          payload: response.data,
        });
        doorverwijzen("/login");
      })
      .catch(() => {
        dispatch({
          type: SIGNUP_ERROR,
          payload: "Signup ERROR, email in already in use",
        });
        doorverwijzen("/error");
      });
  };
};

// LOGIN ACTION om token te krijgen
export const loginActie = ({ email, password }, doorverwijzen) => {
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
          doorverwijzen("/posts");
        });
      })
      .catch(() => {
        API.defaults.headers.common["Authorization"] = undefined;
        dispatch({
          type: LOGIN_ERROR,
          payload: "Login ERROR, please check login and password",
        });
        doorverwijzen("/error");
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
      payload: "You are logged out",
    });
  };
};
