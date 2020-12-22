//工程量统计
import React, { Component } from "react";
import "antd/dist/antd.css";
import { Select } from "antd";
import { connect } from "react-redux";
import closeicon from "../../../images/close.png";
import "./index.css";
const Option = Select.Option;
//状态管理 的state
function mapStateToProps(state) {
  return {
    value: state.userInfo.name,
    conut: state.conut
  };
}
function mapDispatchToProps(dispatch) {
  return {
    changval: function () {
      dispatch({ type: "SET_USER_INFO", userInfo: "lishi111" });
      // dispatch({ type: "SetAge", Age: "32" });
    }
  };
}
class Quantity extends Component {
  constructor() {
    super();
    this.state = {
      //配置左侧菜单
      num: 1,
      selectList: [
        {
          id: 1,
          value: "1212",
          name: "pppp"
        }
      ]
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
    const { num, selectList } = this.state;
    const { value, conut, changval } = this.props;
    return (
      <div className="Quantity">
        {true && (
          <div className="container">
            <div className="header">
              <span> 工程量统计{value}{conut}</span>
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
                <div>
                  <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a person"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.props.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    {selectList.map(item => {
                      return (
                        <Option value={item.value} key={item.id}>
                          {item.name}
                        </Option>
                      );
                    })}
                  </Select>
                </div>
              </div>
              <div onClick={changval}>
                mkk
            </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quantity);
