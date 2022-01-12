import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/ewce" component={Login} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
