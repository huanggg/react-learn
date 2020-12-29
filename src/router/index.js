import React, { Component } from "react";
import {
  HashRouter,
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import App from "../App.js";
import Login from "../view/login/index.js";
// import Home from "../view/home/index.jsx";
// import Center from "../view/center/index.jsx";
class MRoute extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          {/* <Route path="/home" component={Home} />
          <Route path="/center" component={Center} />
          <Route path="/" exact component={Login} /> */}
          <Route path="/Index" exact component={Login} />
          <Route path="/app" component={App} />
          <Redirect from='/' to='/Index'></Redirect>  {/* // 根路径重定向到 /Index */}

        </Switch>
      </HashRouter>
    );
  }
}


//  BrowserRouter模式  推荐使用，
//  http://localhost:3000/Quantity2


// HashRouter模式
// http://localhost:3000/#/Quantity2

export default MRoute;
