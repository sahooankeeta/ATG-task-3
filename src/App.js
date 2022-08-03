import React, { useEffect } from "react";
import Users from "./components/users";

import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";

import "./styles.scss";
const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Users} />
    </BrowserRouter>
  );
};

export default App;
