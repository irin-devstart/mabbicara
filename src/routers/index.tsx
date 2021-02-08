import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "../pages/Main/Main";
function index() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <Main />} />
      </Switch>
    </Router>
  );
}

export default index;
