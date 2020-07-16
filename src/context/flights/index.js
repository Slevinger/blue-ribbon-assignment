import createDataContext from "../createDataContext";
import templateReducer, { initialState } from "./flightsReducer";

import {
  ADD_FLIGHT,
  REMOVE_FLIGHT,
  SET_ERROR,
  UPDATE_FLIGHT
} from "./flightsActionTypes";

const setError = dispatch => error => {
  dispatch({ type: SET_ERROR, payload: { error } });
};

const addFlight = dispatch => data => {
  try {
    //validateSchema()
    dispatch({ type: ADD_FLIGHT, payload: { data } });
  } catch (error) {
    debugger;
    dispatch({ type: SET_ERROR, payload: { error } });
  }
};

const removeFlight = dispatch => data => {
  try {
    //validateSchema()
    dispatch({ type: REMOVE_FLIGHT, payload: { data } });
  } catch (error) {
    debugger;
    dispatch({ type: SET_ERROR, payload: { error } });
  }
};

const updateFlight = dispatch => (flight, index) => {
  try {
    //validateSchema()
    dispatch({ type: UPDATE_FLIGHT, payload: { flight, index } });
  } catch (error) {
    debugger;
    dispatch({ type: SET_ERROR, payload: { error } });
  }
};

export const { Provider, Context } = createDataContext(
  templateReducer,
  {
    addFlight,
    removeFlight,
    setError
  },
  initialState
);
