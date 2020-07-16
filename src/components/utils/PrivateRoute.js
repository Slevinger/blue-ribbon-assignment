import React, { useContext, useMemo } from "react";
import { Route, Redirect } from "react-router-dom";
import { Context as AuthContext } from "../../context/auth";

export default ({ children, ...rest }) => {
  const {
    state: { user }
  } = useContext(AuthContext);
  debugger;
  const page = useMemo(
    () => <Route {...rest}>{user ? children : <Redirect to="/auth" />}</Route>,
    [user]
  );
  return page;
};
