import {
  SET_ERROR,
  ADD_FLIGHT,
  REMOVE_FLIGHT,
  UPDATE_FLIGHT
} from "./flightsActionTypes";

export const initialState = {
  flights: [],
  loading: false,
  error: ""
};

export default (state, { type, payload }) => {
  const { index, flight } = payload;
  switch (type) {
    case SET_ERROR:
      const { error } = payload;
      return { ...state, error, loading: false };

    case ADD_FLIGHT:
      return {
        ...state,
        error: "",
        loading: false,
        flights: [...state.flights, flight]
      };
    case REMOVE_FLIGHT:
      return {
        ...state,
        error: "",
        loading: false,
        flights: state.flights.splice(index, 1)
      };
    case UPDATE_FLIGHT:
      const { flight } = payload;
      const arr = state.flights;
      arr[index] = flight;
      return {
        ...state,
        error: "",
        loading: false,
        flights: [...arr]
      };
    default:
      return state;
  }
};
