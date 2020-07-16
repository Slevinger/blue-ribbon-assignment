import React, { useContext, useCallback, useReducer } from "react";
import { TextField } from "../components/Styles/StyledComponents";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Context as AuthContext } from "../context/auth";
import { Context as FlightsContext } from "../context/auth";
import { useHistory } from "react-router-dom";

// import NavLink from "../components/utils/NavLink";

const useStyles = makeStyles(theme => ({
  root: {
    flexDirection: "column",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
}));

const flightReducer = (state, { type, payload }) => {
  switch (type) {
    case "set_to":
      const { to } = payload;
      return { ...state, to };
    case "set_from":
      const { from } = payload;
      return { ...state, from };
    case "set_dep":
      const { depart } = payload;
      return { ...state, depart };
    case "set_land":
      const { land } = payload;
      return { ...state, land };
    case "set_price":
      const { price } = payload;
      return { ...state, price };
    default:
      return state;
  }
};

export default () => {
  const classes = useStyles();
  const history = useHistory();

  const [state, dispach] = useReducer(flightReducer, {
    from: null,
    to: null,
    price: null,
    land: null,
    depart: null
  });
  // const location = useLocation();
  const {
    state: { error },
    doLogin
  } = useContext(AuthContext);
  const {
    state: { flights },
    addFlight
  } = useContext(FlightsContext);

  const handleSubmit = useCallback(async event => {
    event.preventDefault();
    const form = event.target.closest("form");
    const formData = new FormData(form);
    const data = {};
    for (let name of formData.keys()) {
      data[name] = formData.get(name);
    }
    addFlight(data);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "white"
      }}
    >
      <form
        className={classes.root}
        style={{ flexDirection: "column", display: "flex" }}
        noValidate
        autoComplete="off"
      >
        {Object.keys(state).map(key => {
          return (
            <TextField
              style={{ width: 400 }}
              id="outlined-basic"
              name={key}
              label={key}
              variant="outlined"
            />
          );
        })}
      </form>
    </div>
  );
};
