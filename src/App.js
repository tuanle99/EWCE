import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Home from "./pages/Home";

//set up path for each pages to navigate to
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        {/* <Route exact path="/ewce" component={Login} /> */}
        <Route exact path="/ewce" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
