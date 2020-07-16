import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  dialogPaper: {
    minHeight: "80vh",
    maxHeight: "80vh"
  }
});

export default ({ children, open, onConfirm, onCancel }) => {
  const classes = useStyles();
  return (
    <Dialog
      classes={classes.dialogPaper}
      open={open}
      onClose={onCancel}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">New Flight</DialogTitle>
      <DialogContent>
        <DialogContentText style={{ justifyContent: "space-between" }}>
          Do you want to add a new Flight?
        </DialogContentText>
        {children}
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={onConfirm} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};
