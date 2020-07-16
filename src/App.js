import React, { useState } from "react";

import MainRouter from "./screens/MainRouter";

import { Provider as AuthProvider } from "./context/auth";
import { Provider as FlightsProvider } from "./context/flights";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

function App(props) {
  return (
    <AuthProvider>
      <FlightsProvider>
        <MainRouter />
      </FlightsProvider>
    </AuthProvider>
  );
}

export default App;
