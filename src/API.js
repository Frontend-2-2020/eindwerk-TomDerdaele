import Axios from "axios";
export const LOCALSTORAGE_KEY = "EINDWERK_LOGINTOKEN";

export const TOKEN = window.localStorage.getItem(LOCALSTORAGE_KEY);
// console.log(TOKEN);

export const API = Axios.create({
    baseURL: 'https://eindwerk.jnnck.be/',
});