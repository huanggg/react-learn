import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import logo from "./logo.svg";
import Quantity from "./view/components/quantity/index.js";
import "./view/layout/index.css";
const Quantity2 = () => (
  <div>
    <h2>热门</h2>

    <div>
      <Link to={
        {
          pathname: `/app`,
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
          name: "工程量统计",
          path: "/app",
          icon: require("./images/Quantity_pre.png"),
          icon2: require("./images/Quantity_nor.png"),
          icon3: require("./images/Quantity_pre.png")
        },
        {
          id: 2,
          name: "工程量统计22e",
          path: "Quantity2",
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
      <div className="Layout">
        <Router>
          <div className="content">
            <ul className="leftmuenu">
              {/* 菜单项 */}
              {this.state.numeList.map((item, index) => {
                return (
                  <li className="leftmuenu_item" key={item.id}>
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
            <div className="rightview">
              <Switch>
                <Route path="/app" exact component={Quantity} />
                <Route path="/Quantity2" component={Quantity2} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
