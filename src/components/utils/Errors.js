import React, { useState, useContext, useEffect } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { Context as AuthContext } from "../../context/auth";

const Alert = props => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  }
}));

export default () => {
  const classes = useStyles();

  const {
    state: { error },
    ...actions
  } = useContext(AuthContext);
  const { setError } = actions;
  const [open, setOpen] = useState(error);

  useEffect(() => {
    setOpen(error);
  }, [error]);

  const handleClose = (event, reason) => {
    setError(null);
  };

  return (
    <div className={classes.root}>
      <Snackbar open={open} onClose={handleClose}>
        <Alert severity="error">{error}</Alert>
      </Snackbar>
    </div>
  );
};
