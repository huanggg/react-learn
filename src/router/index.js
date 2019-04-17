import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "../view/layout/index.js";
// import Home from "../view/home/index.jsx";
// import Center from "../view/center/index.jsx";
class MRoute extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route path="/home" component={Home} />
          <Route path="/center" component={Center} />
          <Route path="/" exact component={Login} /> */}
          <Route path="/" exact component={Layout} />
        </Switch>
      </Router>
    );
  }
}

export default MRoute;
