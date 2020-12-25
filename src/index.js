import React from "react";
import ReactDOM from "react-dom";
import "./index.css";  //这种方式引入的css样式，会作用于当前组件及其所有后代组件。
import * as serviceWorker from "./serviceWorker";
import { Provider } from 'react-redux'
import Store from './store/state/index.js'
import MRoute from './router/index.js'
import { HashRouter as Router } from 'react-router-dom'
// import 'element-theme-default'
ReactDOM.render(
  <Provider store={Store}>
    <Router>
      <MRoute />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
