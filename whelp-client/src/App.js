import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useCookies } from "react-cookie";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  const [cookies] = useCookies(["auth_token"]);

  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={cookies.auth_token ? "/dashboard" : "/login"} />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/dashboard">
        {cookies.auth_token ? <Dashboard /> : <Redirect to="/login" />}
      </Route>
    </Switch>
  );
}

export default App;
