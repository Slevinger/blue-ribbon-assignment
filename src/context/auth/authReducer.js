import { LOGIN, LOGOUT, SET_ERROR } from "../auth/authActionTypes";

export const initialState = {
  user: null,
  error: ""
};

export default (state, { type, payload }) => {
  debugger;
  switch (type) {
    case SET_ERROR:
      const {
        error: { message }
      } = payload;
      debugger;
      return { ...state, error: message };

    case LOGIN:
      const { user } = payload;
      return {
        ...state,
        error: "",
        user
      };
    case LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};
