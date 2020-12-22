import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createHashHistory, createMemoryHistory, createBrowserHistory } from 'history';
import App from "../App.js";
import Login from "../view/login/index.js";
// import Home from "../view/home/index.jsx";
// import Center from "../view/center/index.jsx";

class MRoute extends Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <Switch>
          {/* <Route path="/home" component={Home} />
          <Route path="/center" component={Center} />
          <Route path="/" exact component={Login} /> */}
          <Route path="/" exact component={Login} />
          <Route path="/app" component={App} />
        </Switch>
      </Router>
    );
  }
}


//  createBrowserHistory模式  推荐使用，
//  http://localhost:3000/Quantity2


// createHashHistory模式
// http://localhost:3000/#/Quantity2

export default MRoute;
