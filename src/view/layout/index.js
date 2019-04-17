import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import logo from "./logo.svg";
import Quantity from "../components/quantity/index.js";
import "./index.css";
const Hot = () => (
  <div>
    <h2>热门</h2>
    <h2>
      <Link to="/zhuanlan">跳转到专栏</Link>
    </h2>
  </div>
);

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      //配置左侧菜单
      numeList: [
        {
          id: 1,
          name: "工程量统计",
          path: "Quantity",
          icon: require("../../images/Quantity_pre.png"),
          icon2: require("../../images/Quantity_nor.png"),
          icon3: require("../../images/Quantity_pre.png")
        },
        {
          id: 2,
          name: "工程量统计22e",
          path: "zhuanlan",
          icon: require("../../images/2.nor.png"),
          icon2: require("../../images/2.nor.png"),
          icon3: require("../../images/2.pre.png")
        }
      ]
    };
  }
  //  事件处理区域
  // 菜单栏改变图标处理事件
  changeIcon(data, dataindex) {
    console.log(data, dataindex);
    this.state.numeList.forEach((item, index) => {
      this.state.numeList[index].icon = item.icon2;
      if (item.path === data.path) {
        console.log(data.icon);
        this.state.numeList[dataindex].icon = data.icon3;
      }
      this.setState({
        numeList: this.state.numeList
      });
    });
  }
  // 菜单栏改变图标处理事件
  //  事件处理区域
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
                        onClick={this.changeIcon.bind(this, item, index)}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="rightview">
              <Switch>
                <Route path="/Quantity" exact component={Quantity} />
                <Route path="/zhuanlan" component={Hot} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default Layout;
// export default connect(
//   mapState,
//   mapDispatch
// )(App);
