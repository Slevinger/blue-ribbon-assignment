import React from "react";
import { RedBar } from "../components/Styles/StyledComponents";
import { makeStyles } from "@material-ui/core/styles";
import FlightsTable from "../components/FlightsTable";

const Home = () => <div>Home</div>;

const useStyles = makeStyles({
  root: {
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px"
  }
});
export default () => {
  const classes = useStyles();
  debugger;
  return <FlightsTable />;
};
