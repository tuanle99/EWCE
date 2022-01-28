import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Home from "./pages/Home";
import ActiveRequests from "./pages/ActiveRequests";
import Collector from "./pages/Collector";
import Voucher from "./pages/Voucher";
import WasteStats from "./pages/WasteStats";
import ConsumerStats from "./pages/ConsumerStats";

//set up path for each pages to navigate to
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/ewce" component={Home} />
        <Route exact path="/ewce/login" component={Login} />
        <Route exact path="/ewce/ActiveRequests" component={ActiveRequests} />
        <Route exact path="/ewce/Collector" component={Collector} />
        <Route exact path="/ewce/WasteStats" component={WasteStats} />
        <Route exact path="/ewce/ConsumerStats" component={ConsumerStats} />
        <Route exact path="/ewce/Voucher" component={Voucher} />
      </Switch>
    </Router>
  );
}

export default App;
