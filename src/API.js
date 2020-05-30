import Axios from "axios";
export const LOCALSTORAGE_KEY = "EINDWERK_LOGINTOKEN";
export const BASE_URL = "https://eindwerk.jnnck.be/";
export const BASE_POSTSPAGE_URL = "https://eindwerk.jnnck.be/api/posts?page=";

export const TOKEN = window.localStorage.getItem(LOCALSTORAGE_KEY);

export const API = Axios.create({
  baseURL: BASE_URL,
});
