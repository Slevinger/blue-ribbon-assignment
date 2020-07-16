import React, { useContext, useCallback } from "react";
import { TextField } from "../components/Styles/StyledComponents";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Context as AuthContext } from "../context/auth";
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

export default () => {
  const classes = useStyles();
  const history = useHistory();
  // const location = useLocation();
  const {
    state: { error },
    doLogin
  } = useContext(AuthContext);

  const handleSubmit = useCallback(async event => {
    event.preventDefault();
    const form = event.target.closest("form");
    const formData = new FormData(form);
    const data = {};
    for (let name of formData.keys()) {
      data[name] = formData.get(name);
    }
    if (await doLogin(data)) {
      history.push("/home");
    }
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
        <TextField
          style={{ width: 400 }}
          id="outlined-basic"
          name="username"
          label="Username"
          variant="outlined"
        />
        <TextField
          style={{ width: 400 }}
          type="password"
          name="password"
          id="outlined-basic"
          label="Password"
          variant="outlined"
        />
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          href="#contained-buttons"
        >
          Login
        </Button>
        {error && (
          <div style={{ textTransform: "capitalize", color: "red" }}>
            {error.toString()}
          </div>
        )}
      </form>
    </div>
  );
};
