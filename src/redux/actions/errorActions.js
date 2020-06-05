import { CLEAR_ERROR } from "./actionTypes";

// USERDETAIL OPKUISEN
export const clearError = () => {
  return { type: CLEAR_ERROR, payload: null };
};