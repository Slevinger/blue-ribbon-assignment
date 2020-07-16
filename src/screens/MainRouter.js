import React, { useContext } from "react";

import LandingPage from "./LandingPage";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "../components/utils/PrivateRoute";
import AuthScreen from "./AuthScreen";
import { Context as FlightContext } from "../context/auth";
import { createBrowserHistory } from "history";
import Errors from "../components/utils/Errors";

export default () => {
  const history = createBrowserHistory();
  const {
    state: { user }
  } = useContext(FlightContext);

  return (
    <Router history={history}>
      <Switch>
        <Route path="/auth">
          <AuthScreen history={history} />
        </Route>
        <PrivateRoute path="/home">
          <>
            <Errors />
            <LandingPage />
          </>
        </PrivateRoute>
        <Redirect from="/" to="/auth" />
      </Switch>
    </Router>
  );
};
