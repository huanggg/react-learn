//工程量统计
import React, { Component } from "react";
// import "antd/dist/antd.css";
// import { Tabs } from "antd";
import closeicon from "../../../images/close.png";
import "./index.css";
import LeftTree from "./classified/leftTree";
import RightTable from "./classified/rightTable";
import UnclassifiedLeftTree from "./unclassified/leftTree";
import UnclassifiedRightTable from "./unclassified/rightTable";

class Quantity extends Component {
  constructor() {
    super();
    this.state = {
      //配置左侧菜单
      num: 1
    };
  }
  //--------------------------事件区域
  changeTab(data) {
    //tab切换
    this.setState({
      num: data
    });
  }
  //--------------------------事件区域
  render() {
    const { num } = this.state;
    return (
      <div className="Quantity">
        {true && (
          <div className="container">
            <div className="header">
              <span> 工程量统计</span>
              <img src={closeicon} alt="" className="closeIcon" />
            </div>
            <div className="tabContent">
              <div className="tabNav">
                <div
                  className={`tabitem  ${num === 1 ? "active" : null}`}
                  onClick={this.changeTab.bind(this, 1)}
                >
                  已分类统计
                </div>
                <div
                  className={`tabitem  ${num === 2 ? "active" : null}`}
                  onClick={this.changeTab.bind(this, 2)}
                >
                  未分类统计
                </div>
              </div>
              {num === 1 && (
                <div className="tabcontainer">
                  <div className="leftTree">
                    <LeftTree />
                  </div>
                  <div className="rightTable">
                    <RightTable />
                  </div>
                </div>
              )}
              {num === 2 && (
                <div className="tabcontainer">
                  <div className="leftTree">
                    <UnclassifiedLeftTree />
                  </div>
                  <div className="rightTable">
                    <UnclassifiedRightTable />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Quantity;
// export default connect(
//   mapState,
//   mapDispatch
// )(App);
