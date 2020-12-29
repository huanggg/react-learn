import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {
  HashRouter,
  BrowserRouter,
  Redirect,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import logo from "./logo.svg";
import Quantity from "./view/components/quantity/index.js";
import Quantity3 from "./view/components/quantity3/index.js";
import appCss from "./view/layout/layout.module.css";
const Quantity2 = () => (
  <div>
    <h2>热门</h2>

    <div>
      <Link to={
        {
          pathname: `/app/Quantity`,
          query: { 'key': '999999' }
        }
      }>
        跳转到专栏
      </Link>
    </div>
  </div>
);

class App extends Component {
  constructor() {
    super();
    this.state = {
      //配置左侧菜单
      numeList: [
        {
          id: 1,
          name: "工程量统计1",
          path: "/app/Quantity",
          icon: require("./images/Quantity_pre.png"),
          icon2: require("./images/Quantity_nor.png"),
          icon3: require("./images/Quantity_pre.png")
        },
        {
          id: 2,
          name: "工程量统计2",
          path: "/app/Quantity2",
          icon: require("./images/2.nor.png"),
          icon2: require("./images/2.nor.png"),
          icon3: require("./images/2.pre.png")
        },
        {
          id: 3,
          name: "工程量统计3",
          path: "/app/Quantity3",
          icon: require("./images/2.nor.png"),
          icon2: require("./images/2.nor.png"),
          icon3: require("./images/2.pre.png")
        }
      ]
    };
  }
  componentDidMount() {
    if (this.props.location.search && this.props.location.search) {
      console.log("父传的参数", this.props.location.search);
      const data = this.props.location.search
      const param = data.substr(1);//地址栏截取
      console.log("父传的参数", param)
    }
    console.log("父传的参数", this.props);
  }
  render() {
    return (
      <div className={appCss.Layout}>
        <HashRouter>
          <div className={appCss.content}>
            <ul className={appCss.leftmuenu}>
              {/* 菜单项 */}
              {this.state.numeList.map((item, index) => {
                return (
                  <li className={appCss.leftmuenu_item} key={item.id}>
                    <Link to={item.path}>
                      <img
                        src={item.icon}
                        alt=""
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className={appCss.rightview}>
              <Switch>
                {/* 路由嵌套 */}
                <Route path="/app/Quantity" exact component={Quantity} />
                <Route path="/app/Quantity2" component={Quantity2} />
                <Route path="/app/Quantity3" component={Quantity3} />
                {/* // 子路由找不到，重定向到第一个子路由 */}
                <Redirect from='/app' to='/app/Quantity'></Redirect>
              </Switch>
            </div>
          </div>
        </HashRouter>
      </div >
    );
  }
}
export default App;
