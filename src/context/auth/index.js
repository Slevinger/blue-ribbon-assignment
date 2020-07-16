import createDataContext from "../createDataContext";
import templateReducer, { initialState } from "./authReducer";
import { loginApi } from "../../api";
import { LOGIN, LOGOUT, SET_ERROR } from "./authActionTypes";

const setError = dispatch => error => {
  debugger;
  dispatch({ type: SET_ERROR, payload: { error } });
};

const doLogin = dispatch => async ({ username, password }) => {
  try {
    debugger;
    const user = await loginApi(username, password);
    debugger;

    dispatch({ type: LOGIN, payload: { user } });
    return true;
  } catch (error) {
    debugger;
    dispatch({ type: SET_ERROR, payload: { error } });
  }
};

const doLogout = dispatch => data => {
  try {
    //validateSchema()
    dispatch({ type: LOGOUT });
  } catch (error) {
    debugger;
    dispatch({ type: SET_ERROR, payload: { error } });
  }
};

export const { Provider, Context } = createDataContext(
  templateReducer,
  {
    doLogin,
    doLogout,
    setError
  },
  initialState
);
