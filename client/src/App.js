import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Home from "./pages/Home";
import BinStatus from "./pages/BinStatus";
import Collector from "./pages/Collector";
import Voucher from "./pages/Voucher";
import WasteStats from "./pages/WasteStats";
import ConsumerStats from "./pages/ConsumerStats";
import BinCreation from "./pages/BinCreation";

//set up path for each pages to navigate to
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path={["/ewce"]} component={Login} />
        <Route exact path="/ewce/Home" component={Home} />
        <Route exact path="/ewce/BinStatus" component={BinStatus} />
        <Route exact path="/ewce/Collector" component={Collector} />
        <Route exact path="/ewce/WasteStats" component={WasteStats} />
        <Route exact path="/ewce/ConsumerStats" component={ConsumerStats} />
        <Route exact path="/ewce/Voucher" component={Voucher} />
        <Route exact path="/ewce/BinCreation" component={BinCreation} />
      </Switch>
    </Router>
  );
}

export default App;
